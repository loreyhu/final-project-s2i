import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ChartPageCSS from "./ChartPage.module.css"

// Components

import LineChart from '../../components/LineChart/LineChart'
import Header from '../../components/Header/Header'  

import {clientAPI} from "../../components/clientAPI/clientAPI"

const ChartPage = () => {

  const [data, setData] = useState([])

  const {id} = useParams()

  //api call using clientAPI

  const APICall = async () => {
     const data = await clientAPI(id)
      setData(data.data.result || data.data.co2 || data.data.methane || data.data.nitrous || data.data.arcticData)
  }

  useEffect(() => {
    APICall()
    // eslint-disable-next-line
  }, [id])

  return (
    <div className={ChartPageCSS.chartPage}>
      <Header id={id}/>
      <div className={ChartPageCSS.chartContainer}>
        <LineChart id={id} data={data} key={id}/>
      </div>
    </div>
  )
}

export default ChartPage