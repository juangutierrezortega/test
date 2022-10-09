import AddIcon from "@mui/icons-material/Add";

import FloatingActionButton from "../../components/FloatingActionButton";
import CardList from "../../components/CardList";
import Modal from "../../components/Modal";
import { Container } from "./styles";
import CardForm from "../../components/CardForm";
import { ICard, ICardList } from "../../domains/cards/types";
import { IModal } from "../../components/Modal/types";
import SortCardsByField from "../../components/SortCardsByField";
import { OrderTypeEnum } from "../../domains/common/types";

interface LandingScreenProps extends IModal {
  cards: ICardList;
  handleSubmit: (values: ICard) => void;
  handleSelect: (card: ICard) => void;
  handleRemove: (cardId: string) => void;
  cardSelected: ICard | undefined;
  nextOrderTitle: () => void;
  orderTypeTitle: OrderTypeEnum;
  nextOrderCreatedAt: () => void;
  orderTypeCreatedAt: OrderTypeEnum;
}

const LandingScreen: React.FC<LandingScreenProps> = ({
  cards = [],
  handleOpen,
  handleClose,
  open,
  handleSubmit,
  handleSelect,
  handleRemove,
  cardSelected,
  nextOrderTitle,
  orderTypeTitle,
  nextOrderCreatedAt,
  orderTypeCreatedAt,
}) => {
  return (
    <Container>
      <SortCardsByField
        nextOrderTitle={nextOrderTitle}
        orderTypeTitle={orderTypeTitle}
        nextOrderCreatedAt={nextOrderCreatedAt}
        orderTypeCreatedAt={orderTypeCreatedAt}
      />

      <CardList
        items={cards}
        handleSelect={handleSelect}
        handleRemove={handleRemove}
      />
      <FloatingActionButton
        aria-label="add"
        id="addButton"
        onClick={handleOpen}
      >
        <AddIcon />
      </FloatingActionButton>
      <Modal handleClose={handleClose} open={open}>
        <CardForm handleSubmit={handleSubmit} cardSelected={cardSelected} />
      </Modal>
    </Container>
  );
};

export default LandingScreen;
