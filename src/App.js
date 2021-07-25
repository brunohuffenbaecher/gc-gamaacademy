import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Clients from "./pages/Clients/Clients";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { loadData } from "./startData";

function App() {
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/clients">
            <Clients />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
