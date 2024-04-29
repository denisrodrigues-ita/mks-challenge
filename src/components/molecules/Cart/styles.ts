import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white.white50};
    width: 9rem;
    height: 4.5rem;
    border-radius: 0.8rem;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  `};
`;

export const Text = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 219.4rem;
`;
