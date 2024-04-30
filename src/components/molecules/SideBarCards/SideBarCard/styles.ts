import styled, { css } from "styled-components";
import Image from "next/image";
import { breakpoints } from "@/theme/breakpoints";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white.white50};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    gap: 1rem;
    width: 38.5rem;
    height: 10.1rem;
    border-radius: 0.5rem;
    padding: 1rem;
    position: relative;

    @media screen and (max-width: ${breakpoints.mobile}) {
      width: 25rem;
      height: 22.005rem;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
      align-self: center;
    }
  `};
`;

export const ImageStyled = styled(Image)`
  display: flex;

  @media screen and (max-width: ${breakpoints.mobile}) {
    margin: auto;
    grid-column: span 2;
    width: 8rem;
    height: 9.51rem;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gray.gray100};
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.7rem;

    @media screen and (max-width: ${breakpoints.mobile}) {
      grid-column: span 2;
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
  `};
`;

export const Price = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.7rem;

  @media screen and (max-width: ${breakpoints.mobile}) {
    background-color: ${({ theme }) => theme.colors.gray.gray50};
    color: ${({ theme }) => theme.colors.white.white50};
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5rem;

    width: 8.4rem;
    height: 3.481rem;
    margin: auto;
    display: flex;
    align-items: center;
  }
`;

export const Button = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white.white50};
    background-color: ${theme.colors.black.black50};
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    position: absolute;
    right: -0.8rem;
    top: -0.8rem;

    @media screen and (max-width: ${breakpoints.mobile}) {
      color: ${theme.colors.black.black50};
      background-color: transparent;
      font-weight: 400;
      font-size: 4.2rem;
      line-height: 1.7rem;
      right: 1.2rem;
      top: 1.2rem;
    }
  `};
`;
