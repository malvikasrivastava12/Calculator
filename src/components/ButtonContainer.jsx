import styles from "../App.module.css";
const ButtonContainer = ({ onButtonClick }) => {
  const button = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonConainer}>
      {button.map((item) => {
        return (
          <button className={styles.button} onClick={() => onButtonClick(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonContainer;
