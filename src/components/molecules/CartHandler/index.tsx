import React from "react";
import { Button } from "@/components/atoms";
import { useCartStore } from "@/store";
import { SideBarCardProps } from "./interface";
import { Container, FlexColumn, Quantiti, VerticalBar, Text } from "./styles";

const CartHandler: React.FC<SideBarCardProps> = ({ product }) => {
  const { countIndividualItem, decreaseItem, increaseItem } = useCartStore();

  return (
    <FlexColumn>
      <Text>Qtd:</Text>
      <Container>
        <Button
          onClick={() => decreaseItem(product.id)}
          custonStyle={{ background: "transparent" }}
        >
          -
        </Button>
        <VerticalBar />
        <Quantiti>{countIndividualItem(product.id)}</Quantiti>
        <VerticalBar />
        <Button
          onClick={() => increaseItem(product.id)}
          custonStyle={{ background: "transparent" }}
        >
          +
        </Button>
      </Container>
    </FlexColumn>
  );
};

export default CartHandler;
