import React from "react";
import { Link } from "react-router-dom";

import ErrorCSS from "./Error.module.css";

const Error = () => {
  return (
    <div className={ErrorCSS.errorContainer}>
      <div className={ErrorCSS.error}>This page doesn't exist</div>
      <Link to="/">
        <button className={ErrorCSS.btn}>Back to Home</button>;
      </Link>
    </div>
  );
};

export default Error;
