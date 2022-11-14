import Portal from "../../assets/portal.png";
import { StyledButton } from "../../styles/buttons";
import { StyledInput } from "../../styles/input";
import { StyledHeader } from "./style";
import { GiDeadHead } from "react-icons/gi";
import { GiLifeBar } from "react-icons/gi";
import { GiCharacter } from "react-icons/gi";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

export const Header = () => {
  const { characters, setFilteredChars } = useContext(UserContext);
  const [searchInput, setSearchInput] = useState("");

  const showCharacter = () => {
    const searched = characters.filter((character) =>
      character.name.toLowerCase().includes(searchInput)
    );
    setFilteredChars(searched);
  };

  const showDeadChars = () => {
    const dead = characters.filter((character) => character.status === "Dead");

    setFilteredChars(dead);
  };

  const showAliveChars = () => {
    const alive = characters.filter(
      (character) => character.status === "Alive"
    );

    setFilteredChars(alive);
  };

  return (
    <StyledHeader>
      <img src={Portal} alt="" />
      <div>
        <StyledInput
          type="text"
          placeholder="Search for a character"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <StyledButton
          buttonType="bodyBtn"
          color="--primary-green"
          border="--primary-green"
          onClick={showCharacter}
        >
          Search
        </StyledButton>
      </div>
      <div>
        <StyledButton
          buttonType="headerBtn"
          color="--primary-green-light"
          border="--primary-green-light"
          onClick={() => setFilteredChars(characters)}
        >
          <GiCharacter size={24} /> Show all
        </StyledButton>
        <StyledButton
          buttonType="headerBtn"
          color="--primary-blue-light"
          border="--primary-blue-light"
          onClick={showAliveChars}
        >
          {" "}
          <GiLifeBar size={24} /> Alive charcaters
        </StyledButton>
        <StyledButton
          buttonType="headerBtn"
          color="--primary-green-light"
          border="--primary-green-light"
          onClick={showDeadChars}
        >
          {" "}
          <GiDeadHead size={24} /> Dead characters
        </StyledButton>
      </div>
    </StyledHeader>
  );
};
