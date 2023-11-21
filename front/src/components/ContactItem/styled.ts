import { styled } from "styled-components";

export const ContactItemContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;

  :hover {
    cursor: pointer;
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const PhoneContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;
