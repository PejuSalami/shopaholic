import React from "react";
import "./css/App.css";
// import Home from "./pages/Home";
// import Header from "./pages/Header";
// import Checkout from "./Checkout";
import CheckoutPg from "./pages/CheckoutPg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Home /> */}
      <Router>
        <Switch>
          <Route exact path="/checkout" component={CheckoutPg} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
