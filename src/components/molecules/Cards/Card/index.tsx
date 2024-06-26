import React from "react";
import { ProductProps } from "./interface";
import {
  Badge,
  CardContainer,
  Description,
  ImageStyled,
  Title,
  Wrapper,
  Container,
} from "./styles";
import { Button, Skeleton } from "@/components/atoms";
import { BagIcon } from "@/assets/svg";
import Image from "next/image";
import { useCartStore } from "@/store";

const Card: React.FC<ProductProps> = ({ product }) => {
  const [isLoadingImage, setIsLoadingImage] = React.useState(true);
  const { addToCart } = useCartStore();

  return (
    <CardContainer>
      <Container>
        {isLoadingImage && <Skeleton />}
        <ImageStyled
          src={product.photo}
          alt={product.name}
          width={100}
          height={100}
          priority={true}
          onLoad={() => setIsLoadingImage(false)}
          onError={() => setIsLoadingImage(false)}
        />
        <Wrapper>
          <Title>{product.name}</Title>
          <Badge>R${product.price}</Badge>
        </Wrapper>
        <Description>{product.description}</Description>
      </Container>
      {isLoadingImage ? (
        <Skeleton />
      ) : (
        <Button
          onClick={() => addToCart(product)}
          custonStyle={{
            width: "100%",
            borderRadius: "0 0 .5rem .5rem",
            backgroundColor: "#0F52BA",
            color: "#fff",
            padding: ".5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <Image
            src={BagIcon}
            alt="sacola de compra"
            width={12}
            height={14}
          />{" "}
          Comprar
        </Button>
      )}
    </CardContainer>
  );
};

export default Card;
