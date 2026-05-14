import Header from "@/app/components/layout/Header";
import HeroSection from "@/app/components/Home/HeroSection";
import TeamsSection from "./components/Home/TeamsSection";
export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <TeamsSection />
    </>
  );
}