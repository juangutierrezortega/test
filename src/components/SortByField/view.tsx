import React from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { OrderTypeEnum } from "../../domains/common/types";
import { Container } from "./styles";

interface SortByFieldProps {
  nextOrder: any;
  orderType: any;
  label: string;
}

const SortByField: React.FC<SortByFieldProps> = ({
  nextOrder,
  orderType,
  label,
}) => {
  return (
    <Container onClick={nextOrder}>
      <span>{label}</span>
      {orderType === OrderTypeEnum.NONE && (
        <ArrowUpwardIcon color="primary" id="none" />
      )}
      {orderType === OrderTypeEnum.ASCENDING && (
        <ArrowUpwardIcon color="primary" />
      )}
      {orderType === OrderTypeEnum.DESCENDING && (
        <ArrowDownwardIcon color="primary" />
      )}
    </Container>
  );
};

export default SortByField;
