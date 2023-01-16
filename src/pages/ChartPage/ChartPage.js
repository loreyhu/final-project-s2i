import React, { Suspense } from "react";
import { Oval } from "react-loading-icons";
import { useLoaderData, Await, defer } from "react-router-dom";

import ChartPageCSS from "./ChartPage.module.css";

// Components

import Header from "../../components/Header/Header";
import LineChart from "../../components/LineChart/LineChart";

// api call

import getData from "../../clientAPI/getData";

const ChartPage = () => {
  const { id, res } = useLoaderData();

  return (
    <div className={ChartPageCSS.chartPage}>
      <Header id={id} />

      <div className={ChartPageCSS.chartContainer}>
        <Suspense fallback={<Oval stroke="#7CBDE1" strokeOpacity={1} />}>
          <Await
            resolve={res}
            errorElement={
              <h2 className={ChartPageCSS.error}>Something went wrong</h2>
            }
          >
            {(res) => (
              <LineChart
                id={id}
                data={
                  res.data.result ||
                  res.data.co2 ||
                  res.data.methane ||
                  res.data.nitrous ||
                  res.data.arcticData
                }
                key={id}
              />
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export const loader = async ({ params }) => {
  return defer({ id: params.id, res: getData(params.id) });
};

export default ChartPage;
