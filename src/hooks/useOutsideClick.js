import { useRef, useEffect } from "react";

export const useOutsideClick = (callback) => {
  const ref = useRef();
  useEffect(() => {
    function handleOutClick(event) {
      const target = event.target;
      if (!ref.current.contains(target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return ref;
};
