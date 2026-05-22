import ProductCard from "../cards/ProductCard";

const products = [
  {
    name: "Home Kit 2026",
    team: "Juventus",
    league: "Serie A",
    category: "Club",
    price: 49.99,
    oldPrice: 69.99,
    rating: 4.8,
    reviews: 124,
    image: "/assets/home/t-shirt.png",
    href: "/maglie/juventus-home",
  },
  {
    name: "Home Kit 2026",
    team: "Inter",
    league: "Serie A",
    category: "Club",
    price: 52.99,
    rating: 4.7,
    reviews: 98,
    image: "/assets/home/t-shirt.png",
    href: "/maglie/inter-home",
  },
  {
    name: "Home Kit 2026",
    team: "Milan",
    league: "Serie A",
    category: "Club",
    price: 54.99,
    oldPrice: 74.99,
    rating: 4.9,
    reviews: 143,
    image: "/assets/home/t-shirt.png",
    href: "/maglie/milan-home",
  },
  {
    name: "Home Kit 2026",
    team: "Napoli",
    league: "Serie A",
    category: "Club",
    price: 49.99,
    rating: 4.8,
    reviews: 87,
    image: "/assets/home/t-shirt.png",
    href: "/maglie/napoli-home",
  },
  {
    name: "Home Kit 2026",
    team: "Roma",
    league: "Serie A",
    category: "Club",
    price: 47.99,
    rating: 4.6,
    reviews: 76,
    image: "/assets/home/t-shirt.png",
    href: "/maglie/roma-home",
  },
  {
    name: "Away Kit 2026",
    team: "Real Madrid",
    league: "LaLiga",
    category: "Club",
    price: 59.99,
    rating: 4.9,
    reviews: 189,
    image: "/assets/home/t-shirt.png",
    href: "/maglie/real-madrid-away",
  },
  {
    name: "Home Kit 2026",
    team: "Manchester City",
    league: "Premier League",
    category: "Club",
    price: 58.99,
    rating: 4.8,
    reviews: 164,
    image: "/assets/home/t-shirt.png",
    href: "/maglie/manchester-city-home",
  },
  {
    name: "Home Kit 2026",
    team: "Italia",
    league: "Nazionali",
    category: "Nazionale",
    price: 55.99,
    oldPrice: 79.99,
    rating: 4.9,
    reviews: 210,
    image: "/assets/home/t-shirt.png",
    href: "/maglie/italia-home",
    badge: "Nazionale",
  },
];

export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.href} {...product} />
      ))}
    </div>
  );
}