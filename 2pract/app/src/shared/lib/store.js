import { create } from "zustand";

export const useStore = create((set, get) => ({
    // Корзина
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((i) => i.id !== id) })),

    // Избранное
    liked: [],
    toggleLike: (item) =>
        set((state) => {
            const exists = state.liked.find((i) => i.id === item.id);
            if (exists) {
                return { liked: state.liked.filter((i) => i.id !== item.id) };
            } else {
                return { liked: [...state.liked, item] };
            }
        }),

    // ПОИСК
    searchQuery: "",
    setSearchQuery: (query) => set({ searchQuery: query }),

    // Геттеры
    cartCount: () => get().cart.length,
    likedCount: () => get().liked.length,
}));