import Banner from "@/components/common/banner";
import { CardContainerType } from "@/components/shared/card-container/card-container.component";
import data from "@/constants/card-data.json";
import dynamic from "next/dynamic";

const CardContainer = dynamic(
  () => import("@/components/shared/card-container"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

// import Button from "@/components/ui/button";

const homepage = [
  {
    block: "blog",
    type: "alpha",
    data: [data[0], data[1]],
    container: "default",
  },
  {
    block: "blog",
    type: "additional",
    data: [data[0], data[1]],
    container: "default",
  },
  {
    block: "blog",
    type: "secondary",
    data: data,
    container: "slider",
  },
  {
    block: "blog",
    type: "primary",
    data: data,
    container: "slider",
    title: "Актуальное",
    link: "/",
  },
  {
    block: "banner",
    data: [{ ...data[0], image: "/mock/banner.jpg" }],
  },
  {
    block: "blog",
    type: "primary",
    data: [data[0], data[1], data[2]],
    container: "default",
    title: "Лайфхаки",
    link: "/",
  },
] as Array<CardContainerType & { block: "blog" | "banner" }>;

export default function Home() {
  return (
    <>
      <main className={"container mx-auto grid gap-[2.25rem]"}>
        {homepage.map((elem) => {
          if (elem.block === "blog") {
            return <CardContainer {...elem} key={elem.link} />;
          } else {
            return <Banner image={elem.data[0].image} key={elem.link} />;
          }
        })}
      </main>
    </>
  );
}
