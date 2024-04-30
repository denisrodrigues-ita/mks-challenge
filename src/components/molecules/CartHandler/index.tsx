import React from "react";
import { Button } from "@/components/atoms";
import { useCartStore } from "@/store";
import { SideBarCardProps } from "./interface";
import { Container, FlexColumn, Quantiti, Text } from "./styles";

const CartHandler: React.FC<SideBarCardProps> = ({ product }) => {
  const { countIndividualItem, decreaseItem, increaseItem } = useCartStore();

  return (
    <FlexColumn>
      <Text>Qtd:</Text>
      <Container>
        <Button
          onClick={() => decreaseItem(product.id)}
          custonStyle={{
            background: "transparent",
            width: "33%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          -
        </Button>
        <Quantiti>{countIndividualItem(product.id)}</Quantiti>
        <Button
          onClick={() => increaseItem(product.id)}
          custonStyle={{
            background: "transparent",
            width: "33%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          +
        </Button>
      </Container>
    </FlexColumn>
  );
};

export default CartHandler;
