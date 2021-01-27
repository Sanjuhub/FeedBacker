import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <div style={{ color: "red" }}>
        <input {...input} />
        {touched && error}
      </div>
    </div>
  );
};
