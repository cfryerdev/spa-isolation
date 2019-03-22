import React from "react";
import FieldSection from "./FieldSection";

export default ({ data }) =>
  data.metadata.sections
    ? data.metadata.sections.map((section, index) => {
        return <FieldSection key={index} section={section} />;
      })
    : null;
