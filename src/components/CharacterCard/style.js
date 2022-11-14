import styled from "styled-components";

export const StyledLi = styled.li`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(${(props) => props.bckgColor});
  padding: 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  h2 {
    font-weight: 600;
    font-size: 1rem;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 4px;
  }
`;
