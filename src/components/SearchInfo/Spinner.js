import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Spinner = () => {
  return (
    <RotatingLines
      strokeColor="#ed6b5a"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  );
};

export default Spinner;
