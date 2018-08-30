import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./components/button.jsx";

class Content extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      counter: 0
    };
  }

  handleClick() {
    this.setState(
      {
        counter: this.state.counter + 1
      },
      () => console.log(this.state.counter)
    );
  }

  render() {
    return <Button handler={this.handleClick} counter={this.state.counter} />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Content />, rootElement);
