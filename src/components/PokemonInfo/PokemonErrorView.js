import React from "react";
import errorImg from "./error.jpeg";

const PokemonErrorView = ({ message }) => {
  return (
    <div role="alert">
      <img src={errorImg} width="240" alt="sadcat" />
      <p>{message}</p>
    </div>
  );
};

export default PokemonErrorView;
