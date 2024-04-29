"use client";

import React from "react";
import { useCartStore, useHandleCartSideBar } from "@/store";
import { Button } from "@/components/atoms";
import { SideBarCards } from "@/components/molecules";
import { SideBar, Title, Wrapper, WrapperRow, Container, Text } from "./styles";

const CartSideBar = () => {
  const { isOpenSideBar, handleCartSideBar } = useHandleCartSideBar();
  const { cart, totalPrice } = useCartStore();

  return (
    <SideBar
      initial={{ x: "100%" }}
      animate={{ x: isOpenSideBar ? 0 : "100%" }}
      transition={{ duration: 0.4 }}
    >
      <Container>
        <Wrapper>
          <WrapperRow>
            <Title>
              Carrinho <br />
              de compras
            </Title>
            <Button
              custonStyle={{
                borderRadius: "50%",
                width: "3.8rem",
                height: "3.8rem",
                backgroundColor: "#000000",
                color: "#ffffff",
              }}
              onClick={() => handleCartSideBar()}
            >
              X
            </Button>
          </WrapperRow>
          {cart && <SideBarCards cart={cart} />}
        </Wrapper>
        <WrapperRow>
          <Text>Total:</Text>
          <Text>R${totalPrice()}</Text>
        </WrapperRow>
      </Container>
      <Button
        onClick={() => alert("Compra finalizada")}
        custonStyle={{
          height: "9.7rem",
          borderRadius: "0",
          color: "#ffffff",
          backgroundColor: "#000000",
          fontSize: "2.8rem",
          fontWeight: 700,
          lineHeight: "1.5rem",
        }}
      >
        Finalizar Compra
      </Button>
    </SideBar>
  );
};

export default CartSideBar;
