import React from "react";
import SideBarCard from "./SideBarCard";
import { SideBarCardsProps } from "./interface";
import { Container } from "./styles";

const SideBarCards: React.FC<SideBarCardsProps> = (cart) => {
  return (
    <Container>
      {cart.cart.map((product) => (
        <SideBarCard key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default SideBarCards;
