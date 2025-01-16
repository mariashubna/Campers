import css from "./Button.module.css";

const Button = ({ text }) => {
  return (
    <button className={css.btn} type="submit">
      {" "}
      {text}{" "}
    </button>
  );
};
export default Button;
