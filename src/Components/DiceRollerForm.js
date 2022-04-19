import React, { useState } from "react";

function DiceRollerForm() {
  const [diceType, setDiceType] = useState("4");
  const [numDice, setNumDice] = useState(1);
  const [diceTotal, setDiceTotal] = useState(0);
  const [attackBonus, setAttackBonus] = useState(0);
  const [damageBonus, setDamageBonus] = useState(0);
  const [attackRollTotal, setAttackRollTotal] = useState(0);
  const diceTypes = [4, 6, 8, 12, 20, 50, 100];

  const rollD = (dice) => Math.floor(Math.random() * dice + 1);

  //uses rollD function to roll multiple dice and return a total
  const rollMultiple = () => {
    setDiceTotal(attackBonus);
    setAttackRollTotal(rollD(20) + attackBonus);
    for (let counter = numDice; counter !== 0; counter--) {
      setDiceTotal((diceTotal) => diceTotal + rollD(diceType));
    }
  };

  return (
    <div>
      <div className="dice-form">
        <form name="dice-roller-input" className="dice-roller-input">
          <h2 className="attackBonus-label number label grid-section">
            Enter Your Attack Bonus
          </h2>
          <input
            type="number"
            min="0"
            value={attackBonus}
            onChange={(e) => setAttackBonus(+e.target.value)}
            id="count"
            className="attackBonus-entry grid-section"
          />
          <h2 className="diceType-label type label grid-section">
            Select Dice Type
          </h2>
          <select
            name="dice-dropdown"
            className="diceType-entry grid-section"
            onChange={(e) => {
              setDiceType(+e.target.value);
            }}
            value={diceType}
          >
            {diceTypes.map((diceOption, i) => (
              <option
                name={diceOption}
                value={diceOption}
                key={"diceOption_" + i}
              >
                d{diceOption}
              </option>
            ))}
          </select>
          <h2 className="numDice-label number label grid-section">
            Enter Number of Dice
          </h2>
          <input
            type="number"
            min="1"
            value={numDice}
            onChange={(e) => setNumDice(+e.target.value)}
            id="count"
            className="numDice-entry grid-section"
          />
          <h2 className="damageBonus-label grid-section">
            Enter your damage bonus
          </h2>
          <input
            type="number"
            min="0"
            value={damageBonus}
            onChange={(e) => setDamageBonus(+e.target.value)}
            id="bonus"
            className="damageBonus-entry grid-section"
          />
          <button
            type="button"
            onClick={rollMultiple}
            className="roll-button grid-section"
          >
            <p>Roll It</p>
          </button>
          <h2
            name="attack-roll-total"
            className="attackRoll-total grid-section"
          >
            {" "}
            Rolled
            <span> {attackRollTotal}</span> to hit.
          </h2>
          <h2
            name="damage-roll-total"
            className="damageRoll-total grid-section"
          >
            <span id="damage-roll-total">{diceTotal}</span> damage dealt on hit!
          </h2>
        </form>
      </div>
    </div>
  );
}

export default DiceRollerForm;
