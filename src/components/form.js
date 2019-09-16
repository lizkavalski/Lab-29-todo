import React from "react";
import Item from "../../src/components/itemAction.js"

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      items: this.props.items
    };
  }
  handler = event => {
    event.preventDefault();
    this.props.action(this.state.current);
    this.setState({ current: "" });
    event.target.reset();
  };

  capture = event => {
    let current = event.target.value;
    this.setState({ current });
  };

  render() {
    return (
      <form onSubmit={this.handler}>
        <input onChange={this.capture} /><button onClick={() => this.props.action(index)}>Add New Item</button>
      </form>
    );
  }
}

export default Form;