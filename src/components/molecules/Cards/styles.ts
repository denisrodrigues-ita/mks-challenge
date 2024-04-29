import { breakpoints } from "@/theme/breakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: max-content;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  align-items: center;

  @media screen and (max-width: ${breakpoints.tabletLandscape}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: ${breakpoints.tabletPortrait}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
