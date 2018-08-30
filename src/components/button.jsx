import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button onClick={this.props.handler}>
        I was clicked {this.props.counter} times
      </button>
    );
  }
}
