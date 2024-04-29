import styled, { css } from "styled-components";
import Image from "next/image";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 21.756rem;
  height: 28.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-evenly;
  height: 100%;
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `};
`;

export const ImageStyled = styled(Image)`
  display: flex;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.colors.gray.gray100};
`;

export const Badge = styled.h2`
  background-color: ${({ theme }) => theme.colors.gray.gray50};
  color: ${({ theme }) => theme.colors.white.white50};
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.colors.gray.gray100};
`;
