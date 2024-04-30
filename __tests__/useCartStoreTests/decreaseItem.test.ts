import { useCartStore } from "@/store";
import { ItemProps } from "@/store/useCartStore/interface";
import { act, renderHook } from "@testing-library/react";

describe("useCartStore", () => {
  it("should decrease the count of an existing item in the cart or remove it if count is 1", () => {
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
      result.current.decreaseItem(productId);
      result.current.decreaseItem(productId);
    });

    expect(result.current.cart).toEqual([]);
  });

  it("should decrease the count of an existing item in the cart if count is greater than 1", () => {
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
      result.current.decreaseItem(productId);
    });

    expect(result.current.countItems()).toBeLessThan(2);
  });
});
