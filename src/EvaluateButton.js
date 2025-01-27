import { ACTIONS } from "./App.jsx";
function EvaluateButton({ dispatch }) {
  return (
    <button
      className={"span-two"}
      onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
    >
      =
    </button>
  );
}
export default EvaluateButton;
