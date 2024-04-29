import styled from "styled-components";
import { HEADER_HEIGHT, FOOTER_HEIGHT } from "@/utils";

export const Container = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT}rem - ${FOOTER_HEIGHT}rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
