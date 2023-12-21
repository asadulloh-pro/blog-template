import Cards from "@common/cards";
import data from "@/constants/card-data.json";

// import Button from "@/components/ui/button";

export default function Home() {
  return (
    <main
      className={
        "flex items-center justify-center min-h-[100vh] container mx-auto"
      }
    >
      {/* <Button type="primary" size="xl" disabled>
        Button CTA
      </Button> */}
      <div className="grid grid-cols-6 w-full">
        <div className="col-span-4">
          <Cards data={data} type="alpha" />
        </div>
        <div className="col-span-2">
          <Cards data={data} type="alpha" />
          <Cards data={data} type="bettta" />
        </div>
      </div>
    </main>
  );
}
