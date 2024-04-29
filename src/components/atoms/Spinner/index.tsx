import React from "react";
import { Circle, Svg } from "./styles";

const Spinner = () => {
  return (
    <Svg viewBox="25 25 50 50">
      <Circle r="20" cy="50" cx="50"></Circle>
    </Svg>
  );
};

export default Spinner;
