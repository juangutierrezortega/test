import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CardProps } from './types';

const CardComponent: React.FC<CardProps> = ({
    item
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item?.imageUrl || "/static/images/cards/contemplative-reptile.jpg"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent;
