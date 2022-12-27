import React from "react";

export default function AAAlert({ type, text }) {
  return <div className={`alert alert-${type}`}>{text}</div>;
}
