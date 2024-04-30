import { useCartStore } from "@/store";
import { ItemProps } from "@/store/useCartStore/interface";
import { act, renderHook } from "@testing-library/react";

describe("useCartStore", () => {
  it("Should count the total price", () => {
    const { result } = renderHook(() => useCartStore());

    const product1: ItemProps = {
      id: 1,
      name: "Product 1",
      price: 10,
      brand: "Brand 1",
      description: "Description 1",
      photo: "photo 1",
      updateAt: "27/07/2021",
      createdAt: "27/07/2021",
    };

    const product2: ItemProps = {
      id: 2,
      name: "Product 2",
      price: 20,
      brand: "Brand 2",
      description: "Description 2",
      photo: "photo 2",
      updateAt: "27/07/2021",
      createdAt: "27/07/2021",
    };

    const product1Id = product1.id;

    act(() => {
      result.current.addToCart(product1);
    });

    expect(result.current.totalPrice()).toBe(10);

    act(() => {
      result.current.increaseItem(product1Id);
    });

    expect(result.current.totalPrice()).toBe(20);

    act(() => {
      result.current.addToCart(product2);
    });

    expect(result.current.totalPrice()).toBe(40);
  });
});
