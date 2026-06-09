import React from "react";
import Link from "next/link";
import { PRODUTOS } from "@/lib/produtos";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  // Pegar produtos em destaque
  const destaques = PRODUTOS.filter((p) => p.destaque);

  return (
    <div className="space-y-20 animate-fade-in select-none">
      
      {/* 1. HERO SECTION - MINIMAL FASHION EDITORIAL */}
      <section className="relative py-20 md:py-32 flex flex-col items-center text-center justify-center border-b border-brand-border">
        {/* Subtle grids line layout */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:16px_16px]" />
        
        <div className="max-w-4xl space-y-6 relative z-10 flex flex-col items-center">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-neutral-400 dark:text-neutral-500">
            curadoria independente
          </span>
          
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-8xl leading-none text-black dark:text-white max-w-3xl">
            A Estética do Tempo
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base font-normal opacity-60 max-w-xl leading-relaxed tracking-wider py-2">
            Coleção seleta de peças de vestuário vintage, vinis ingleses autênticos e câmeras clássicas restauradas. Achados históricos para compor o estilo contemporâneo.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 relative z-10 w-full max-w-xs justify-center">
          <Link
            href="/produtos"
            className="zara-btn text-[10px] py-4 w-full"
          >
            VER COLEÇÃO
          </Link>
          <Link
            href="/contato"
            className="zara-btn-secondary text-[10px] py-4 w-full"
          >
            SOBRE O ESPAÇO
          </Link>
        </div>
      </section>

      {/* 2. BRAND MANIFESTO SECTION - EDITORIAL GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-8">
        <div className="space-y-6 max-w-md">
          <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-neutral-400">nosso manifesto</span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-black dark:text-white leading-tight">
            Permanência sobre obsolescência.
          </h2>
          <p className="text-[11px] opacity-60 leading-relaxed font-normal tracking-wide">
            O Bazar do Baltazar nasceu do desejo de resgatar o valor das peças duráveis. Acreditamos que roupas, músicas e objetos não devem ser descartáveis. Cada item em nosso acervo foi garimpado manualmente, limpo e testado para continuar contando sua história.
          </p>
        </div>

        {/* Big Editorial Image Link */}
        <div className="aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 border border-brand-border overflow-hidden relative group">
          <img
            src="https://images.unsplash.com/photo-1513477967668-2aaf11838bd6?w=800&auto=format&fit=crop&q=80"
            alt="Máquina de Escrever Olivetti"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all flex items-end p-6">
            <span className="text-[10px] text-white uppercase tracking-[0.2em] font-semibold border-b border-white pb-1">
              PRODUTOS TESTADOS MANUALMENTE
            </span>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS (GALERIA) */}
      <section className="space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-baseline gap-4 border-b border-brand-border pb-4">
          <div>
            <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-neutral-400">coleção cápsula</span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-black dark:text-white mt-1">
              Garimpos Selecionados
            </h2>
          </div>
          <Link
            href="/produtos"
            className="text-[10px] uppercase tracking-[0.2em] opacity-65 hover:opacity-100 hover:underline transition-opacity"
          >
            Ver catálogo completo
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destaques.slice(0, 3).map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      </section>

    </div>
  );
}
