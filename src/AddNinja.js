import React, { Component } from 'react';

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  }
  handleCahnge = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state);
  }
  render() {
    return (
      <div className="addNinja">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' onChange={this.handleCahnge}/>
          <label htmlFor='age'>Age:</label>
          <input type='text' id='age' onChange={this.handleCahnge}/>
          <label htmlFor='Belt'>Belt:</label>
          <input type='text' id='belt' onChange={this.handleCahnge}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;
