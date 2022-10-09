import { Fab } from "@mui/material";
import React from "react";
import { FloatingActionButtonProps } from "./types";

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  color = "primary",
  children,
  ...rest
}) => {
  return (
    <Fab color={color} {...rest} >
      {children}
    </Fab>
  );
};

export default FloatingActionButton;
