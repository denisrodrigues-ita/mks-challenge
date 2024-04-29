import React from "react";
import { Container, Text } from "./styles";
import { CartIcon } from "@/assets/svg";
import Image from "next/image";

interface CartProps {
  countItems: number;
}

const Cart: React.FC<CartProps> = ({ countItems }) => {
  return (
    <Container>
      <Image src={CartIcon} alt="Cart" />
      <Text>{countItems}</Text>
    </Container>
  );
};

export default Cart;
