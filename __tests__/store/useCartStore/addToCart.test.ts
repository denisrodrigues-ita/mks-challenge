import { useCartStore } from "@/store";
import { act, renderHook } from "@testing-library/react";

describe("useCartStore", () => {
  it("should add an item to the cart", () => {
    const { result } = renderHook(() => useCartStore());
    const product = {
      id: 1,
      name: "Product",
      price: 10,
      brand: "brand 1",
      description: "description 1",
      updateAt: "27/07/2020",
      createdAt: "18/06/2020",
      photo: "photo 1",
    };

    act(() => {
      result.current.addToCart(product);
    });

    expect(result.current.cart).toEqual([{ ...product, count: 1 }]);
  });
});
