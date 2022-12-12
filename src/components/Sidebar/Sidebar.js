import React, { useState } from "react";

import SidebarCSS from "./Sidebar.module.css";

// atoms

import MenuButton from "../atoms/MenuButton/MenuButton";
import SidebarHomeBtn from "../atoms/SidebarHomeBtn/SidebarHomeBtn";
import SidebarUL from "../atoms/SidebarUL/SidebarUL";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={SidebarCSS.container}>
      <MenuButton isActive={isActive} setIsActive={setIsActive} />
      {isActive && (
        <div className={SidebarCSS.sidebar}>
          <SidebarHomeBtn />
          <h3 className={SidebarCSS.listTitle}>DATA</h3>
          <SidebarUL />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
