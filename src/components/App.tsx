import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Authorization from "./authorization";
import Container from "@material-ui/core/Container";

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
      </Container>
    </Router>
  );
};

export default App;
