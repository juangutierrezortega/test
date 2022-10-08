import FloatingActionButton from "../../components/FloatingActionButton";
import CardList from "../../components/CardList";
import Modal from "../../components/Modal";
import { Container } from "./styles";
import CardForm from "../../components/CardForm";
import { ICard, ICardActions, ICardList } from "../../domains/cards/types";
import { IModal } from "../../components/Modal/types";

interface LandingScreenProps extends IModal, ICardActions {
  cards: ICardList;
}

const LandingScreen: React.FC<LandingScreenProps> = ({
  cards = [],
  handleOpen,
  handleClose,
  open,
  addCard,
}) => {
  const handleSubmit = (newCard: ICard) => {
    addCard(newCard);
    handleClose();
  };

  return (
    <Container>
      <CardList items={cards} />
      <FloatingActionButton
        aria-label="add"
        id="addButton"
        onClick={handleOpen}
      />
      <Modal handleClose={handleClose} open={open}>
        <CardForm handleSubmit={handleSubmit} />
      </Modal>
    </Container>
  );
};

export default LandingScreen;
