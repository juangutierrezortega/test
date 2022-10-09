import React from "react";

import { OrderTypeEnum } from "../../domains/common/types";
import { Container } from "./styles";
import SortByField from "../SortByField";

interface SortCardsByFieldProps {
  nextOrderTitle: () => void;
  orderTypeTitle: OrderTypeEnum;
  nextOrderCreatedAt: () => void;
  orderTypeCreatedAt: OrderTypeEnum;
}

const SortCardsByField: React.FC<SortCardsByFieldProps> = ({
  nextOrderTitle,
  orderTypeTitle,
  nextOrderCreatedAt,
  orderTypeCreatedAt,
}) => {
  return (
    <Container>
      <SortByField
        nextOrder={nextOrderTitle}
        orderType={orderTypeTitle}
        label="Titulo"
      />

      <SortByField
        nextOrder={nextOrderCreatedAt}
        orderType={orderTypeCreatedAt}
        label="Fecha creación"
      />
    </Container>
  );
};

export default SortCardsByField;
