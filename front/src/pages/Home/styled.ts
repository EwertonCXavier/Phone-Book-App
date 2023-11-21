import { styled } from "styled-components";

export const Card = styled.div`
  max-width: 640px;
  /* max-height: 40rem; */
  padding: 2rem;
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  span {
    font-size: 2rem;
    font-weight: bold;
  }

  @media (max-width: 576px) {
    span {
      font-size: 1.5rem;
    }
  }
`;