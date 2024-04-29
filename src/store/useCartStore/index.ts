import { create } from "zustand";
import { produce } from "immer";
import { CartStateProps, ItemProps, ProductsEntityProps } from "./interface";

const useCartStore = create<CartStateProps>((set) => ({
  cart: [],

  addToCart: (product: ItemProps) =>
    set((state) =>
      produce(state, (draft: { cart: ProductsEntityProps[] }) => {
        const item = draft.cart.find(
          (item: { id: number }) => item.id === product.id
        );
        if (item) {
          item.count += 1;
        } else {
          draft.cart.push({ ...product, count: 1 });
        }
      })
    ),

  removeFromCart: (productId: number) =>
    set((state) =>
      produce(state, (draft: { cart: ProductsEntityProps[] }) => {
        draft.cart = draft.cart.filter(
          (item: { id: number }) => item.id !== productId
        );
      })
    ),

  increaseItem: (productId: number) =>
    set((state) =>
      produce(state, (draft: { cart: ProductsEntityProps[] }) => {
        const item = draft.cart.find(
          (item: { id: number }) => item.id === productId
        );
        if (item) {
          item.count += 1;
        }
      })
    ),

  decreaseItem: (productId: number) =>
    set((state) =>
      produce(state, (draft: { cart: ProductsEntityProps[] }) => {
        const item = draft.cart.find(
          (item: { id: number }) => item.id === productId
        );
        if (item) {
          if (item.count > 1) {
            item.count -= 1;
          } else {
            draft.cart = draft.cart.filter(
              (item: { id: number }) => item.id !== productId
            );
          }
        }
      })
    ),

  countIndividualItem: (productId: number): number => {
    const item: ProductsEntityProps | undefined = useCartStore
      .getState()
      .cart.find((item: { id: number }) => item.id === productId);
    if (item) {
      return item.count;
    }
    return 0;
  },

  countItems: (): number => {
    let count = 0;
    if (useCartStore.getState().cart.length === 0) return count;
    useCartStore.getState().cart.forEach((item: { count: number }) => {
      count += item.count;
    });
    return count;
  },

  totalPrice: (): number => {
    let total = 0;
    if (useCartStore.getState().cart.length === 0) return total;
    useCartStore.getState().cart.forEach((item: { price: number; count: number }) => {
      total += item.price * item.count;
    });
    return total;
  },
}));

export default useCartStore;
