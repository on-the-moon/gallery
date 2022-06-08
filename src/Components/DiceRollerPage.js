import React, { useState } from "react";
import DiceRollerForm from "./DiceRollerForm";

function DiceRollerPage() {
  const [diceRollers, setDiceRollers] = useState([<DiceRollerForm />]);

  const addDiceForm = () => {
    setDiceRollers([...diceRollers, <DiceRollerForm />]);
  };
  const removeDiceForm = () => {
    setDiceRollers(diceRollers.slice(0, -1));
  };

  return (
    <div className="rollers">
      {diceRollers}
      <button type="button" onClick={addDiceForm}>
        <p>Add One</p>
      </button>
      <button type="button" onClick={removeDiceForm}>
        <p>Remove One</p>
      </button>
    </div>
  );
}

export default DiceRollerPage;
