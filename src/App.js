import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShopingList from './ShopingList.js';
import Items from './Items.js';
import DeleteBtn from './DeleteBtn.js';

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<ShopingList  addItem = {this.addItem} inputValue = {this.state.value} statusChange = {this.handleChange} btnDisable = {this.inputIsEmpty()}/>
		<DeleteBtn  deleteLstItem = {this.deleteLastItem} dsbl = {this.noItemsFound()}/>
		<Items state = {this.state}/>
      </div>
    );
  }
}

export default App;
