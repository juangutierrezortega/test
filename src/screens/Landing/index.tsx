import { useState } from "react";
import { useModal } from "../../components/Modal";
import { useCards } from "../../domains/cards/context";
import { useOrderCards } from "../../domains/cards/hooks";
import { ICard } from "../../domains/cards/types";

import View from "./view";


function LandingScren(props: any) {
  const [cardSelected, setCardSelected] = useState<ICard | undefined>();
  const { fetchCards, addCard, updateCard, removeCard } = useCards();
  const { open, handleClose, handleOpen } = useModal();
  const {
    orderBy,
    nextOrderTitle,
    orderTypeTitle,
    nextOrderCreatedAt,
    orderTypeCreatedAt,
  } = useOrderCards();

  const handleCloseAction = () => {
    setCardSelected(undefined);
    handleClose();
  };

  const handleSubmit = (card: ICard) => {
    cardSelected ? updateCard(card) : addCard(card);
    handleCloseAction();
  };

  const handleSelect = (card: ICard) => {
    setCardSelected(card);
    handleOpen();
  };

  const handleRemove = (cardId: string) => {
    removeCard(cardId);
  };

  const cards = fetchCards(orderBy);

  return (
    <>
      <View
        {...props}
        cards={cards}
        handleSubmit={handleSubmit}
        handleClose={handleCloseAction}
        open={open}
        handleOpen={handleOpen}
        handleSelect={handleSelect}
        handleRemove={handleRemove}
        cardSelected={cardSelected}
        nextOrderTitle={nextOrderTitle}
        orderTypeTitle={orderTypeTitle}
        nextOrderCreatedAt={nextOrderCreatedAt}
        orderTypeCreatedAt={orderTypeCreatedAt}
      />
    </>
  );
}

export default LandingScren;
