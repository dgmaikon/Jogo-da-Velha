import React from "react";
import "./styles.css";

const Label = ({ content }) => (
  <label className="label" htmlFor="event">
    {content}
  </label>
);

export default Label;
