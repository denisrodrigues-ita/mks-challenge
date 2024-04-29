import styled, { css } from "styled-components";
import { HEADER_HEIGHT } from "@/utils/constants";

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue.blue50};
    height: ${HEADER_HEIGHT}rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6.5rem;
  `};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white.white50};
    font-size: 4rem;
    font-weight: 600;
    line-height: 1.9rem;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white.white50};
    font-size: 2rem;
    line-height: 1.9rem;
    font-weight: 300;
  `};
`;
