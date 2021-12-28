import React from "react";
import { Switch, Route } from "react-router-dom";

// import Dashboard from '../pages/Dashboard'
import Profile from "./pages/Profile/Profile";
import Bookshelf from "./pages/Bookshelf";
import Dashboard from "./pages/Dashboard";
import Book from "./pages/Book/Book";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/profile" component={Profile} />
      <Route path="/bookshelf" component={Bookshelf} />
      <Route path="/bookPage/:id" component={Book} />
    </Switch>
  );
};

export default Routes;
