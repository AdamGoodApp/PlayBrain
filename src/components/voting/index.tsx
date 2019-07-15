import React, { Component } from "react";
import { connect } from "react-redux";
import World from "./world";

import "./index.scss";

class Voting extends Component<any, any> {
  render() {
    return <World />;
  }
}

export default connect((state: any) => {
  const {
    app: { user }
  } = state;

  return {
    user
  };
})(Voting);
