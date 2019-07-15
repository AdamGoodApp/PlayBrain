import React, { Component } from "react";
import { regions } from "../../../lib/data";
import Card from "../../cards";
import Player from "../../cards/player";

import "./index.scss";

interface State {
  selectedRegion: String;
}

class World extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      selectedRegion: ""
    };
  }

  setRegion = (region: string) => {
    this.setState({ selectedRegion: region });
  };

  render() {
    const { selectedRegion } = this.state;

    return (
      <div className="world-container">
        <Card regions={regions} setRegion={this.setRegion} />

        {selectedRegion && <Player region={selectedRegion} />}
      </div>
    );
  }
}

export default World;
