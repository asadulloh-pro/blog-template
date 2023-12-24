"use client";
import { useState } from "react";
import datajson from "@/constants/card-data.json";
import CardContainer from "@/components/shared/card-container";
import Banner from "@/components/common/banner/banner.component";
import { CardContainerType } from "@/components/shared/card-container/card-container.component";
import Button from "@/components/ui/button";
import { cards } from "@/components/common/cards/cards.comopnent";
import Select from "@/components/ui/select";

const typeData = {
  primary: datajson,
  secondary: datajson,
  additional: [datajson[0], datajson[1]],
  alpha: [datajson[0], datajson[1]],
} as Record<CardContainerType["type"], CardContainerType["data"]>;

const defaults: Record<
  "banner" | "cards",
  CardContainerType & { block: "blog" | "banner"; index: number }
> = {
  banner: {
    index: 1,
    block: "banner",
    data: [{ ...datajson[0], image: "/mock/banner.jpg" }],
    type: "primary",
    container: "slider",
  },
  cards: {
    index: 1,
    block: "blog",
    type: "secondary",
    data: datajson,
    container: "slider",
  },
};

const defaultData = [
  {
    index: 0,
    block: "blog",
    type: "alpha",
    data: [datajson[0], datajson[1]],
    container: "default",
  },
] as Array<CardContainerType & { block: "blog" | "banner"; index: number }>;

const Builder = () => {
  const [data, setData] =
    useState<
      Array<CardContainerType & { block: "blog" | "banner"; index: number }>
    >(defaultData);

  const EditRowType = (index: number, type: CardContainerType["type"]) => {
    setData((state) => {
      const newstate = [...state];
      const element = newstate.find((elem) => elem.index === index);
      if (element) {
        element.type = type;
        element.data = typeData[type];
      }
      return newstate;
    });
  };

  const EditRowContainer = (
    index: number,
    type: CardContainerType["container"]
  ) => {
    setData((state) => {
      const newstate = [...state];
      const element = newstate.find((elem) => elem.index === index);
      if (element) {
        element.container = type;
      }
      return newstate;
    });
  };

  const onAdd = (type: keyof typeof defaults) => {
    setData((state) => {
      const newdata = [...state];
      newdata.push({
        ...defaults[type],
        index: state.length,
      });
      return newdata;
    });
  };

  const onEditRowIndex = (currentindex: number, index: number) => {
    setData((state) => {
      let newstate = [...JSON.parse(JSON.stringify(state))];
      const element_current = newstate.find(
        (elem) => elem.index === currentindex
      );
      const element_update = newstate.find((elem) => elem.index === index);
      if (element_current && element_update) {
        element_current.index = index;
        element_update.index = currentindex;
      }
      newstate = newstate.sort((a, b) => a.index - b.index);
      return newstate;
    });
  };

  return (
    <div className="grid gap-[2.25rem] max-w-full pb-[3rem]">
      {data.map((row) => {
        if (row.block === "blog") {
          return (
            <div className="grid grid-cols-12 gap-[2.25rem]" key={row.index}>
              <div className="col-span-10">
                <CardContainer {...row} />;
              </div>
              <div className="col-span-2 flex flex-col gap-[0.3rem] pr-[1rem]">
                <Select
                  instanceId="select1"
                  placeholder="Card type"
                  options={Object.keys(cards).map((elem) => ({
                    label: elem.toUpperCase(),
                    value: elem,
                  }))}
                  defaultValue={{
                    label: row.type.toUpperCase(),
                    value: row.type,
                  }}
                  onChange={(e) => {
                    const value = e as { value: CardContainerType["type"] };
                    EditRowType(row.index, value.value);
                  }}
                />
                <Select
                  instanceId="select2"
                  placeholder="Container type"
                  options={["default", "slider"].map((elem) => ({
                    label: elem.toUpperCase(),
                    value: elem,
                  }))}
                  defaultValue={{
                    label: row.container.toUpperCase(),
                    value: row.container,
                  }}
                  onChange={(e) => {
                    const value = e as {
                      value: CardContainerType["container"];
                    };
                    EditRowContainer(row.index, value.value);
                  }}
                />
                <Select
                  instanceId="select3"
                  placeholder=""
                  options={Array(data.length)
                    .fill("1")
                    .map((elem, index) => ({
                      label: index,
                      value: index,
                    }))}
                  value={{ label: row.index, value: row.index }}
                  onChange={(e) => {
                    const value = e as {
                      value: number;
                    };
                    onEditRowIndex(row.index, +value.value);
                  }}
                />
                <input
                  type="text"
                  defaultValue={row.title}
                  onBlur={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </div>
            </div>
          );
        } else {
          return (
            <div className="grid grid-cols-12 gap-[2.25rem]" key={row.index}>
              <div className="col-span-10">
                <Banner image={row.data[0].image} key={row.link} />
              </div>
              <div className="col-span-2">
                <Select
                  instanceId="select3"
                  placeholder=""
                  options={Array(data.length)
                    .fill("1")
                    .map((elem, index) => ({
                      label: index,
                      value: index,
                    }))}
                  value={{ label: row.index, value: row.index }}
                  onChange={(e) => {
                    const value = e as {
                      value: number;
                    };
                    onEditRowIndex(row.index, +value.value);
                  }}
                />
              </div>
            </div>
          );
        }
      })}
      <div className="grid gap-[3rem] grid-cols-2">
        <Button
          type="default"
          onClick={() => {
            onAdd("banner");
          }}
        >
          Add Banner
        </Button>

        <Button
          type="primary"
          onClick={() => {
            onAdd("cards");
          }}
        >
          Add Cards
        </Button>
      </div>
    </div>
  );
};

export default Builder;
