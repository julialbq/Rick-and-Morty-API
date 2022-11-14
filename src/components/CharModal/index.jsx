import { StyledModal } from "./style";
import { MdClose } from "react-icons/md";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { NameCharacter, SpanInfo } from "../../styles/typography";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const CharModal = () => {
  const { currentChar, setCurrentChar } = useContext(UserContext);
  const modalRef = useOutsideClick(() => {
    setCurrentChar(null);
  });

  return (
    <StyledModal>
      <div className="overlay">
        <div className="content" ref={modalRef}>
          <button
            onClick={() => {
              setCurrentChar(null);
            }}
          >
            <MdClose size={24} />
          </button>
          <div>
            <NameCharacter color="--primary-blue">
              {currentChar.name}
            </NameCharacter>
            <SpanInfo color="--primary-blue-light">
              Species: {currentChar.species}
            </SpanInfo>
            <SpanInfo color="--primary-green-light">
              Origin {currentChar.origin.name}
            </SpanInfo>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
