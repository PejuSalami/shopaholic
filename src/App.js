import React from "react";
import "./css/App.css";
import Home from "./pages/Home";
// import Header from "./pages/Header";
// import Checkout from "./Checkout";
import Checkout from "./pages/Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
