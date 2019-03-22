import React, { Fragment, Component, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FieldContainer from "../../Components/Field/FieldContainer";

const container = {
  background: "#f1f2f2",
  marginBottom: 3,
  padding: 10
};

export default ({ data, id }) => {
  return (
    <Fragment>
      <div className="container">
        <h3 className="" style={{ padding: 0, margin: 0 }}>
          Review Details
        </h3>
        <small className="text-muted block" style={{ marginBottom: 20 }}>
          Please review the information below before receiving your
          confirmation.
        </small>
      </div>

      <div className="full-width-container">
        <div className="container nopad">
          <div className="text-medium">
            Subscriber: {data.data.subscriberid}
          </div>
          <div className="text-medium">Name: {data.data.displayName}</div>
          <div className="text-medium">Member Since: {data.data.joinDate}</div>
        </div>

        <div className="container">
          <h6 className="text-success">
            <i className="fas fa-plus" /> Subscription
          </h6>
          {data.data.addItems.map((item, index) => {
            return (
              <div style={{ marginBottom: 5 }} key={index}>
                <span className="text-bold">{item.text}</span>
                <span className="float-right">$ {item.amount}</span>{" "}
                <span className="text-muted text-small block">
                  {item.subtext}
                </span>
              </div>
            );
          })}
        </div>
        {data.data.removeItems && data.data.removeItems.length > 0 && (
          <div className="container">
            <h6 className="text-danger">
              <i className="fas fa-minus" /> Removed
            </h6>
            {data.data.removeItems.map((item, index) => {
              return (
                <div style={{ marginBottom: 5 }} key={index}>
                  <span className="text-bold">{item.text}</span>
                  <span className="float-right text-danger">
                    $ {item.amount}
                  </span>{" "}
                  <span className="text-muted text-small block">
                    {item.subtext}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        <div className="container">
          <hr />
          {data.data.totals.map((lineItem, index) => {
            if (lineItem.type == "item") {
              return (
                <div key={index}>
                  {lineItem.text}
                  <span className="float-right">$ {lineItem.amount}</span>
                </div>
              );
            }
          })}
          {data.data.totals.map((lineItem, index) => {
            if (lineItem.type != "item" && lineItem.type != "total") {
              return (
                <div key={index}>
                  {lineItem.text}
                  <span className="float-right">$ {lineItem.amount}</span>
                </div>
              );
            }
          })}
          {data.data.totals.map((lineItem, index) => {
            if (lineItem.type == "total") {
              return (
                <div className="text-bold" key={index}>
                  {lineItem.text}
                  <span className="float-right">$ {lineItem.amount}</span>
                </div>
              );
            }
          })}
        </div>

        <div className="container">
          <FieldContainer data={data} />
        </div>

        <div className="container text-right">
          <button
            className="btn btn-secondary"
            onClick={() => {
              alert(`Redirect: ${data.origin}`);
            }}
          >
            CANCEL
          </button>{" "}
          <NavLink to={`${id}/confirmation`} className="btn btn-primary">
            SUBMIT ORDER
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};
