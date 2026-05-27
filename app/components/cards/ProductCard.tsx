import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShieldAlt, FaChevronRight } from "react-icons/fa";

type ProductCardProps = {
  name: string;
  team: string;
  league: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  href: string;
  badge?: string;
};

export default function ProductCard({
  name,
  team,
  league,
  category,
  price,
  oldPrice,
  rating,
  reviews,
  image,
  href,
  badge = "Replica kit",
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-100 via-white to-zinc-200">
        <div className="absolute left-4 top-4 rounded-full bg-[#6bd334] px-3 py-1 text-xs font-black uppercase text-white">
          {badge}
        </div>

        <Image
          src={image}
          alt={name}
          width={260}
          height={260}
          className="h-52 w-auto object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-[#6bd334]">
              {league} / {category}
            </p>

            <h3 className="mt-1 text-lg font-black uppercase text-zinc-950">
              {team}
            </h3>

            <p className="mt-1 text-sm text-zinc-500">{name}</p>
          </div>

          <FaShieldAlt className="mt-1 text-[#6bd334]" size={22} />
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                size={15}
                className={
                  index < Math.round(rating)
                    ? "text-yellow-500"
                    : "text-zinc-300"
                }
              />
            ))}
          </div>

          <span className="text-sm font-bold text-zinc-900">{rating}</span>
          <span className="text-sm text-zinc-500">({reviews})</span>
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-zinc-100 pt-4">
          <div>
            {oldPrice && (
              <p className="text-sm text-zinc-400 line-through">
                €{oldPrice.toFixed(2)}
              </p>
            )}

            <p className="text-xl font-black text-zinc-950">
              €{price.toFixed(2)}
            </p>
          </div>

          <span className="inline-flex items-center gap-1 text-sm font-black uppercase text-zinc-950 transition group-hover:text-[#6bd334]">
            Scopri
            <FaChevronRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}