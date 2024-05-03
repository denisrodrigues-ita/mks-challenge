import Card from "@/components/molecules/Cards/Card";
import { theme, GlobalStyle } from "@/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

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

describe("Card", () => {
  it("should render the card with props", () => {
    const { name, price, description } = mockProduct;
    render(
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Card product={mockProduct} />
        </ThemeProvider>
      </>
    );

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(`R$${price}`)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByAltText(name)).toHaveAttribute("src");
  });
});
