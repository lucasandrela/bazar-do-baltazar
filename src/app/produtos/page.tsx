"use client";

import React, { useState, useMemo } from "react";
import { PRODUTOS } from "@/lib/produtos";
import ProductCard from "@/components/ProductCard";

export default function Catalog() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("default");

  // Obter categorias únicas
  const categories = useMemo(() => {
    const cats = new Set(PRODUTOS.map((p) => p.category));
    return ["Todos", ...Array.from(cats)];
  }, []);

  // Filtrar e ordenar produtos
  const filteredProducts = useMemo(() => {
    let result = [...PRODUTOS];

    // Busca
    if (search.trim() !== "") {
      const query = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Filtro por categoria
    if (selectedCategory !== "Todos") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Ordenação
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, selectedCategory, sortBy]);

  return (
    <div className="space-y-12 animate-fade-in select-none">
      
      {/* Page Header */}
      <div className="border-b border-brand-border pb-8 text-center sm:text-left space-y-2">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-neutral-400 dark:text-neutral-500">
          acervo de peças
        </span>
        <h1 className="font-editorial text-3xl sm:text-5xl text-black dark:text-white">
          Coleção Completa
        </h1>
        <p className="text-[11px] opacity-60 max-w-md tracking-wide leading-relaxed font-normal">
          Peças raras de brechó, vinis clássicos e relíquias de decoração. Cada garimpo é individual e exclusivo.
        </p>
      </div>

      {/* Filters Area */}
      <div className="py-2 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
          
          {/* Search Input (Minimal bottom-border) */}
          <div className="flex flex-col space-y-2">
            <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-neutral-400">
              Buscar no Acervo
            </label>
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="PROCURAR RELÍQUIA..."
                className="w-full bg-transparent border-b border-brand-border py-2 text-xs font-medium placeholder:text-neutral-300 dark:placeholder:text-neutral-600 focus:outline-none focus:border-black dark:focus:border-white transition-colors text-black dark:text-white uppercase tracking-widest"
              />
              <span className="absolute right-1 top-1/2 -translate-y-1/2 text-xs opacity-40">
                🔍
              </span>
            </div>
          </div>

          {/* Sort Selector (Zara styled dropdown) */}
          <div className="flex flex-col space-y-2">
            <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-neutral-400">
              Ordenar por Preço
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-transparent border-b border-brand-border py-2 text-xs font-medium focus:outline-none focus:border-black dark:focus:border-white transition-colors text-black dark:text-white uppercase tracking-wider cursor-pointer"
            >
              <option className="bg-white dark:bg-black" value="default">ORDENAÇÃO PADRÃO</option>
              <option className="bg-white dark:bg-black" value="price-asc">MENOR PREÇO</option>
              <option className="bg-white dark:bg-black" value="price-desc">MAIOR PREÇO</option>
            </select>
          </div>

          {/* Total Counter */}
          <div className="flex justify-start md:justify-end text-[10px] tracking-[0.15em] opacity-40 font-semibold uppercase">
            ENCONTRADOS: {filteredProducts.length} ITENS
          </div>

        </div>

        {/* Category Filter Links (Clean inline text tabs) */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-brand-border pb-4">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-[10px] uppercase tracking-[0.25em] transition-all cursor-pointer relative py-1 hover:opacity-100 ${
                    isSelected
                      ? "font-bold opacity-100 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black dark:after:bg-white"
                      : "opacity-40 hover:opacity-75"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Catalog Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-24 text-center space-y-4 border border-dashed border-brand-border">
          <span className="text-3xl opacity-30">🕵️‍♂️</span>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Nenhuma peça localizada</h3>
          <p className="text-[10px] opacity-65 max-w-xs mx-auto leading-relaxed">
            Não encontramos resultados para a sua busca ou categoria. Tente redefinir os filtros.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedCategory("Todos");
              setSortBy("default");
            }}
            className="zara-btn-secondary text-[10px] px-6 py-3 mt-2"
          >
            LIMPAR FILTROS
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      )}

    </div>
  );
}
