import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  ${(props) => {
    switch (props.buttonType) {
      case "headerBtn":
        return css`
          width: 200px;
          border: 1px solid var(--bckg-color);
          background-color: transparent;
          color: var(${(props) => props.color});
          text-align: center;
          cursor: pointer;
          transition: 0.5s;

          &:hover {
            border-bottom: 1px solid var(${(props) => props.border});
          }
        `;

      case "bodyBtn":
        return css`
          width: 80px;
          padding: 0.5rem;

          background-color: transparent;
          color: var(${(props) => props.color});

          border: 1px solid var(${(props) => props.border});
          border-radius: 20px;

          transition: 0.3s;
          cursor: pointer;
          &:hover {
            background-color: var(--primary-blue);
            color: var(--primary-blue-light);
            border: 1px solid var(--primary-blue);
          }
        `;
      default:
        return false;
    }
  }}
`;
