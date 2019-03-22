import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const recordId = "5c8d583b31000069284c266d";
const recordIdNoRemovales = "5c8d5aa531000069284c2671";
const recordIdCustomFields = "5c8ec2b430000063281b100e";
const origin = "https%3A%2F%2Fwww.XXXXXX.com%2Fmyaccount";

export default () => (
  <div className="container">
    <h3>Review & Confirmation Demo</h3>
    <div>Click a button below to demo behaviors.</div>
    <br />
    <p className="thin text-primary">
      Note: This application pulls all data from an actual API, and uses this
      data to dynamically render a review page. The data in the API is seeded
      for this demo. All API calls, I have added a 2 second wait time to
      simulate network traffic and show loading progress. Click the header logo
      to restart demo.
    </p>

    <hr style={{ paddingBottom: 10 }} />

    <div style={{ fontWeight: "bold" }}>🏷️ Successful Read</div>
    <small className="text-muted block">
      We were redirected to the application, and the data was successfully
      loaded.
    </small>
    <NavLink
      className="btn btn-info btn-sm"
      to={`/review/${recordId}?origin=${origin}`}
    >
      Execute
    </NavLink>

    <br />
    <br />

    <div style={{ fontWeight: "bold" }}>
      🏷️ Successful Read - No Removed Packages
    </div>
    <small className="text-muted block">
      We were redirected to the application, and the data was successfully
      loaded, although we had no packages removed, only updated/added.
    </small>
    <NavLink
      className="btn btn-info btn-sm"
      to={`/review/${recordIdNoRemovales}?origin=${origin}`}
    >
      Execute
    </NavLink>

    <br />
    <br />

    <div style={{ fontWeight: "bold" }}>🏷️ Successful Read - Custom Fields</div>
    <small className="text-muted block">
      We were redirected to the application, and the data was successfully
      loaded. We also have custom fields to render.
    </small>
    <NavLink
      className="btn btn-info btn-sm"
      to={`/review/${recordIdCustomFields}?origin=${origin}`}
    >
      Execute
    </NavLink>

    <br />
    <br />

    <div style={{ fontWeight: "bold" }}>🏷️ Bad Data - Redirect</div>
    <small className="text-muted block">
      We were redirected to the application, but the data was not found,
      invalid, or contained errors.
    </small>
    <NavLink
      className="btn btn-info btn-sm"
      to={`/review/SOMEBADIDGOESHERE?origin=${origin}`}
    >
      Execute
    </NavLink>

    <br />
    <br />

    <div style={{ fontWeight: "bold" }}>🏷️ Bad Data - No Redirect Found</div>
    <small className="text-muted block">
      We were redirected to the application, and the data was not found,
      invalid, or contianed errors... BUT we dont know how we got to the
      application or where we came from.
    </small>
    <NavLink className="btn btn-info btn-sm" to="/review/SOMEINVALIDIDHERE">
      Execute
    </NavLink>
  </div>
);
