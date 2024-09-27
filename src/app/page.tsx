import { Header } from "@components/Header";
import { Hero } from "@components/Hero";

export default function Home() {
  return (
    <div className="flex justify-center flex-col w-full ">
      <Header />
      <Hero />
    </div>
  );
}
