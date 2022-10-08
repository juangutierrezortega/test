import { useEffect } from "react";
import { ProvideCards, useCards } from "./domains/cards/context";
import { getMyCards } from "./domains/cards/storage";
import { initStorage } from "./lib/storage";
import LandingScreen from "./screens/Landing";

initStorage(localStorage);

const Screens = () => {
  const { setCards } = useCards();

  useEffect(() => {
    const loadMyCards = async () => {
      const myCards = await getMyCards();
      setCards(myCards || [])
    };
    loadMyCards();
  }, [])

  return <LandingScreen />;
};

function App() {
  return (
    <ProvideCards>
      <Screens />
    </ProvideCards>
  );
}

export default App;
