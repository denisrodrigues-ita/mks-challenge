import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "@/components/atoms";

describe("Button", () => {
  it("should render the button with the text", () => {
    const buttonText = "Click me";
    render(<Button>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
