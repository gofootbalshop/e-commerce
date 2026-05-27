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
  { label: "Maglie Club", href: "/maglie" },
  { label: "Maglie Nazionali", href: "/maglie-nazionali" },
];

export default function Header() {
  return (
    <header className="w-full bg-[#05090b] text-white">
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

      </div>
    </header>
  );
}