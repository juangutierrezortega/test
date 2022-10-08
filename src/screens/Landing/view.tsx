import FloatingActionButton from "../../components/FloatingActionButton";
import CardList from "../../components/CardList";
import { Container } from "./styles";

const LandingScreen = ({ cards = [] }) => {
  console.log({cards})
  return (
    <Container>
      <CardList items={cards} />
      <FloatingActionButton aria-label="add" id="addButton"/>
    </Container>
  );
}

export default LandingScreen;
