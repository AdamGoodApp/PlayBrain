import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Authorization from "./authorization";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Authorization} />
      </div>
    </Router>
  );
};

export default App;
