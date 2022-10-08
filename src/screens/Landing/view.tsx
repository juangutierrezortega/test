import FloatingActionButton from "../../components/FloatingActionButton";
import CardList from "../../components/CardList";
import Modal from "../../components/Modal";
import { Container } from "./styles";
import CardForm from "../../components/CardForm";
import { ICard, ICardList } from "../../domains/cards/types";
import { IModal } from "../../components/Modal/types";

interface LandingScreenProps extends IModal {
  cards: ICardList;
  handleSubmit: (values: ICard) => void;
  handleSelect: (card: ICard) => void;
  handleRemove: (cardId: string) => void;
  cardSelected: ICard | undefined;
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
}) => {
  return (
    <Container>
      <CardList
        items={cards}
        handleSelect={handleSelect}
        handleRemove={handleRemove}
      />
      <FloatingActionButton
        aria-label="add"
        id="addButton"
        onClick={handleOpen}
      />
      <Modal handleClose={handleClose} open={open}>
        <CardForm handleSubmit={handleSubmit} cardSelected={cardSelected} />
      </Modal>
    </Container>
  );
};

export default LandingScreen;
