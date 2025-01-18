import css from "./Button.module.css";

const Button = ({ text, type }) => {
  return <button className={css.btn}>{text}</button>;
};
export default Button;
