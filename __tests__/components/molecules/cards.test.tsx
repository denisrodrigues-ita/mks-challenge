import Card from "@/components/molecules/Cards/Card";
import { theme, GlobalStyle } from "@/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

const mockProduct = [
  {
    id: 1,
    name: "Product 1",
    price: 50,
    description: "Description 1",
    photo: "https://via.placeholder.com/150",
    count: 1,
    brand: "brand 1",
    updateAt: "27/07/2020",
    createdAt: "18/06/2020",
  },
  {
    id: 2,
    name: "Product 2",
    price: 100,
    description: "Description 2",
    photo: "https://via.placeholder.com/200",
    count: 1,
    brand: "brand 2",
    updateAt: "27/07/2020",
    createdAt: "18/06/2020",
  },
];

describe("Cards", () => {
  it("should render the cards", () => {
    render(
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {mockProduct.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </ThemeProvider>
      </>
    );

    mockProduct.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(`R$${product.price}`)).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
      expect(screen.getByAltText(product.name)).toHaveAttribute("src");
    });
  });
});
