import React, { Component } from "react";

import "./App.css";
import contacts from "./contacts.json";
import Celebrity from "./Celebrity";
import MyButton from "./MyButton";

class App extends Component {
  state = {
    contacts2: contacts.slice(0, 5),
    sort: contacts
  };

  handleDelete = infos => {
    const filter = this.state.contacts2.filter(
      celebrity => celebrity.name != infos.name
    );
    this.setState({ contacts2: filter });
  };

  handleClick = evt => {
    var random = Math.floor(Math.random() * Math.floor(contacts.length));
    this.state.contacts2.push(contacts[random]);
    this.setState({ contacts2: this.state.contacts2, state: contacts });
  };
  sortbyPop = evt => {
    this.state.contacts2.sort(function(a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({ sort: this.state.contacts2.sort });
  };
  sortbyName = evt => {
    this.state.contacts2.sort(function(a, b) {
      if (b.name.split(" ")[1] < a.name.split(" ")[1]) {
        return 1;
      }
      if (b.name.split(" ")[1] > a.name.split(" ")[1]) {
        return -1;
      }
      return 0;
    });
    this.setState({ sort: this.state.contacts2.sort });
  };

  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <MyButton onclick={this.handleClick} text={"Get a random Contact"} />
        <MyButton onclick={this.sortbyPop} text={"Sort by Popularity"} />
        <MyButton onclick={this.sortbyName} text={"Sort by Name"} />
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.state.contacts2.map((contact, i) => (
            <Celebrity
              key={i}
              infos={contact}
              handleDelete={this.handleDelete}
            />
          ))}
        </table>
      </div>
    );
  }
}

export default App;
