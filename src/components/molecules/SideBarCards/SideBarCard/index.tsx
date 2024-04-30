import React from "react";
import { SideBarCardProps } from "./interface";
import { Container, ImageStyled, Title, Price, Flex, Button } from "./styles";
import { CartHandler } from "../..";
import { useCartStore } from "@/store";

const SideBarCard: React.FC<SideBarCardProps> = ({ product }) => {
  const { removeFromCart } = useCartStore();

  return (
    <Flex>
      <Container>
        <ImageStyled
          src={product.photo}
          alt={product.name}
          width={64}
          height={64}
        />
        <Title>{product.name}</Title>
        <CartHandler product={product} />
        <Price>R${product.price}</Price>
        <Button onClick={() => removeFromCart(product.id)}>X</Button>
      </Container>
    </Flex>
  );
};

export default SideBarCard;
