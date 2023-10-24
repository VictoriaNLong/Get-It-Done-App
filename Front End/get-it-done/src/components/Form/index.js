import React from "react";
import "./styles.css";

function Form() {
  return (
    <div className="form-container">
      <input className="form-input" type="text" value="" role="input" />
      <button className="form-button" type="submit">
        Add
      </button>
    </div>
  );
}

export default Form;
