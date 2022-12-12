import React from "react";
import { NavLink } from "react-router-dom";

import SidebarUlCSS from "./SidebarUL.module.css";

const SidebarUL = () => {
  return (
    <ul className={SidebarUlCSS.dataList}>
      <li>
        <NavLink to="/data/temperature">Temperature</NavLink>
      </li>
      <li>
        <NavLink to="/data/co2">CO2</NavLink>
      </li>
      <li>
        <NavLink to="/data/methane">Methane</NavLink>
      </li>
      <li>
        <NavLink to="/data/nitrous-oxide">NO2</NavLink>
      </li>
      <li>
        <NavLink to="/data/arctic">Polar Ice</NavLink>
      </li>
    </ul>
  );
};

export default SidebarUL;
