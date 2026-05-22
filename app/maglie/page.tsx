import ShopHero from "@/app/components/shop/ShopHero";
import ShopFilters from "@/app/components/shop/ShopFilters";
import ProductsGrid from "@/app/components/shop/ProductsGrid";
import Pagination from "@/app/components/ui/Pagination";
import Footer from "@/app/components/layout/Footer";
import Header from "../components/layout/Header";

export default function MagliePage() {
  return (
    <main className="bg-white">
      <Header />
      <ShopHero />

      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black uppercase text-zinc-950">
              Scegli la tua maglia
            </h2>

            <div className="mx-auto mt-3 h-[3px] w-14 rounded-full bg-[#6bd334]" />

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-500">
              Filtra per campionato, squadra o categoria e trova la maglia più
              adatta al tuo stile.
            </p>
          </div>

          <ShopFilters />

          <ProductsGrid />

          <Pagination currentPage={1} totalPages={8} />
        </div>
      </section>

      <Footer />
    </main>
  );
}