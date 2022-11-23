import React from 'react'

import HomeCSS from "./Home.module.css"

// Components

import Sidebar from "../../components/Sidebar/Sidebar"

const Home = () => {

 
  return (
    <div className={HomeCSS.homeWallpaper}>
      <div className={HomeCSS.container}>
        <div className={HomeCSS.content}>
          <h1 className={HomeCSS.title}>the earth lives also without us</h1>
          <div className={HomeCSS.paragraphContainer}>
            <hr className={HomeCSS.line}/>
            <p className={HomeCSS.paragraph}>Check the charts about global warming. Different data as: Temperature, Co2, Methane, No2, and Polar ice.</p>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>  
  )
}

export default Home