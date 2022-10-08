import FloatingActionButton from "../../components/FloatingActionButton";
import CardList from "../../components/CardList";
import Modal, { useModal } from "../../components/Modal";
import { Container } from "./styles";

const LandingScreen = ({ cards = [] }) => {
  const { handleOpen, ...modal} = useModal();

  return (
    <Container>
      <CardList items={cards} />
      <FloatingActionButton
        aria-label="add"
        id="addButton"
        onClick={handleOpen}
      />
      <Modal {...modal}>
        modal content
      </Modal>
    </Container>
  );
};

export default LandingScreen;
