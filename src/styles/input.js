import styled from "styled-components";

export const StyledInput = styled.input`
  width: 200px;
  height: 40px;
  background-color: transparent;
  color: var(--primary-green);
  padding-left: 1rem;
  border: 1px solid var(--primary-green);
  border-radius: 8px;

  &::placeholder {
    color: var(--primary-green);
  }
`;
