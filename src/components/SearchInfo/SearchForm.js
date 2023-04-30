import React, { Component } from "react";

export default class SearchForm extends Component {
  state = {
    inputValue: "",
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  handleChange = (evt) => {
    this.setState({ inputValue: evt.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter search query
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}
