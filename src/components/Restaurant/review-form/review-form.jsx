import { useEffect, useReducer } from "react";
import { useCount } from "../../hooks/use-count";
import styles from "./review-form.module.css";

const INIT_FORM = {
  name: "",
  text: "",
  score: 0,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "setName":
      return { ...state, name: payload };
    case "setText":
      return { ...state, text: payload };
    case "setScore":
      return { ...state, score: payload };
    case "clear":
      return INIT_FORM;
    default:
      return state;
  }
}

export function ReviewForm() {
  const { count, increment, decrement, clear } = useCount();

  const [form, dispatch] = useReducer(reducer, INIT_FORM);
  const { name, text, score } = form;

  const isReviewWritten = form.name === "" || form.text === "";

  useEffect(() => {
    dispatch({ type: "setScore", payload: count });
  }, [count]);

  return (
    <div className={styles.reviewContainer}>
      <span className={styles.headerText}>Оставьте свой отзыв</span>
      <span>Name: </span>
      <input
        value={name}
        onChange={(event) => {
          dispatch({ type: "setName", payload: event.target.value });
        }}
      />
      <span>Text: </span>
      <input
        value={text}
        onChange={(event) => {
          dispatch({ type: "setText", payload: event.target.value });
        }}
      />
      <span>Score: </span>
      <div className={styles.counter}>
        <button
          onClick={() => {
            decrement();
          }}>
          -
        </button>
        {score}
        <button
          onClick={() => {
            increment();
          }}>
          +
        </button>
      </div>
      <div className={styles.buttons}>
        <button
          disabled={isReviewWritten}
          className={styles.clearButton}
          onClick={() => {
            clear(), dispatch({ type: "clear" });
          }}>
          Save
        </button>
        <button
          className={styles.clearButton}
          onClick={() => {
            clear(), dispatch({ type: "clear" });
          }}>
          Clear
        </button>
      </div>
    </div>
  );
}
