import React from "react";

import hamburgerCSS from "./MenuButton.module.css";

const Hamburger = ({ isActive, setIsActive }) => {
  return (
    <div
      onClick={() => {
        setIsActive((prevState) => !prevState);
      }}
      className={`${hamburgerCSS.hamburger} ${
        isActive && hamburgerCSS.activeBtn
      }`}
    >
      <hr className={hamburgerCSS.hamburgerLine} />
      <hr className={hamburgerCSS.hamburgerLine} />
    </div>
  );
};

export default Hamburger;
