import { useCartStore } from "@/store";
import { ItemProps } from "@/store/useCartStore/interface";
import { act, renderHook } from "@testing-library/react";

describe("useCartStore", () => {
  it("should increase the count of an existing item in the cart", () => {
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
      result.current.increaseItem(productId);
    });

    expect(result.current.countItems()).toBeGreaterThan(1);
  });
});
