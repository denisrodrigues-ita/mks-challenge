"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Container } from "./styles";
import { useGetProducts } from "@/hooks";
import { CartSideBar } from "@/components/organisms";
import { Cards } from "@/components/molecules";

const Home = () => {
  const [query, setQuery] = React.useState({
    page: 1,
    rows: 10,
    sortBy: "id",
    orderBy: "ASC",
  });

  const Spinner = dynamic(() => import("@/components/atoms/Spinner"), {
    ssr: false,
  });

  const { data, isLoading } = useGetProducts(query);

  return (
    <Container>
      {isLoading ? <Spinner /> : data && <Cards data={data} />}
      <CartSideBar />
    </Container>
  );
};

export default Home;
