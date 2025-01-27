import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OprationButton from "./OprationButton";
import KeyboardButtons from "./KeyboardButtons";
import EvaluateButton from "./EvaluateButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit", // done
  CHOOSE_OPERATION: "choose-operation", //done
  DELETE_DIGIT: "delete-digit",
  CLEAR: "clear", // done
  EVALUATE: "evaluate the operation",
};

// # this main function in useReducer #

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.currentOperand === "0" && payload.digit === "0") {
        return state;
      }
      if (state.currentOperand?.includes(".") && payload.digit === ".") {
        return state;
      }
      if (state.currentOperand === "0" && payload.digit !== ".") {
        return {
          ...state,
          currentOperand: payload.digit,
        };
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    // ***********************************************
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null && state.currentOperand != null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    // ***********************************************
    case ACTIONS.EVALUATE:
      return {
        ...state,
        currentOperand: evaluate(state),
      };

    // ***********************************************

    case ACTIONS.CLEAR:
      return {};

    default:
      return state;
  }
}
function evaluate({ previousOperand, operation, currentOperand }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) {
    return "";
  }
  let compilation = "";
  switch (operation) {
    case "+":
      compilation = prev + current;
      break;
    case "-":
      compilation = prev - current;
      break;

    case "*":
      compilation = prev * current;
      break;

    case "÷":
      compilation = prev / current;
      break;
    default:
      return;
  }
  return compilation.toString();
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {
      currentOperand: null,
      previousOperand: null,
      operation: null,
    }
  );
  console.log(previousOperand);
  KeyboardButtons(dispatch);

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand}
          {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
        DEL
      </button>
      <OprationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OprationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OprationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OprationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <EvaluateButton dispatch={dispatch} />
      
    </div>
  );
}

export default App;
