"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const { setIsCartOpen, cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", path: "/" },
    { label: "Produtos", path: "/produtos" },
    { label: "Contato", path: "/contato" },
  ];

  return (
    <header className="relative w-full top-0 z-40 bg-white dark:bg-black text-black dark:text-white border-b border-brand-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Navigation - Left on Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-[11px] uppercase tracking-[0.2em] transition-all relative py-1 hover:opacity-100 ${
                  isActive
                    ? "opacity-100 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black dark:after:bg-white"
                    : "opacity-60 hover:opacity-85"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] opacity-80 hover:opacity-100 transition-opacity cursor-pointer py-2"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="text-black dark:text-white" /> : <Menu className="text-black dark:text-white" />}
        </button>
        {/* Mobile menu - Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-black border-t border-brand-border py-4 flex flex-col items-center gap-4 md:hidden">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-[10px] uppercase tracking-[0.15em] ${
                  pathname === item.path ? "font-bold opacity-100" : "opacity-60"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
        

        {/* Logo - Centered */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="font-editorial text-2xl sm:text-3xl uppercase tracking-[0.25em] text-center font-normal">
            BALTAZAR
          </span>
          <span className="text-[8px] tracking-[0.4em] uppercase opacity-60 mt-0.5">
            b a z a r
          </span>
        </Link>

        {/* Actions (Bag) - Right */}
        <div className="flex items-center">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] opacity-80 hover:opacity-100 transition-opacity cursor-pointer py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="hidden sm:inline">SACOLA</span>
            <span>({cartCount})</span>
          </button>
        </div>

      </div>
    </header>
  );
}
