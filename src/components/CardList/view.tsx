import * as React from "react";
import Grid from "@mui/material/Grid";
import { ICard } from "../../domains/cards/types";
import Card from "../Card";
import { CardListProps } from "./types";

const CardList: React.FC<CardListProps> = ({ items }) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
      {items.map((item: ICard) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={`list-${item.id}`}>
          <Card item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
