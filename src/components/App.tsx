import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Authorization from "./authorization";
import Voting from "./voting";
import World from "./voting/world";
import Results from "./voting/results";

import "typeface-roboto";
import "./App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <header>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </header>
      <Container className="app-container" maxWidth="xl">
        <Route path="/" exact component={Authorization} />
        <Route path="/voting" exact component={Voting} />
        <Route path="/world" exact component={World} />
        <Route path="/results" exact component={Results} />
      </Container>
    </Router>
  );
};

export default App;
