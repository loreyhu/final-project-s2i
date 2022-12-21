import React, { useState, useEffect } from "react";
import { Oval } from "react-loading-icons";
import { useParams } from "react-router-dom";

import ChartPageCSS from "./ChartPage.module.css";

// Component

import Header from "../../components/Header/Header";
import LineChart from "../../components/LineChart/LineChart";

// custom hook

import useAxios from "../../hooks/clientAPI/useAxios";

const ChartPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const { res, loading } = useAxios(id);

  useEffect(() => {
    if (res !== null) {
      setData(
        res.result || res.co2 || res.methane || res.nitrous || res.arcticData
      );
    }
    // eslint-disable-next-line
  }, [res]);

  return (
    <div className={ChartPageCSS.chartPage}>
      <Header id={id} />

      {loading ? (
        <div className={ChartPageCSS.loadingContainer}>
          <Oval stroke="#7CBDE1" strokeOpacity={1} />;
        </div>
      ) : (
        <div className={ChartPageCSS.chartContainer}>
          <LineChart id={id} data={data} key={id} />
        </div>
      )}
    </div>
  );
};

export default ChartPage;
