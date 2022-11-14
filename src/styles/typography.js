import styled from "styled-components";

export const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-blue-light);
  padding: 1rem;
  margin: 1rem 0rem;
`;

export const NameCharacter = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: var(${(props) => props.color});
`;

export const SpanInfo = styled.span`
  font-weight: 400;
  font-size: 0.8rem;
  color: var(${(props) => props.color});
`;
