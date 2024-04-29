import styled, { keyframes, css } from "styled-components";

const rotateAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dashAnimation = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -3.5rem;
  }

  100% {
    stroke-dashoffset: -12.5rem;
  }
`;

export const Svg = styled.svg`
  width: 3.25em;
  transform-origin: center;
  animation: ${rotateAnimation} 2s linear infinite;
`;

export const Circle = styled.circle`
  ${({ theme }) => css`
    stroke: ${theme.colors.blue.blue50};
    fill: none;
    stroke: ;
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: ${dashAnimation} 1.5s ease-in-out infinite;
  `};
`;
