import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";

const Routes: React.FC = () => {
  return (
      <BrowserRouter>
      <Switch>
        <Route path= "/" exact component={Home}/>
        <Route path= "/contact" exact component={Contact}/>
      </Switch>
      </BrowserRouter>
  );
}

export default Routes;