import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 101;

  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    background-color: var(--black30);
  }

  .content {
    width: 100%;
    max-width: 400px;
    position: relative;
    background-color: var(--bckg-color);
    padding: 2rem;
    border-radius: 8px;
    animation: ease-in showModal 0.5s;
    @keyframes showModal {
      0% {
        opacity: 0;
        transform: translate(0, -30%);
      }
      100% {
        opacity: 1;
        transform: translate(0, 0);
      }
    }

    & > div {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }

    button {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: transparent;
      color: var(--primary-green);
      border: none;
      cursor: pointer;
      opacity: 0.2;
      transition: 0.4s;

      &:hover {
        opacity: 1;
      }
    }

    img {
      width: 300px;
      height: 300px;
      border-radius: 4px;
    }

    @media (min-width: 375px) {
      img {
        width: 200px;
        height: 200px;
      }
    }
  }
`;
