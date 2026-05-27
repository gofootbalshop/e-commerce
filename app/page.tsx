import Header from "@/app/components/layout/Header";
import HeroSection from "@/app/components/home/HeroSection";
import TeamsSection from "@/app/components/home/TeamsSection";
import Footer from "@/app/components/layout/Footer";
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