import React, { Component } from 'react';
import './Main.css';

import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newItem: '',
    items: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { items } = this.state;
    let { newItem } = this.state;
    newItem = newItem.trim();

    if (items.indexOf(newItem) !== -1) return;

    const newItems = [...items];
    this.setState({
      items: [...newItems, newItem],
    });
  };

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value,
    });
  };

  render() {
    const { newItem, items } = this.state;
    return (
      <div className="main">
        <h1>CheckList</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <input onChange={this.handleChange} type="text" value={newItem} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="items">
          {items.map((item) => (
            <li key={item}>
              {item}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
