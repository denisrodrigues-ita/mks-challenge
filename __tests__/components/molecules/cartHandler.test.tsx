import { CartHandler } from "@/components/molecules";
import { act, render, renderHook, screen } from "@testing-library/react";
import { theme, GlobalStyle } from "@/theme";
import { ThemeProvider } from "styled-components";
import { useCartStore } from "@/store";

const mockProduct = {
  id: 1,
  name: "Product 1",
  price: 50,
  description: "Description 1",
  photo: "https://via.placeholder.com/150",
  count: 1,
  brand: "brand 1",
  updateAt: "27/07/2020",
  createdAt: "18/06/2020",
};

describe("Cart Handler", () => {
  it("Should render the cart handler", () => {
    render(
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CartHandler product={mockProduct} />
        </ThemeProvider>
      </>
    );

    expect(screen.getByText("Qtd:")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
  });

  it("Should increase the quantity of the product", () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addToCart(mockProduct);
    });

    render(
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CartHandler product={mockProduct} />
        </ThemeProvider>
      </>
    );

    expect(screen.getByText(1)).toBeInTheDocument();

    act(() => {
      screen.getByText("+").click();
    });

    expect(screen.getByText(2)).toBeInTheDocument();
  });

  it("Should decrease the quantity of the product", () => {
    render(
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CartHandler product={mockProduct} />
        </ThemeProvider>
      </>
    );

    expect(screen.getByText(2)).toBeInTheDocument();

    act(() => {
      screen.getByText("-").click();
    });

    expect(screen.getByText(1)).toBeInTheDocument();
  });
});
