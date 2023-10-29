"use client";

import { FinalProduct } from "@/helpers/product";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

export interface CartProduct extends FinalProduct {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  total: number;
  subTotal: number;
  totalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
  decreaseProductFromCart: (product: CartProduct) => void;
  increaseProductQuantity: (product: CartProduct) => void;
  removeProductFromCart: (product: CartProduct) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  total: 0,
  subTotal: 0,
  totalDiscount: 0,
  addProductToCart: () => {},
  decreaseProductFromCart: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
});

export default function CartProvider({ children }: { children: ReactNode }) {
  const cartFromLocalStorage = window?.localStorage?.getItem(
    "@drive-emporium/cart-products",
  )
    ? JSON.parse(localStorage.getItem("@drive-emporium/cart-products") || "[]")
    : [];
  const [products, setProducts] = useState<CartProduct[]>(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem(
      "@drive-emporium/cart-products",
      JSON.stringify(products),
    );
  }, [products]);

  const subTotal = useMemo(() => {
    return products.reduce((sum, product) => {
      return sum + Number(product.basePrice) * product.quantity;
    }, 0);
  }, [products]);

  const total = useMemo(() => {
    return products.reduce(
      (sum, product) => sum + product.totalPrice * product.quantity,
      0,
    );
  }, [products]);

  const totalDiscount = subTotal - total;

  function addProductToCart(product: CartProduct) {
    const isProductOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (isProductOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }
          return cartProduct;
        }),
      );
      return;
    }

    setProducts((prev) => [...prev, product]);
  }

  function decreaseProductFromCart(product: CartProduct) {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  }

  function increaseProductQuantity(product: CartProduct) {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  }

  function removeProductFromCart(product: CartProduct) {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== product.id),
    );
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        decreaseProductFromCart,
        increaseProductQuantity,
        removeProductFromCart,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        total,
        subTotal,
        totalDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
