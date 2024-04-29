import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const SideBar = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue.blue50};
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 48.6rem;
    height: 100%;
    box-shadow: -5px 0 10px rgba(0, 0, 0, 0.3);
    z-index: 1;
    transition: transform 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 9.7rem);
  padding: 4rem;
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    overflow-y: auto;
    flex-grow: 1;
    max-height: calc(100% - 8rem);
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.black.black50} transparent;
    margin-right: -1rem;
  `}
`;

export const WrapperRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white.white50};
    font-size: 2.7rem;
    font-weight: 700;
    line-height: 3.291rem;
  `};
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white.white50};
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.5rem;
  `};
`;
