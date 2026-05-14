// components/Header.tsx
import Link from "next/link";
import {
  Search,
  User,
  ShoppingCart,
  Truck,
  Lock,
  Headphones,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Maglie Club", href: "/maglie-club" },
  { label: "Maglie Nazionali", href: "/maglie-nazionali" },
  { label: "Premium", href: "/premium" },
  { label: "Novità", href: "/novita" },
  { label: "Saldi", href: "/saldi" },
];

export default function Header() {
  return (
    <header className="w-full bg-[#05090b] text-white">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-xs font-medium uppercase tracking-wide text-white/90">
          <div className="flex items-center gap-2">
            <Truck size={16} />
            <span>Spedizione gratuita sopra i 69€</span>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Lock size={15} />
            <span>Pagamenti sicuri</span>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Headphones size={16} />
            <span>Assistenza clienti</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-4xl font-black tracking-wide">
            GOAL<span className="font-light">STORE</span>
          </span>
          <span className="mt-1 text-center text-[10px] tracking-[0.45em] text-white/60">
            FOOTBALL IS PASSION
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-semibold uppercase tracking-wide transition hover:text-[#6bd334] ${
                index === 0 ? "text-white" : "text-white/85"
              }`}
            >
              {item.label}

              {index === 0 && (
                <span className="absolute -bottom-3 left-0 h-[2px] w-full rounded-full bg-[#6bd334]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="transition hover:text-[#6bd334]">
            <Search size={28} strokeWidth={1.7} />
          </button>

          <Link href="/account" className="transition hover:text-[#6bd334]">
            <User size={28} strokeWidth={1.7} />
          </Link>

          <Link href="/cart" className="relative transition hover:text-[#6bd334]">
            <ShoppingCart size={30} strokeWidth={1.7} />
            <span className="absolute -right-3 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#6bd334] text-xs font-bold text-white">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}