import { Header } from "@components/Header";
import { HomePageContent } from "@components/HomePage";
import { Footer } from "@components/Footer";

export default function Home() {
  return (
    <div className="flex justify-center flex-col w-full ">
      <Header />
      <HomePageContent />
      <Footer />
    </div>
  );
}
