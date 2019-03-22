import React, { Fragment } from "react";

// Note: This is a hack for the purpose of POC.
// This can be dynamically accomplished using...
/*
    render() {
        const TagName = this.props.tag;
        return <TagName />
    }
*/

function renderItem(field) {
  switch (field.component) {
    case "img":
      return <img src={field.defaultValue} style={{ display: "none" }} />;
    case "NewSubscriptionItem":
      return (
        <div className="item-row">
          <i className="fas fa-plus-circle text-success" /> {field.defaultValue}
        </div>
      );
    case "RemovedSubscriptionItem":
      return (
        <div className="item-row">
          <i className="fas fa-minus-circle text-danger" /> {field.defaultValue}
        </div>
      );
    case "DateMonthShortYear":
    case "ShortInput":
      return (
        <Fragment>
          <div className="thin text-muted text-medium">{field.label}</div>
          <input
            className="form-control"
            defaultValue={field.defaultValue}
            style={{ width: 80 }}
          />
        </Fragment>
      );
    default:
      return (
        <Fragment>
          <div className="thin text-muted text-medium">{field.label}</div>
          <input className="form-control" defaultValue={field.defaultValue} />
        </Fragment>
      );
  }
}

export default ({ field }) => renderItem(field);
