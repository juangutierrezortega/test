import styled from "styled-components";

interface ContainerProps {
    center?: boolean
}

export const Container = styled.div<ContainerProps>`
  max-width: 1200px;
  padding: 2em 3em;
  display: flex;

  ${props => props.center && `
    justify-content: center;
    align-items: center;
  `}
`;
