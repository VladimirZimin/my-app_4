import React from "react";
import { ImSpinner } from "react-icons/im";
import PokemonDataView from "./PokemonDataView";
import pendingImage from "./pending.jpg";
import styled from "styled-components";

const Spinner = styled(ImSpinner)`
  margin-right: 10px;
  animation: icon-spin 2s infinite linear;

  @keyframes icon-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;

const styles = {
  spinner: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
    fontSize: 24,
  },
};

const PokemonPendingView = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        "official-artwork": {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div style={styles.spinner}>
        <Spinner size="32" />
        Загружаем...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
};

export default PokemonPendingView;
