import { Backdrop, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { ProvideCards, useCards } from "./domains/cards/context";
import { getMyCards } from "./domains/cards/storage";
import { initStorage } from "./lib/storage";
import LandingScreen from "./screens/Landing";

initStorage(localStorage);

const Screens = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { setCards } = useCards();

  useEffect(() => {
    const loadMyCards = async () => {
      const myCards = await getMyCards();
      setCards(myCards || []);
      // he añadido este timeout para simular una carga inicial
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    };
    loadMyCards();
  }, []);

  if (isLoading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

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
