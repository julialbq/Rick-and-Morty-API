import "./App.css";
import { CharacterList } from "./components/CharacterList";
import { Header } from "./components/Header";
import { UserProvider } from "./context/UserContext";

import { MainTitle } from "./styles/typography";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <MainTitle>Characters</MainTitle>
        <CharacterList />
      </UserProvider>
    </div>
  );
}

export default App;
