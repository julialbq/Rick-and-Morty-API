import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import api from "../../services/api";
import { StyledButton } from "../../styles/buttons";
import { CharacterCard } from "../CharacterCard";
import { CharModal } from "../CharModal";
import { StyledDiv, StyledList } from "./style";

export const CharacterList = () => {
  const {
    characters,
    page,
    setPage,
    currentChar,
    setCurrentChar,
    filteredChars,
  } = useContext(UserContext);
  const getCharacter = (CharId) => {
    api
      .get(`character/${CharId}`)
      .then((response) => setCurrentChar(response.data));
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page !== null) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <>{currentChar && <CharModal />}</>
      {filteredChars.length === 0 ? (
        <StyledList>
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={() => getCharacter(character.id)}
            />
          ))}
        </StyledList>
      ) : (
        <StyledList>
          {filteredChars.map((filteredChar) => (
            <CharacterCard
              key={filteredChar.id}
              character={filteredChar}
              onClick={() => getCharacter(filteredChar.id)}
            />
          ))}
        </StyledList>
      )}
      <StyledDiv>
        <StyledButton
          buttonType="bodyBtn"
          color="--primary-blue"
          border="--primary-blue"
          onClick={previousPage}
        >
          Previous
        </StyledButton>
        <StyledButton
          buttonType="bodyBtn"
          color="--primary-blue"
          border="--primary-blue"
          onClick={nextPage}
        >
          Next
        </StyledButton>
      </StyledDiv>
    </div>
  );
};
