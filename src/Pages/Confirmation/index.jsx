import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <Fragment>
    <div className="container">
      <h3 className="" style={{ padding: 0, margin: 0 }}>
        Thank You!
      </h3>
      <small className="text-muted block" style={{ marginBottom: 20 }}>
        Thank you for your order, please review the details below.
      </small>
    </div>

    <div className="full-width-container">
      <div className="container nopad">Confirmation data goes here</div>
    </div>
  </Fragment>
);
