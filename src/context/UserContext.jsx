import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import api from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [currentChar, setCurrentChar] = useState(null);
  const [filteredChars, setFilteredChars] = useState([]);

  useEffect(() => {
    api
      .get(`character/?page=${page}`)
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((err) => console.error(err));
  }, [page]);

  return (
    <UserContext.Provider
      value={{
        characters,
        setCharacters,
        page,
        setPage,
        currentChar,
        setCurrentChar,
        filteredChars,
        setFilteredChars,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
