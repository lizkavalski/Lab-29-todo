import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul>
        {this.props.items.map((value, index) => {
          return <li className="items" key={index}>{value} 
          <button onClick={() => this.props.action(index)}>Delete</button>
          </li>
        })}
      </ul>
    )
  }
  
}

export default Item;