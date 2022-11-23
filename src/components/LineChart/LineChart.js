import React from 'react'
import {Line} from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';

import ChartCSS from "./LineChart.module.css"

Chart.register(...registerables);
Chart.defaults.color = '#fff';

const LineChart = (props) => {

  return (
    <div className={ChartCSS.chart}>
      <Line 
        data={{
          labels: props.data?.map(data => data.time || data.year || data.date || data.year),
          datasets: [
            {
              label: props.id === "arctic" ? "extent" : props.id,
              data: props.data?.map(data => data.land || data.trend || data.extent),
              borderColor: "#7CBDE1",
              borderWidth: 1.5,
              pointBorderWidth: 0,
              pointBackgroundColor: "#00000000",
              fill: false,
            },
          ]
        }}
        options= {{
          scales: {
              yAxes:{
                  grid: {
                      color: '#FFFFFF60',
                  },
                  ticks:{
                      color: 'white',
                      fontSize: 12,
                  }
              },
              xAxes: {
                  grid: {
                      color: '#FFFFFF60',
                  },
                  ticks:{
                      color: 'white',
                      fontSize: 12,
                  }
              },
          }
      }}
      />
      
      {props.data.map((data, i, arr) => {
        return i === arr.length - 1 &&
        <h3 className={ChartCSS.todayValue} key={i}><span>Today's value:</span> {data.land || data.trend || data.extent}</h3>
      })}
    </div>
  )
}

export default LineChart