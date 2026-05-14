// components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-black">
      {/* Background */}
      <Image
        src="/assets/home/hero-section.png"
        alt="Stadio di calcio illuminato"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 lg:px-8">
        {/* Text */}
        <div className="z-10 max-w-xl">
          <h1 className="text-5xl font-black uppercase leading-tight tracking-tight text-white md:text-7xl">
            La tua passione.
            <span className="block text-[#6bd334]">La tua maglia.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-8 text-white/85">
            Scopri maglie replica delle squadre più amate. Stile, qualità e
            passione in ogni dettaglio.
          </p>

          <Link
            href="/maglie-club"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#6bd334] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-[#58bd27]"
          >
            Scopri le maglie
            <ChevronRight size={20} />
          </Link>
        </div>

        {/* T-shirts */}
        <div className="pointer-events-none absolute bottom-0 right-0 hidden w-[58%] max-w-[760px] lg:block">
          <Image
            src="/assets/home/t-shirt.png"
            alt="Maglie da calcio"
            width={900}
            height={680}
            priority
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}