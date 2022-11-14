import styled from "styled-components";

export const StyledList = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 3rem;
  animation: ease-in-out showList 0.5s;

  @keyframes showList {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    flex-wrap: nowrap;
    overflow: scroll;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
