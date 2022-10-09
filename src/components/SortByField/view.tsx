import React from "react";

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
    <div onClick={nextOrder}>
      {`${label} ${orderType}`}
    </div>
  );
};

export default SortByField;
