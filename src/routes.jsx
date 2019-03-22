import React from "react";
import { Switch, Route } from "react-router";

import NotFound from "./Components/Common/NotFound";
import Home from "./Pages/Home";
import Confirmation from "./Pages/Confirmation";
import Review from "./Pages/Review";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/review/:id" exact component={Review} />
    <Route path="/review/:id/confirmation" exact component={Confirmation} />

    {/* ELSE */}
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
