import ProductGallery from "@/app/components/product/ProductGallery";
import ProductInfo from "@/app/components/product/ProductInfo";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";

const product = {
  title: "Home Kit 2026",
  team: "Juventus",
  league: "Serie A",
  description:
    "Maglia replica Juventus pensata per chi vuole vivere la passione bianconera ogni giorno. Design moderno, tessuto leggero e vestibilità comoda, ideale per il tempo libero, lo sport o per completare il proprio look da tifoso.",
  price: 49.99,
  oldPrice: 69.99,
  rating: 4.8,
  reviews: 124,
  sizes: ["S", "M", "L", "XL", "XXL"],
  telegramUrl: "https://t.me/tuo_username",
  images: [
    "/assets/home/t-shirt.png",
    "/assets/home/t-shirt.png",
    "/assets/home/t-shirt.png",
    "/assets/home/t-shirt.png",
  ],
};

export default function SingleProductPage() {
  return (
    <>
        <Header />
        <main className="bg-white">
        <section className="px-6 py-14">
            <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                <ProductGallery images={product.images} title={product.team} />

                <ProductInfo
                title={product.title}
                team={product.team}
                league={product.league}
                description={product.description}
                price={product.price}
                oldPrice={product.oldPrice}
                rating={product.rating}
                reviews={product.reviews}
                sizes={product.sizes}
                telegramUrl={product.telegramUrl}
                />
            </div>
            </div>
        </section>

        <Footer />
        </main>
    </>
    
  );
}