const categories = [
  "Tutte",
  "Serie A",
  "Premier League",
  "LaLiga",
  "Bundesliga",
  "Ligue 1",
  "Nazionali",
];

export default function ShopFilters() {
  return (
    <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`rounded-full border px-6 py-3 text-sm font-bold uppercase transition ${
              index === 0
                ? "border-[#6bd334] bg-[#6bd334] text-white"
                : "border-zinc-200 bg-white text-zinc-800 hover:border-[#6bd334] hover:text-[#6bd334]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <select className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-bold text-zinc-700 outline-none">
          <option>Ordina per</option>
          <option>Prezzo crescente</option>
          <option>Prezzo decrescente</option>
          <option>Più vendute</option>
          <option>Migliori recensioni</option>
        </select>
      </div>
    </div>
  );
}