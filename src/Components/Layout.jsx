import React, { Fragment } from "react";
import Navigation from "./Navigation";

export default ({ children }) => (
  <Fragment>
    <Navigation />
    <div>{children}</div>
    <div className="container text-center thin text-muted text-small">
      <span>
        Visit our <a href="#">Help Center</a> for more awnsers or{" "}
        <a href="">Contact Us</a>
      </span>{" "}
      <span>between 8AM and 1AM (ET).</span>
    </div>
  </Fragment>
);
