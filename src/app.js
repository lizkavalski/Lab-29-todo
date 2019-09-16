import React from "react";
import Header from "../src/components/header.js";
import Form from "../src/components/form.js";
import Item from "../src/components/itemAction"



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      items: [" "]
    };
  }
  addIt = string => {
    this.setState({ items: [...this.state.items, string] });
  };

  deleteIt = idx => {
    this.state.items.splice(idx,1)
    this.setState({ items: this.state.items})
  };

  render (){
    return(
      <>
      <Header title = "The To-do List of Doom"/>
      <Form action={this.addIt} items={this.state.items} />
      <Item action={this.deleteIt} items={this.state.items} />
      </>
    )
  }
}

  


export default App;