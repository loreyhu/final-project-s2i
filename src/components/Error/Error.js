import React from "react";
import { Link } from "react-router-dom";

import ErrorCSS from "./Error.module.css";

//atom

import ErrorButton from "../atoms/ErrorButton/ErrorButton";

const Error = () => {
  return (
    <div className={ErrorCSS.errorContainer}>
      <div className={ErrorCSS.error}>This page doesn't exist</div>
      <Link to="/">
        <ErrorButton />
      </Link>
    </div>
  );
};

export default Error;
