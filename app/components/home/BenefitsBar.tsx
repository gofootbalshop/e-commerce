// components/home/BenefitsBar.tsx
import { Headphones, Lock, RefreshCcw, Truck } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Spedizione gratuita",
    text: "Sopra i 69€ in tutta Italia",
  },
  {
    icon: Lock,
    title: "Pagamenti sicuri",
    text: "Carte, PayPal e Klarna",
  },
  {
    icon: RefreshCcw,
    title: "Reso facile",
    text: "Entro 14 giorni dalla consegna",
  },
  {
    icon: Headphones,
    title: "Assistenza dedicata",
    text: "Siamo sempre qui per te",
  },
];

export default function BenefitsBar() {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center text-[#6bd334]">
                <Icon size={42} strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="text-sm font-black uppercase text-zinc-950">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}