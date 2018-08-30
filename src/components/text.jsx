import React, { Component } from "react";

export default class Text extends Component {
  render() {
    return (
      <div id="text">
        Button was clicked already {this.props.counter} times!
      </div>
    );
  }
}
