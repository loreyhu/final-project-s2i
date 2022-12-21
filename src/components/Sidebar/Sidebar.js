import React, { useState } from "react";

import SidebarCSS from "./Sidebar.module.css";

// components

import Hamburger from "../Hamburger/Hamburger";
import SidebarLink from "../atoms/SidebarLink/SidebarLink";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={SidebarCSS.container}>
      <Hamburger isActive={isActive} setIsActive={setIsActive} />
      {isActive && (
        <div className={SidebarCSS.sidebar}>
          <SidebarLink destination={"/"} value={"Back to Home"} />
          <h3 className={SidebarCSS.listTitle}>DATA</h3>
          <ul className={SidebarCSS.dataList}>
            <li>
              <SidebarLink
                destination={"/data/temperature"}
                value={"Temperature"}
              />
            </li>
            <li>
              <SidebarLink destination={"/data/co2"} value={"CO2"} />
            </li>
            <li>
              <SidebarLink destination={"/data/methane"} value={"Methane"} />
            </li>
            <li>
              <SidebarLink destination={"/data/nitrous-oxide"} value={"NO2"} />
            </li>
            <li>
              <SidebarLink destination={"/data/arctic"} value={"Polar Ice"} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
