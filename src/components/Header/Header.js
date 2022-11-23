import React from 'react'
import { descriptions } from '../../dataObj/descriptions'

// Components

import Sidebar from '../Sidebar/Sidebar'

import HeaderCSS from './Header.module.css'

const Header = ({ id }) => {


  return (
    <>
      <div className={HeaderCSS.headerContainer}>
        <div className={HeaderCSS.header}>
          <h1 className={HeaderCSS.title}>{id}</h1>
          <hr className={HeaderCSS.line} />
          <p className={HeaderCSS.paragraph}>
            {descriptions[id]}
          </p>
          <Sidebar id={id}/>
        </div>  
      </div>
    </>
  )
}

export default Header