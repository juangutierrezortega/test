import styled from "styled-components";
import CardComponent from "@mui/material/Card";

export const ButtonsContainer = styled.div`
  position: absolute;
  display: none;
  bottom: 0;
  right: 0;

  svg {
    padding: 8px;
    opacity: 0.6;
    transition: opacity 0.3s;
  }
`;

export const Card = styled(CardComponent)`
  position: relative;

  &:hover {
    ${ButtonsContainer} {
      display: flex;

      svg:hover {
        opacity: 1;
      }
    }
  }
`;
