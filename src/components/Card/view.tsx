import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CardProps } from "./types";

const CardComponent: React.FC<CardProps> = ({ item, handleEdit, handleRemove }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={
            item?.imageUrl || "/images/blankimage.jpeg"
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item?.description}
          </Typography>

          <span onClick={handleEdit}>Editar</span>
          <span onClick={handleRemove}>Elminar</span>

        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
