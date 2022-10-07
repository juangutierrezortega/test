import { ProvideCards } from "./domains/cards/context";
import LandingScreen from "./screens/Landing";

function App() {
  return (
    <ProvideCards>
      <LandingScreen />
    </ProvideCards>
  );
}

export default App;
