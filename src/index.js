import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./components/button.jsx";
import Text from "./components/text.jsx";
import HideReveal from "./components/hide-reveale.jsx";

class Content extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleHideText = this.handleHideText.bind(this);
    this.handleRevealText = this.handleRevealText.bind(this);

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

  handleHideText() {
    $("#text").fadeOut("slow");
  }

  handleRevealText() {
    $("#text").fadeIn("slow");
  }

  render() {
    return (
      <React.Fragment>
        <Button handler={this.handleClick} />
        <Text counter={this.state.counter} />
        <HideReveal
          handleHide={this.handleHideText}
          handleReveal={this.handleRevealText}
        />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Content />, rootElement);
