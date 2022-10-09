import * as React from "react";
import Grid from "@mui/material/Grid";
import { ICard } from "../../domains/cards/types";
import Card from "../Card";
import { CardListProps } from "./types";
import ConfirmDialog from "../ConfirmDialog";
import { useModal } from "../Modal";
import { Container } from "./styles";

const CardList: React.FC<CardListProps> = ({
  items,
  handleSelect,
  handleRemove,
}) => {
  const [cardSelected, setCardSelected] = React.useState<ICard | undefined>(
    undefined
  );
  const { open, handleClose, handleOpen } = useModal();

  const handleConfirmRemove = () => {
    if (cardSelected) {
      handleRemove(cardSelected?.id as string);
    }
    handleClose();
  };

  const handleOpenRemove = (card: ICard) => () => {
    setCardSelected(card);
    handleOpen();
  };

  if (!items?.length) {
    return (
      <Container center>
        No hay tarjetas creadas. Pulse el icono de la parte inferior derecha
        para añadir una
      </Container>
    );
  }

  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
        {items.map((item: ICard) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={`list-${item.id}`}>
            <Card
              item={item}
              handleEdit={() => handleSelect(item)}
              handleRemove={handleOpenRemove(item)}
            />
          </Grid>
        ))}
        <ConfirmDialog
          title="¿Está seguro?"
          text="Si acepta, perdera la información de la tarjeta"
          open={open}
          handleConfirm={handleConfirmRemove}
          handleClose={handleClose}
        />
      </Grid>
    </Container>
  );
};

export default CardList;
