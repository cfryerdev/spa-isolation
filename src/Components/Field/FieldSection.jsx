import React, { Fragment } from "react";
import FieldDynamic from "./FieldDynamic";

export default ({ section }) => {
  return (
    <Fragment>
      <div className="thin" style={{ marginBottom: 5 }}>
        {section.name}
      </div>
      <div style={{ marginBottom: 10 }}>
        {section.fields &&
          section.fields.map((field, index) => {
            return <FieldDynamic key={index} field={field} />;
          })}
      </div>
    </Fragment>
  );
};
