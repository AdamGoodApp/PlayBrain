import React, { Component } from "react";
import Card from "../../cards";

import "./index.scss";

class World extends Component<any, any> {
  render() {
    return (
      <div className="world-container">
        <Card />
      </div>
    );
  }
}

export default World;
