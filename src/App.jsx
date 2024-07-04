import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  let [Value, setValue] = useState("");

  const onButtonClick = (ButtonName) => {
    console.log(ButtonName);
    if (ButtonName === "C") {
      setValue("");
    } else if (ButtonName === "=") {
      let resultValue = eval(Value);
      setValue(resultValue);
    } else {
      let newValue = Value + ButtonName;
      setValue(newValue);
    }
  };

  return (
    <>
      <center className={styles.mainContainer}>
        <div className={styles.Calculator}>
          <Display displayValue={Value}></Display>
          <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
        </div>
      </center>
    </>
  );
}

export default App;
