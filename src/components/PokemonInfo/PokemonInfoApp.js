// import Spinner from "components/Spinner";
import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import PokemonForm from "./PokemonForm";
import "react-toastify/dist/ReactToastify.css";
import PokemonInfo from "./PokemonInfo";

export default class PokemonInfoApp extends Component {
  state = {
    pokemonName: "",
  };

  handleFormSubmit = (pokemonName) => {
    console.log(pokemonName);

    this.setState({ pokemonName });
  };

  render() {
    const { pokemonName } = this.state;

    return (
      <>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={pokemonName} />

        <ToastContainer position="top-right" autoClose={3000} />
      </>
    );
  }
}

/**
state = {
    pokemon: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.json())
      .then((pokemon) => this.setState({ pokemon: pokemon }))
      .finally(() => this.setState({ loading: false }));
  }


   const { pokemon, loading } = this.state;


 {loading && <Spinner />}
        {pokemon && <div>{pokemon.name}</div>}
 */
