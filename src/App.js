import React, { Component } from 'react';
import Ninja from './Ninja.js';
import AddNinja from './AddNinja.js';

class App extends Component {
  state = {
    ninjas: [
     {name: 'Ryu', age: 30, belt: 'black', id: 1},
     {name: 'Yoshi', age: 20, belt: 'green', id: 2},
     {name: 'juan', age: 15, belt: 'white', id: 3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }
  deleteNinja = (id) => {
    console.log('id', id);
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome :)</h1>
        <hr/>
        <Ninja deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <hr/>
        <AddNinja addNinja={this.addNinja} />
      </div> 
    );
  }
}

export default App;
