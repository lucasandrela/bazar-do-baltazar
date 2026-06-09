"use client";

import React from "react";
import { useCart } from "./CartContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md h-full bg-white dark:bg-black text-black dark:text-white flex flex-col z-10 border-l border-brand-border transition-transform duration-300">

        {/* Header */}
        <div className="p-6 border-b border-brand-border flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] flex items-center gap-2">
            SACOLA DE COMPRAS
            <span className="opacity-50">({cart.length})</span>
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 flex items-center justify-center hover:opacity-50 active:scale-95 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="text-4xl opacity-40">🛍️</div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em]">Sua sacola está vazia</p>
                <p className="text-[10px] opacity-60 mt-1 max-w-[240px] mx-auto leading-relaxed">
                  Adicione itens do nosso acervo para começar a preencher sua sacola de garimpos.
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="zara-btn mt-2 text-[10px] w-full max-w-[200px]"
              >
                IR PARA O ACERVO
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.produto.id}
                className="py-4 border-b border-brand-border flex gap-4 items-center"
              >
                {/* Thumbnail */}
                <div className="w-20 aspect-[3/4] relative flex-shrink-0 bg-neutral-50 dark:bg-neutral-900 border border-brand-border">
                  <img
                    src={item.produto.imageSrc}
                    alt={item.produto.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-neutral-400 dark:text-neutral-500 block mb-0.5">
                      {item.produto.category}
                    </span>
                    <h3 className="font-editorial text-sm truncate pr-4 text-black dark:text-white">
                      {item.produto.title}
                    </h3>
                    <p className="text-xs font-semibold tracking-wider text-black dark:text-white mt-1">
                      R$ {item.produto.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() =>
                        updateQuantity(item.produto.id, item.quantidade - 1)
                      }
                      className="w-6 h-6 border border-brand-border bg-transparent hover:border-black dark:hover:border-white flex items-center justify-center text-[10px]"
                    >
                      -
                    </button>
                    <span className="font-mono text-xs w-4 text-center">
                      {item.quantidade}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.produto.id, item.quantidade + 1)
                      }
                      className="w-6 h-6 border border-brand-border bg-transparent hover:border-black dark:hover:border-white flex items-center justify-center text-[10px]"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <button
                  onClick={() => removeFromCart(item.produto.id)}
                  className="w-8 h-8 text-neutral-400 hover:text-black dark:hover:text-white flex items-center justify-center self-start"
                  title="Remover"
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
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-brand-border space-y-4">
            <div className="flex justify-between items-baseline py-2">
              <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-60">
                Total Estimado
              </span>
              <span className="text-xl font-bold tracking-wider">
                R$ {cartTotal.toFixed(2)}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  alert("Pedido finalizado com sucesso no Bazar do Baltazar! Agradecemos.");
                  clearCart();
                  setIsCartOpen(false);
                }}
                className="zara-btn w-full"
              >
                FINALIZAR COMPRA
              </button>
              <button
                onClick={clearCart}
                className="zara-btn-secondary w-full text-[10px]"
              >
                LIMPAR TUDO
              </button>
            </div>

            <p className="text-[8px] text-center opacity-40 uppercase tracking-[0.2em] pt-2">
              ENTREGA PADRÃO GRATUITA EM COMPRAS ACIMA DE R$ 400
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
