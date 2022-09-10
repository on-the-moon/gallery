import React from "react";
import styles from "./Navbar.module.css";

function navbar({ selectModule }) {
  return (
    <div>
      <nav>
        <div>
          <ul>
            <li>
              <a href="index.html" onClick={(e) => selectModule(e, "PageBio")}>
                Home
              </a>
            </li>
            <li>
              <a
                href="index.html"
                onClick={(e) => selectModule(e, "DiceRoller")}
              >
                Dice Tool
              </a>
            </li>
            <li>
              <a href="index.html" onClick={(e) => selectModule(e, "Gallery")}>
                Gallery
              </a>
            </li>
            <li>
              <a href="index.html" onClick={(e) => selectModule(e, "Contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
