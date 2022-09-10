import React, { useState } from "react";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Contact from "./Contact.js";
import DiceRollerPage from "./DiceRollerPage.js";
import Gallery from "./Gallery.js";

function main() {
  const [currentModule, setCurrentModule] = useState(<Home />);

  const selectModule = (e, module) => {
    e.preventDefault();
    switch (module) {
      case "Home":
        setCurrentModule(<Home />);
        break;
      case "DiceRoller":
        setCurrentModule(<DiceRollerPage />);
        break;
      case "Gallery":
        setCurrentModule(<Gallery />);
        break;
      case "Contact":
        setCurrentModule(<Contact />);
        break;
      default:
        setCurrentModule(<Home />);
    }
  };

  return (
    <div>
      <Navbar selectModule={selectModule} className="Navbar" />
      {currentModule}
    </div>
  );
}

export default main;
