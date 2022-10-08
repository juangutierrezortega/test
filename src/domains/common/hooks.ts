import { useState } from "react";
import {
  FieldNames,
  OrderBy,
  OrderFieldTypeEnum,
  OrderTypeEnum,
} from "./types";

export const useOrderBy = ({
  setOrderBy,
  fieldName,
  fieldType,
}: {
  setOrderBy: React.Dispatch<React.SetStateAction<OrderBy>>;
  fieldType: OrderFieldTypeEnum;
  fieldName: FieldNames;
}) => {
  const [orderType, setOrderType] = useState<OrderTypeEnum>(OrderTypeEnum.NONE);

  const nextOrder = () => {
    let nextOrderType = OrderTypeEnum.NONE;
    if (orderType === OrderTypeEnum.NONE) {
      nextOrderType = OrderTypeEnum.ASCENDING;
    }
    if (orderType === OrderTypeEnum.ASCENDING) {
      nextOrderType = OrderTypeEnum.DESCENDING;
    }
    if (orderType === OrderTypeEnum.DESCENDING) {
      nextOrderType = OrderTypeEnum.NONE;
    }

    setOrderBy({
      fieldName,
      fieldType,
      orderType: nextOrderType,
    });

    setOrderType(nextOrderType);
  };

  const resetOrder = () => setOrderType(OrderTypeEnum.NONE);

  return {
    orderType,
    nextOrder,
    resetOrder,
  };
};
