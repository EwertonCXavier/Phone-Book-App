import { styled } from "styled-components";

interface IIconPresent {
  isIconPresent: boolean;
}

export const InputContainer = styled.div<IIconPresent>`
  position: relative;
  width: 100%;
  height: 2.25rem;

  :first-child {
    position: ${(props) => (props.isIconPresent ? "absolute" : "relative")};
    bottom: ${(props) => (props.isIconPresent ? "6px" : "unset")};
    left: ${(props) => (props.isIconPresent ? "0.5rem" : "unset")};
    z-index: ${(props) => (props.isIconPresent ? "1" : "0")};
  }
`;

export const StyledInput = styled.input<IIconPresent>`
  position: relative;
  font-size: 0.875rem;
  height: 2.25rem;
  border: 1px solid #d8dce0;
  padding-left: ${(props) => (props.isIconPresent ? "2.25rem" : "1rem")};
  height: 100%;
  width: 100%;
  outline: none;
  border-radius: 0.25rem;

  :placeholder {
    color: D8DCE0;
  }
`;
