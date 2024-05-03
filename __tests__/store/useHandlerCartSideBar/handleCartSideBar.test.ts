import { useHandleCartSideBar } from "@/store";
import { act, renderHook } from "@testing-library/react";

describe("useCartStore", () => {
  it("Should change state of isOpenSideBar", () => {
    const { result } = renderHook(() => useHandleCartSideBar());

    expect(result.current.isOpenSideBar).toBe(false);

    act(() => {
      result.current.handleCartSideBar();
    });

    expect(result.current.isOpenSideBar).toBe(true);
  });
});
