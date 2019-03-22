import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand">
          <NavLink to="/" className="brand">
            <span style={{ color: "#fb8b01" }}>Ÿ</span> Flung
          </NavLink>
        </span>
      </nav>
    );
  }
}
