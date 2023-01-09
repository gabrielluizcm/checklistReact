import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
  state = {
    newItem: '',
  };

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value,
    });
  };

  render() {
    return (
      <div className="main">
        <h1>CheckList</h1>

        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Create item</button>
        </form>
      </div>
    );
  }
}
