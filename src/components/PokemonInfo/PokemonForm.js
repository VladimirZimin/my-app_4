import React, { Component } from "react";
import { toast } from "react-toastify";
import { ImSearch } from "react-icons/im";

const styles = { form: { marginBottom: 20 } };

export default class PokemonForm extends Component {
  state = {
    pokemonName: "",
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    if (this.state.pokemonName.trim() === "") {
      toast.error("Введите имя покемона.", { theme: "dark" });
      return;
    }

    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: "" });
  };

  handleNameChange = (evt) => {
    this.setState({ pokemonName: evt.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <input
            type="text"
            name="pokemonName"
            value={this.state.pokemonName}
            onChange={this.handleNameChange}
          />
          <button type="submit">
            <ImSearch style={{ marginRight: 8 }} />
            Найти
          </button>
        </form>
      </div>
    );
  }
}
