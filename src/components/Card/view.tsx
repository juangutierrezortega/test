import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import EditIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

import { CardProps } from "./types";
import { ButtonsContainer, Card } from "./styles";

const CardComponent: React.FC<CardProps> = ({
  item,
  handleEdit,
  handleRemove,
}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={item?.imageUrl || "/images/blankimage.jpeg"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item?.description}
          </Typography>

          <ButtonsContainer>
            <EditIcon onClick={handleEdit} />
            <DeleteIcon onClick={handleRemove} />
          </ButtonsContainer>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
