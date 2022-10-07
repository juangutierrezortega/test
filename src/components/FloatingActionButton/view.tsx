import { Fab } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { FloatingActionButtonProps } from "./types";

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  color = "primary",
  ...rest
}) => {
  return (
    <Fab color={color} {...rest} >
      <AddIcon />
    </Fab>
  );
};

export default FloatingActionButton;
