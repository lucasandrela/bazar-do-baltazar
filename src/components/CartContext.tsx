"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Produto } from "@/lib/produtos";

export interface CartItem {
  produto: Produto;
  quantidade: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (produto: Produto) => void;
  removeFromCart: (produtoId: number) => void;
  updateQuantity: (produtoId: number, quantidade: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Carregar do localStorage ao montar no cliente
  useEffect(() => {
    const savedCart = localStorage.getItem("bazar-cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Erro ao carregar carrinho do localStorage", e);
      }
    }
    setIsMounted(true);
  }, []);

  // Salvar no localStorage sempre que mudar
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("bazar-cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const addToCart = (produto: Produto) => {
    setCart((prevCart) => {
      const itemExistente = prevCart.find((item) => item.produto.id === produto.id);
      if (itemExistente) {
        return prevCart.map((item) =>
          item.produto.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prevCart, { produto, quantidade: 1 }];
    });
    // Abre o carrinho automaticamente para dar feedback visual imediato (micro-interação)
    setIsCartOpen(true);
  };

  const removeFromCart = (produtoId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.produto.id !== produtoId));
  };

  const updateQuantity = (produtoId: number, quantidade: number) => {
    if (quantidade <= 0) {
      removeFromCart(produtoId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.produto.id === produtoId ? { ...item, quantidade } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantidade, 0);
  const cartTotal = cart.reduce((total, item) => total + item.produto.price * item.quantidade, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
}
