import React, { Component } from "react";
import "./App.css";
import Jsondata from "./JSON FILE/File.json";
import CardList from "./Components/Card-List/CardList";
import SearchBox from "./Components/SearchBox/SearchBox";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: Jsondata,
      searchField: "",
    };
  }

  HandleChange = (e) => this.setState({ searchField: e.target.value })

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="heading">Search Monsters</h1>
        <SearchBox
          PlaceHolder="search monsters..."
          HandleChange={this.HandleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
