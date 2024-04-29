"use client";

import React from "react";
import { Title, Container, Wrapper, Text } from "./styles";
import { Cart } from "@/components/molecules";
import { Button } from "@/components/atoms";
import { useCartStore, useHandleCartSideBar } from "@/store";

const Header = () => {
  const { countItems } = useCartStore();
  const { handleCartSideBar } = useHandleCartSideBar();

  return (
    <Container>
      <Wrapper>
        <Title>MKS</Title>
        <Text>Sistemas</Text>
      </Wrapper>
      <Button onClick={() => handleCartSideBar()}>
        <Cart countItems={countItems()} />
      </Button>
    </Container>
  );
};

export default Header;
