import { FaTelegramPlane, FaStar, FaShieldAlt } from "react-icons/fa";

type ProductInfoProps = {
  title: string;
  team: string;
  league: string;
  description: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  sizes: string[];
  telegramUrl: string;
};

export default function ProductInfo({
  title,
  team,
  league,
  description,
  price,
  oldPrice,
  rating,
  reviews,
  sizes,
  telegramUrl,
}: ProductInfoProps) {
  return (
    <div>
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#6bd334]">
        {league}
      </p>

      <h1 className="mt-3 text-4xl font-black uppercase text-zinc-950 md:text-5xl">
        {team}
      </h1>

      <h2 className="mt-2 text-xl font-bold text-zinc-500">{title}</h2>

      <div className="mt-5 flex items-center gap-2">
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar
              key={index}
              size={17}
              className={
                index < Math.round(rating) ? "text-yellow-500" : "text-zinc-300"
              }
            />
          ))}
        </div>

        <span className="text-sm font-bold text-zinc-900">{rating}</span>
        <span className="text-sm text-zinc-500">({reviews} recensioni)</span>
      </div>

      <div className="mt-7 flex items-end gap-3">
        {oldPrice && (
          <p className="text-xl font-bold text-zinc-400 line-through">
            €{oldPrice.toFixed(2)}
          </p>
        )}

        <p className="text-4xl font-black text-zinc-950">
          €{price.toFixed(2)}
        </p>
      </div>

      <p className="mt-7 text-base leading-8 text-zinc-600">{description}</p>

      <div className="mt-8">
        <p className="text-sm font-black uppercase text-zinc-950">
          Misure disponibili
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {sizes.map((size) => (
            <span
              key={size}
              className="flex h-12 min-w-12 items-center justify-center rounded-full border border-zinc-200 px-5 text-sm font-black text-zinc-800"
            >
              {size}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
        <div className="flex items-start gap-3">
          <FaShieldAlt className="mt-1 text-[#6bd334]" size={22} />

          <div>
            <h3 className="font-black uppercase text-zinc-950">
              Informazioni prodotto
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Per disponibilità, spedizione, personalizzazione e dettagli sulla
              maglia, contattaci direttamente su Telegram.
            </p>
          </div>
        </div>
      </div>

      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#229ED9] px-8 py-4 text-base font-black uppercase text-white transition hover:scale-[1.02] hover:bg-[#1d8fca]"
      >
        <FaTelegramPlane size={22} />
        Contattaci su Telegram
      </a>
    </div>
  );
}