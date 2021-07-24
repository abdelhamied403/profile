import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Projects from "./pages/projects";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Home} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
