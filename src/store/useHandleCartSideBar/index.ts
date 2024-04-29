import { create } from "zustand";
import { produce } from "immer";
import { CartSideBarProps } from "./interface";

const useCartStore = create<CartSideBarProps>((set) => ({
  isOpenSideBar: false,

  handleCartSideBar: () =>
    set(
      produce((state) => {
        state.isOpenSideBar = !state.isOpenSideBar;
      })
    ),
}));

export default useCartStore;
