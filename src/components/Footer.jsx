import React, { Component } from "react";

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      data: null,
      show: true,
    };
  }

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md h-[80px]">
        <div className="container text-white">
          <h2>Footer {this.state.count}</h2>
          <button onClick={this.inc}>increment</button>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
            disabled={this.state.count === 0}
          >
            decrement
          </button>
          <button
            onClick={() => this.setState({ count: (this.state.count = 0) })}
          >
            reset
          </button>
          <button onClick={() => this.setState.show(this.render)}>hide</button>
        </div>
      </div>
    );
  }
}

// class Animal {
//     eat(){}
// }

// class WildAnimal extends Animal{

// }

// const rabbit = new WildAnimal()

// console.log(rabbit.eat);
