import { styled } from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 2.25rem;

  :first-child {
    position: absolute;
    bottom: 6px;
    left: 0.5rem;
    z-index: 1;
  }
`;

export const StyledInput = styled.input`
  position: relative;
  font-size: 0.875rem;
  height: 2.25rem;
  border: 1px solid #d8dce0;
  padding-left: 2.25rem;
  height: 100%;
  width: 100%;
  outline: none;
  border-radius: 0.25rem;

  :placeholder {
    color: D8DCE0;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
