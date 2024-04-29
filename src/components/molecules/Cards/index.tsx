import React from "react";
import Card from "./Card";
import { CardsProps } from "./interface";
import { Container } from "./styles";

const Cards: React.FC<CardsProps> = ({ data }) => {
  return (
    <Container>
      {data.products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default Cards;
