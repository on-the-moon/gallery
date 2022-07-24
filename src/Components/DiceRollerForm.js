import React, { useState } from "react";
import styles from "./DiceRollerForm.module.css";

function DiceRollerForm() {
  const [diceType, setDiceType] = useState("4");
  const [numDice, setNumDice] = useState(1);
  const [diceTotal, setDiceTotal] = useState(0);
  const [attackBonus, setAttackBonus] = useState(0);
  const [damageBonus, setDamageBonus] = useState(0);
  const [attackRollTotal, setAttackRollTotal] = useState(0);
  const diceTypes = [4, 6, 8, 10, 12, 20, 50, 100];

  const rollD = (dice) => Math.floor(Math.random() * dice + 1);

  //uses rollD function to roll multiple dice and return a total
  const rollMultiple = () => {
    setDiceTotal(damageBonus);
    setAttackRollTotal(rollD(20) + attackBonus);
    for (let counter = numDice; counter !== 0; counter--) {
      setDiceTotal((diceTotal) => diceTotal + rollD(diceType));
    }
  };

  return (
    <div>
      <div className={styles.dice_form}>
        <form name="dice-roller-input" className={styles.dice_roller_input}>
          <h2
            className={`${styles.attackBonus_label} ${styles.number} ${styles.label} ${styles.grid_section}`}
          >
            Enter your Attack Bonus:
          </h2>
          <input
            type="number"
            min="0"
            value={attackBonus}
            onChange={(e) => setAttackBonus(+e.target.value)}
            id="count"
            className={`${styles.attackBonus_entry} ${styles.grid_section}`}
          />
          <h2
            className={`${styles.diceType_label} ${styles.type} ${styles.abel} ${styles.grid_section}`}
          >
            Select Dice Type:
          </h2>
          <select
            name="dice-dropdown"
            className={`${styles.diceType_entry} ${styles.grid_section}`}
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
          <h2
            className={`${styles.numDice_label} ${styles.number} ${styles.label} ${styles.grid_section}`}
          >
            Enter Number of Dice:
          </h2>
          <input
            type="number"
            min="1"
            value={numDice}
            onChange={(e) => setNumDice(+e.target.value)}
            id="count"
            className={`${styles.numDice_entry} ${styles.grid_section}`}
          />
          <h2 className={`${styles.damageBonus_label} ${styles.grid_section}`}>
            Enter your Damage Bonus:
          </h2>
          <input
            type="number"
            min="0"
            value={damageBonus}
            onChange={(e) => setDamageBonus(+e.target.value)}
            id="bonus"
            className={`${styles.damageBonus_entry} ${styles.grid_section}`}
          />
          <button
            type="button"
            onClick={rollMultiple}
            className={`${styles.roll_button} ${styles.grid_section}`}
          >
            <p>Roll It</p>
          </button>
          <h2
            name="attack-roll-total"
            className={`${styles.attackRoll_total} ${styles.grid_section}`}
          >
            Rolled
            <span> {attackRollTotal}</span> to hit.
          </h2>
          <h2
            name="damage-roll-total"
            className={`${styles.damageRoll_total} ${styles.grid_section}`}
          >
            <span id="damage-roll-total">{diceTotal}</span> damage dealt on hit!
          </h2>
        </form>
      </div>
    </div>
  );
}

export default DiceRollerForm;
