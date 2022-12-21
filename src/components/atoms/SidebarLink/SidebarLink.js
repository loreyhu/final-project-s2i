import React from "react";
import { NavLink } from "react-router-dom";

import SidebarLinkCSS from "./SidebarLink.module.css";

const SidebarLink = ({ destination, value }) => {
  return (
    <NavLink to={destination}>
      <p className={SidebarLinkCSS.link}>{value}</p>
    </NavLink>
  );
};

export default SidebarLink;
