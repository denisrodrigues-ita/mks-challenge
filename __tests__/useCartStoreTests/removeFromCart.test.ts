import { useCartStore } from "@/store";
import { ProductsEntityProps } from "@/store/useCartStore/interface";
import { act, renderHook } from "@testing-library/react";

describe("useCartStore", () => {
  it("should remove an item from the cart", () => {
    const { result } = renderHook(() => useCartStore());

    const product: ProductsEntityProps = {
      id: 1,
      name: "Product 1",
      price: 10,
      brand: "Brand 1",
      description: "Description 1",
      photo: "photo 1",
      updateAt: "27/07/2021",
      createdAt: "27/07/2021",
      count: 2,
    };

    const productId = product.id;

    act(() => {
      result.current.addToCart(product);
      result.current.increaseItem(productId);
      result.current.removeFromCart(productId);
    });

    expect(result.current.cart).toEqual([]);
  });
});
