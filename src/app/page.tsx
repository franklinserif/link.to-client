import { Header } from "@components/Header";
import { HomePageContent } from "@components/HomePage";
import { Footer } from "@components/Footer";
import { LinkShortener } from "@components/LinkShortener/LinkShortener";
import { Params } from "@interfaces/searchParams";
import { validateSearchParams } from "@libs/params";

export default function Home({ searchParams }: { searchParams: Params }) {
  const paramId = validateSearchParams(searchParams, "id");

  return (
    <div className="flex justify-center flex-col w-full ">
      <Header>
        <LinkShortener id={paramId} />
      </Header>
      <HomePageContent />
      <Footer />
    </div>
  );
}
