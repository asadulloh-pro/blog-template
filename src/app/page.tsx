import Cards from "@common/cards";
import data from "@/constants/card-data.json";

// import Button from "@/components/ui/button";

export default function Home() {
  return (
    <main className={"flex items-center justify-center min-h-[100vh]"}>
      {/* <Button type="primary" size="xl" disabled>
        Button CTA
      </Button> */}
      <Cards data={data} type="additional" />
    </main>
  );
}
