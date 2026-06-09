"use client";

import React from "react";
import { Produto } from "@/lib/produtos";
import { useCart } from "./CartContext";

interface ProductCardProps {
  produto: Produto;
}

export default function ProductCard({ produto }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-all flex flex-col h-full animate-fade-in select-none group">
      
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-brand-border">
        <img
          src={produto.imageSrc}
          alt={produto.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
        />
        {produto.destaque && (
          <span className="absolute top-3 left-3 bg-black text-white dark:bg-white dark:text-black text-[8px] font-black uppercase tracking-[0.2em] py-0.5 px-2">
            RARO
          </span>
        )}
      </div>

      {/* Product Body */}
      <div className="py-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1">
          {/* Category Tag */}
          <span className="block text-[8px] uppercase tracking-[0.2em] font-bold text-neutral-400 dark:text-neutral-500">
            {produto.category}
          </span>
          
          {/* Title */}
          <h3 className="font-editorial text-base sm:text-lg leading-tight truncate">
            {produto.title}
          </h3>
          
          {/* Description */}
          <p className="text-[10px] opacity-60 leading-relaxed font-normal line-clamp-2">
            {produto.description}
          </p>
        </div>

        {/* Price and Actions */}
        <div className="pt-1 flex flex-col space-y-2">
          <div className="flex justify-between items-baseline pb-1">
            <span className="text-[10px] uppercase tracking-[0.1em] opacity-40">Investimento</span>
            <span className="text-sm font-semibold tracking-wider">
              R$ {produto.price.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => addToCart(produto)}
            className="zara-btn w-full text-[10px]"
          >
            ADICIONAR À SACOLA
          </button>
        </div>
      </div>

    </div>
  );
}
