import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding-bottom: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 20%;
    min-width: 150px;
  }
  div {
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  div:nth-child(3) {
    padding: 2rem 0rem;
  }
`;
