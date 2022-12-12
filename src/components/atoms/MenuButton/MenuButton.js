import React from "react";

import hamburgerCSS from "./MenuButton.module.css";

const MenuButton = ({ isActive, setIsActive }) => {
  return (
    <>
      {isActive ? (
        <div
          onClick={() => {
            setIsActive((prevState) => !prevState);
          }}
          className={`${hamburgerCSS.hamburger} ${hamburgerCSS.activeBtn}`}
        >
          <hr className={hamburgerCSS.hamburgerLine} />
          <hr className={hamburgerCSS.hamburgerLine} />
        </div>
      ) : (
        <div
          onClick={() => {
            setIsActive((prevState) => !prevState);
          }}
          className={hamburgerCSS.hamburger}
        >
          <hr className={hamburgerCSS.hamburgerLine} />
          <hr className={hamburgerCSS.hamburgerLine} />
        </div>
      )}
    </>
  );
};

export default MenuButton;
