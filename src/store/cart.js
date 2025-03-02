import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => {
    let newProduct = { ...product, quantity: 1 };
    set((state) => ({
      cart: [...state.cart, newProduct],
    }));
  },
  deleteFromCart: (pid) => {
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== pid),
    }));
  },
  increaseQuantity: (pid) => {
    set((state) => ({
      cart: state.cart.map((product) =>
        product.id === pid
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    }));
  },
  decreaseQuantity: (pid) => {
    set((state) => ({
      cart: state.cart.map((product) =>
        product.id === pid
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ),
    }));
  },
}));
