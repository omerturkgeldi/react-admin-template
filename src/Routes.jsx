import React from "react";
import { Switch, Route } from "react-router-dom";

// import Dashboard from '../pages/Dashboard'
import Profile from "./pages/Profile";
import Bookshelf from "./pages/Bookshelf";
import Dashboard from "./pages/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/profile" component={Profile} />
      <Route path="/bookshelf" component={Bookshelf} />
    </Switch>
  );
};

export default Routes;
