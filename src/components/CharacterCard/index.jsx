import { StyledButton } from "../../styles/buttons";
import { NameCharacter } from "../../styles/typography";
import { StyledLi } from "./style";

export const CharacterCard = ({ character, onClick }) => {
  return character.status === "Alive" ? (
    <StyledLi bckgColor="--primary-blue-light" key={character.id}>
      <NameCharacter color="--primary-blue">{character.name}</NameCharacter>
      <img src={character.image} alt={character.name} />
      <StyledButton
        buttonType="bodyBtn"
        color="--primary-blue"
        border="--primary-blue"
        onClick={onClick}
      >
        See more
      </StyledButton>
    </StyledLi>
  ) : (
    <StyledLi bckgColor="--primary-green-light" key={character.id}>
      <NameCharacter color="--primary-green">{character.name}</NameCharacter>
      <img src={character.image} alt={character.name} />
      <StyledButton
        buttonType="bodyBtn"
        color="--primary-green"
        border="--primary-green"
        onClick={onClick}
      >
        See more
      </StyledButton>
    </StyledLi>
  );
};
