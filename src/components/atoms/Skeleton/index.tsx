import React from "react";
import {
  Card,
  Card__skeleton__description,
  Card__skeleton__title,
} from "./styles";

const Skeleton = () => {
  return (
    <Card>
      <Card__skeleton__title></Card__skeleton__title>
      <Card__skeleton__description> </Card__skeleton__description>
    </Card>
  );
};

export default Skeleton;
