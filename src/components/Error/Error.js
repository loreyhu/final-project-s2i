import React from "react";
import { Link } from "react-router-dom";

import ErrorCSS from "./Error.module.css";

const Error = ({ err }) => {
  return (
    <div className={ErrorCSS.errorContainer}>
      <div className={ErrorCSS.error}>{err}</div>
      <Link to="/">
        <button className={ErrorCSS.btn}>Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
