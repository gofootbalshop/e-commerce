// components/home/TeamsSection.tsx
import TeamCard from "../Cards/TeamCard";

const teams = [
  {
    name: "Juventus",
    href: "/squadre/juventus",
    image: "/assets/home/t-shirt.png",
  },
  {
    name: "Inter",
    href: "/squadre/inter",
    image: "/assets/home/t-shirt.png",
  },
  {
    name: "Milan",
    href: "/squadre/milan",
    image: "/assets/home/t-shirt.png",
  },
  {
    name: "Napoli",
    href: "/squadre/napoli",
    image: "/assets/home/t-shirt.png",
  },
  {
    name: "Roma",
    href: "/squadre/roma",
    image: "/assets/home/t-shirt.png",
  },
];

const tabs = ["Club", "Serie A", "Premier League", "LaLiga", "Bundesliga", "Ligue 1", "Nazionali"];

export default function TeamsSection() {
  return (
    <section className="bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase text-zinc-950">
            Scegli la tua squadra
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-14 rounded-full bg-[#6bd334]" />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`rounded-full border px-8 py-3 text-sm font-bold uppercase transition ${
                index === 0
                  ? "border-[#6bd334] bg-[#6bd334] text-white"
                  : "border-zinc-200 bg-white text-zinc-800 hover:border-[#6bd334] hover:text-[#6bd334]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teams.map((team) => (
            <TeamCard key={team.name} {...team} />
          ))}
        </div>
      </div>
    </section>
  );
}