import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

import SidebarCSS from "./Sidebar.module.css"

const Sidebar = () => {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className={SidebarCSS.container}>

      {isActive ? 
        <div onClick={() => {setIsActive((prevState => !prevState))}} className={`${SidebarCSS.hamburger} ${SidebarCSS.activeBtn}`}>
          <hr className={SidebarCSS.hamburgerLine} />
          <hr className={SidebarCSS.hamburgerLine} />
        </div> 
        : 
        <div onClick={() => {setIsActive((prevState => !prevState))}} className={SidebarCSS.hamburger}>
          <hr className={SidebarCSS.hamburgerLine} />
          <hr className={SidebarCSS.hamburgerLine} />
      </div>}

      {isActive && <div className={SidebarCSS.sidebar}>
        <NavLink to="/"><p className={SidebarCSS.homeBtn}>Back to Home</p></NavLink>
        <h3 className={SidebarCSS.listTitle}>DATA</h3>
        <ul className={SidebarCSS.dataList}>
          <li><NavLink to="/data/temperature">Temperature</NavLink></li>
          <li><NavLink to="/data/co2">CO2</NavLink></li>
          <li><NavLink to="/data/methane">Methane</NavLink></li>
          <li><NavLink to="/data/nitrous-oxide">NO2</NavLink></li>
          <li><NavLink to="/data/arctic">Polar Ice</NavLink></li>
        </ul>
      </div>}
    </div>
  )
}

export default Sidebar