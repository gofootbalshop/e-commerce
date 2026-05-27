// components/home/TeamCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Star } from "lucide-react";

type TeamCardProps = {
  name: string;
  league: string;
  description: string;
  rating: number;
  reviews: number;
  href: string;
  image: string;
  badge?: string;
};

export default function TeamCard({
  name,
  league,
  description,
  rating,
  reviews,
  href,
  image,
  badge = "Replica kit",
}: TeamCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-100 via-white to-zinc-200">
        <div className="absolute left-4 top-4 rounded-full bg-[#6bd334] px-3 py-1 text-xs font-black uppercase text-white">
          {badge}
        </div>

        <Image
          src={image}
          alt={name}
          width={260}
          height={260}
          className="h-48 w-auto object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-[#6bd334]">
              {league}
            </p>
            <h3 className="mt-1 text-xl font-black uppercase text-zinc-950">
              {name}
            </h3>
          </div>

          <ShieldCheck className="mt-1 text-[#6bd334]" size={24} />
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-600">
          {description}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={16}
                fill={index < Math.round(rating) ? "currentColor" : "none"}
              />
            ))}
          </div>

          <span className="text-sm font-bold text-zinc-900">{rating}</span>
          <span className="text-sm text-zinc-500">({reviews})</span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-4">
          <span className="text-xs font-bold uppercase text-zinc-500">
            Maglie disponibili
          </span>

          <span className="inline-flex items-center gap-1 text-sm font-black uppercase text-zinc-950 transition group-hover:text-[#6bd334]">
            Scopri
            <ChevronRight size={17} />
          </span>
        </div>
      </div>
    </Link>
  );
}