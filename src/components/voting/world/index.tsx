import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "../../cards";

import "./index.scss";

class World extends Component<any, any> {
  render() {
    return (
      <div className="world-container">
        <Typography variant="h2" gutterBottom style={{ textAlign: "center" }}>
          Select Region
        </Typography>

        <Card />
      </div>
    );
  }
}

export default World;
