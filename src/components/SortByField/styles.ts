import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 1em;

  svg {
    color: #000;
  }

  #none {
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover {
    #none {
      opacity: 0.4;
    }
  }
`;

export const Label = styled.span``;
