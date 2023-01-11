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
      checks: [],
      index: -1,
    };
  }

  componentDidMount() {
    const items = JSON.parse(localStorage.getItem('items'));
    const checks = JSON.parse(localStorage.getItem('checks'));

    if (!items || !checks) return;

    this.setState({
      items,
      checks,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { items, checks } = this.state;

    if (items === prevState.items && checks === prevState.checks) return;

    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('checks', JSON.stringify(checks));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { items, checks, index } = this.state;
    let { newItem } = this.state;
    newItem = newItem.trim();

    if (items.indexOf(newItem) !== -1) return;

    const newItems = [...items];
    const newChecks = [...checks];

    if (index === -1) {
      this.setState({
        newItem: '',
        items: [...newItems, newItem],
        checks: [...newChecks, false],
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
    const { items, checks } = this.state;
    const newItems = [...items];
    const newChecks = [...checks];

    newItems.splice(index, 1);
    newChecks.splice(index, 1);

    this.setState({
      items: [...newItems],
      checks: [...newChecks],
    });
  };

  handleCheck = (e, index) => {
    const { checks } = this.state;
    const newChecks = [...checks];
    newChecks[index] = !newChecks[index];

    this.setState({
      checks: [...newChecks],
    });
  };

  render() {
    const {
      newItem, items, index, checks,
    } = this.state;
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

          <Items
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            handleCheck={this.handleCheck}
            items={items}
            checks={checks}
          />
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
