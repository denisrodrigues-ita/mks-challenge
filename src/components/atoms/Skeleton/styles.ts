import styled from "styled-components";

export const Card = styled.div`
  width: 21.756rem;
  height: 28.5rem;
  padding: 1rem;
  text-align: center;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white.white50};
`;

export const Card__skeleton = styled.div`
  @keyframes shimmer {
    to {
      background-position: -100% 0;
    }
  }

  background-image: linear-gradient(
    90deg,
    #ccc 0px,
    rgb(229 229 229 / 90%) 40px,
    #ccc 80px
  );
  background-size: 300%;
  background-position: 100% 0;
  border-radius: inherit;
  animation: shimmer 1.5s infinite;
`;

export const Card__skeleton__title = styled(Card__skeleton)`
  height: 15px;
  margin-bottom: 15px;
`;

export const Card__skeleton__description = styled(Card__skeleton)`
  height: 100px;
`;
