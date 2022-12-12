import React from "react";
import { NavLink } from "react-router-dom";

import SidebarHomeBtnCSS from "./SidebarHomeBtn.module.css";

const SidebarHomeBtn = () => {
  return (
    <NavLink to="/">
      <p className={SidebarHomeBtnCSS.homeBtn}>Back to Home</p>
    </NavLink>
  );
};

export default SidebarHomeBtn;
