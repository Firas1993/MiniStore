import React from "react";

import Categories from "./pages/Categories";
import Panier from "./pages/Panier";
import Prod from "./pages/Prod";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Categories />
          </Route>
          <Route path="/panier">
            <Panier />
          </Route>
          <Route path="/prod/:id">
            <Prod />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
