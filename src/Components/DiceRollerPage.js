import React, { useState } from "react";
import DiceRollerForm from "./DiceRollerForm";
import styles from "./DiceRollerPage.module.css";

function DiceRollerPage() {
  const [diceRollers, setDiceRollers] = useState([<DiceRollerForm />]);

  const addDiceForm = () => {
    setDiceRollers([...diceRollers, <DiceRollerForm />]);
  };
  const removeDiceForm = () => {
    setDiceRollers(diceRollers.slice(0, -1));
  };

  return (
    <div className={styles.rollers}>
      {diceRollers}
      <button type="button" onClick={addDiceForm} className={styles.add_button}>
        <p>+</p>
      </button>
      <button
        type="button"
        onClick={removeDiceForm}
        className={styles.remove_button}
      >
        <p>-</p>
      </button>
    </div>
  );
}

export default DiceRollerPage;
