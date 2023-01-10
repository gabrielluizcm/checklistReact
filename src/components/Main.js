import React, { Component } from 'react';
import Form from './Form';
import Items from './Items';
import './Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
      items: [],
      index: -1,
    };
  }

  componentDidMount() {
    const items = JSON.parse(localStorage.getItem('items'));

    if (!items) return;

    this.setState({
      items,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { items } = this.state;

    if (items === prevState.items) return;

    localStorage.setItem('items', JSON.stringify(items));
  }

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
      <>
        <div className="main">
          <h1>CheckList</h1>

          <Form
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            newItem={newItem}
            index={index}
          />

          <Items handleEdit={this.handleEdit} handleDelete={this.handleDelete} items={items} />
        </div>

        <footer>
          Developed by
          {' '}
          <a href="https://github.com/gabrielluizcm">Gabriel Luiz</a>
        </footer>
      </>
    );
  }
}
