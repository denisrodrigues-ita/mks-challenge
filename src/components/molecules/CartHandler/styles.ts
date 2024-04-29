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
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 0.975rem;

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.438rem;
  }
`;

export const VerticalBar = styled.span`
  ${({ theme }) => css`
    border-color: ${theme.colors.gray.gray200};
    border: 0.2px solid ${theme.colors.gray.gray200};
    height: 100%;
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
