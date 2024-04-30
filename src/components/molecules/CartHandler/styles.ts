import { breakpoints } from "@/theme/breakpoints";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.2rem 0;
    width: 5rem;
    height: 1.9rem;
    border-radius: 4px;
    border: 1px solid ${theme.colors.gray.gray200};

    @media screen and (max-width: ${breakpoints.mobile}) {
      width: 9.737rem;
      height: 3.45rem;
    }
  `}
`;

export const Quantiti = styled.span`
  ${({ theme }) => css`
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 0.975rem;
    border-color: ${theme.colors.gray.gray200};
    border-style: solid;
    border-width: 0 1px 0 1px;
    height: 100%;
    width: 33%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;

    @media screen and (max-width: ${breakpoints.mobile}) {
      font-size: 2rem;
      font-weight: 400;
      line-height: 2.438rem;
    }
  `}
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 0.61rem;

  @media screen and (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;
