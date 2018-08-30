import React, { Component } from "react";

export default class HideReveal extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleHide}>Hide text</button>
        <button onClick={this.props.handleReveal}>Reveal text</button>
      </div>
    );
  }
}
