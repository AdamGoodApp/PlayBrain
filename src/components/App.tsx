import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "typeface-roboto";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <header>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </header>
      <div>{/* <Route path="/" exact component={} /> */}</div>
    </Router>
  );
};

export default App;
