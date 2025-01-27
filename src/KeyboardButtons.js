import { useEffect } from "react";
import { ACTIONS } from "./App";

function KeyboardButtons(dispatch) {
  useEffect(() => {
    function handleKeydown(event) {
      if (event.key >= 0 && event.key <= 9) {
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: event.key } });
      }
      if (
        event.key === "." ||
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/"
      ) {
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: event.key },
        });
      }
      if (event.key === "/") {
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: "÷" },
        });
      }
      if (event.key === "Escape") {
        dispatch({
          type: ACTIONS.CLEAR,
        });
      }
      if (event.key === "Enter" || event.key === "=") {
        dispatch({
          type: ACTIONS.EVALUATE,
        });
      }
      console.log(event.key);
    }
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [dispatch]);
}

export default KeyboardButtons;
