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
          <Route exact path="/" component={Home} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/products">
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
