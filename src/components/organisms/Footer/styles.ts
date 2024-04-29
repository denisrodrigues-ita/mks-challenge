import styled, { css } from "styled-components";
import { FOOTER_HEIGHT } from "@/utils/constants";

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white.white100};
    height: ${FOOTER_HEIGHT}rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;
