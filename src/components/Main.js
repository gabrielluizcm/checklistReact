import React, { Component } from 'react';
import './Main.css';

import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newItem: '',
    items: [],
    index: -1,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { items, index } = this.state;
    let { newItem } = this.state;
    newItem = newItem.trim();

    if (items.indexOf(newItem) !== -1) return;

    const newItems = [...items];

    if (index === -1) {
      this.setState({
        newItem: '',
        items: [...newItems, newItem],
      });
    } else {
      newItems[index] = newItem;
      this.setState({
        newItem: '',
        items: [...newItems],
        index: -1,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { items } = this.state;

    this.setState({
      index,
      newItem: items[index],
    });
  };

  handleDelete = (e, index) => {
    const { items } = this.state;
    const newItems = [...items];
    newItems.splice(index, 1);

    this.setState({
      items: [...newItems],
    });
  };

  render() {
    const { newItem, items, index } = this.state;
    return (
      <div className="main">
        <h1>CheckList</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <input onChange={this.handleChange} type="text" value={newItem} />
          <button type="submit">
            {index === -1 ? <FaPlus /> : <FaEdit />}
          </button>
        </form>

        <ul className="items">
          {items.map((item, itemIndex) => (
            <li key={item}>
              {item}
              <span>
                <FaEdit onClick={(e) => this.handleEdit(e, itemIndex)} className="edit" />
                <FaWindowClose onClick={(e) => this.handleDelete(e, itemIndex)} className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
