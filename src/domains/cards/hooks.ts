import { useEffect, useState } from "react";
import usePrevious from "../../lib/usePreviousValue";
import { useOrderBy } from "../common/hooks";
import { OrderBy, OrderTypeEnum, OrderFieldTypeEnum } from "../common/types";

const defaultOrderBy: OrderBy = {
  fieldName: "title",
  fieldType: OrderFieldTypeEnum.TEXT,
  orderType: OrderTypeEnum.NONE,
};

export const useOrderCards = () => {
  const [orderBy, setOrderBy] = useState<OrderBy>(defaultOrderBy);

  const {
    orderType: orderTypeTitle,
    nextOrder: nextOrderTitle,
    resetOrder: resetOrderTitle,
  } = useOrderBy({
    setOrderBy,
    fieldName: "title",
    fieldType: OrderFieldTypeEnum.TEXT,
  });
  const {
    orderType: orderTypeCreatedAt,
    nextOrder: nextOrderCreatedAt,
    resetOrder: resetOrderCreatedAt,
  } = useOrderBy({
    setOrderBy,
    fieldName: "createdAt",
    fieldType: OrderFieldTypeEnum.NUMBER,
  });

  const prevOrderByFieldName = usePrevious(orderBy.fieldName);

  useEffect(() => {
    if (prevOrderByFieldName && prevOrderByFieldName !== orderBy.fieldName) {
      if (orderBy.fieldName === "title") {
        resetOrderCreatedAt();
      }
      if (orderBy.fieldName === "createdAt") {
        resetOrderTitle();
      }
    }
    // eslint-disable-next-line
  }, [prevOrderByFieldName, orderBy.fieldName]);


  return {
    orderTypeTitle,
    nextOrderTitle,
    orderTypeCreatedAt,
    nextOrderCreatedAt,
    orderBy,
  };
};
