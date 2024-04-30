import { renderHook, act } from "@testing-library/react";
import { useCartStore } from "@/store";
import { ItemProps } from "@/store/useCartStore/interface";

describe("useCartStore", () => {
  it("Should count the quantity of each item", () => {
    const { result } = renderHook(() => useCartStore());

    const initialProduct: ItemProps = {
      id: 1,
      name: "Product 1",
      price: 10,
      brand: "Brand 1",
      description: "Description 1",
      photo: "photo 1",
      updateAt: "27/07/2021",
      createdAt: "27/07/2021",
    };

    const productId = initialProduct.id;

    act(() => {
      result.current.addToCart(initialProduct);
    });

    expect(result.current.countIndividualItem(productId)).toBe(1);

    act(() => {
      result.current.increaseItem(productId);
    });

    expect(result.current.countIndividualItem(productId)).toBe(2);
  });
});
