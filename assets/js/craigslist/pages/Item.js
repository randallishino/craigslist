import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Item extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="item">
        <div className="container">
          City: {match.params.city}
          Category: {match.params.category}
          this item is {match.params.item}
        </div>
      </div>
    );
  }
}
