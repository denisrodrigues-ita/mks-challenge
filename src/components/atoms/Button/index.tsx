"use client";

import React from "react";
import { CustomButton } from "./styles";
import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({ children, onClick, custonStyle }) => {
  return <CustomButton onClick={onClick} style={custonStyle}>{children}</CustomButton>;
};

export default Button;
