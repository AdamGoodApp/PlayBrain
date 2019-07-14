import React, { Component } from "react";
import { connect } from "react-redux";
import World from "./world";
import Results from "./results";

import "./index.scss";

class Voting extends Component<any, any> {
  redirect = (userType: string) => {
    if (userType === "ADMIN") {
      return <World />;
    } else if (userType === "USER") {
      return <World />;
    } else {
      return <Results />;
    }
  };

  render() {
    const { user } = this.props;

    return this.redirect(user.type);
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
