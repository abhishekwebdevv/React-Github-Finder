import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <div className="text-center">
        <img
          src={spinner}
          alt="Loading..."
          style={{ height: "auto", width: "auto" }}
        />
      </div>
    </Fragment>
  );
};

export default Spinner;
