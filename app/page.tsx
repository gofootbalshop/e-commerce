import Header from "@/app/components/layout/Header";
import HeroSection from "@/app/components/home/HeroSection";
import TeamsSection from "./components/home/TeamsSection";
import Footer from "./components/layout/Footer";
export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <TeamsSection />
      <Footer />
    </>
  );
}