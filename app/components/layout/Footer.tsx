// components/layout/Footer.tsx
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineChevronRight,
} from "react-icons/hi";

const shopLinks = [
  { label: "Serie A", href: "#" },
  { label: "Premier League", href: "#" },
  { label: "LaLiga", href: "#" },
  { label: "Bundesliga", href: "#" },
  { label: "Nazionali", href: "#" },
];

const supportLinks = [
  { label: "Contatti", href: "#" },
  { label: "Spedizioni", href: "#" },
  { label: "Resi", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-[#6bd334] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#6bd334] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6bd334] text-xl font-black text-black">
                GF
              </div>

              <div>
                <h3 className="text-2xl font-black uppercase tracking-wide">
                  GoFootball
                </h3>

                <p className="text-sm text-zinc-400">
                  Replica kits & football passion
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-zinc-400">
              Scopri le migliori maglie replica delle squadre più iconiche del
              calcio mondiale. Qualità premium per veri tifosi.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
                (Icon, index) => (
                  <button
                    key={index}
                    type="button"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 transition hover:border-[#6bd334] hover:bg-[#6bd334] hover:text-black"
                  >
                    <Icon size={18} />
                  </button>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase">Categorie</h4>

            <div className="mt-6 space-y-4">
              {shopLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-[#6bd334]"
                >
                  <HiOutlineChevronRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase">Supporto</h4>

            <div className="mt-6 space-y-4">
              {supportLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-[#6bd334]"
                >
                  <HiOutlineChevronRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase">Contatti</h4>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-zinc-900 p-2">
                  <HiOutlineMail size={16} className="text-[#6bd334]" />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="text-sm font-medium text-zinc-200">
                    support@gofootball.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-zinc-900 p-2">
                  <HiOutlinePhone size={16} className="text-[#6bd334]" />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">Telefono</p>
                  <p className="text-sm font-medium text-zinc-200">
                    +39 351 000 0000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-zinc-900 p-2">
                  <HiOutlineLocationMarker
                    size={16}
                    className="text-[#6bd334]"
                  />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">Sede</p>
                  <p className="text-sm font-medium text-zinc-200">
                    Milano, Italia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-zinc-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-zinc-500">
              © 2026 GoFootballShop. Tutti i diritti riservati.
            </p>

            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <Link href="#" className="hover:text-[#6bd334]">
                Termini
              </Link>

              <Link href="#" className="hover:text-[#6bd334]">
                Privacy
              </Link>

              <Link href="#" className="hover:text-[#6bd334]">
                Cookie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}