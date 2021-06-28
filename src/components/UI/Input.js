import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* spread operator ensures all key value pairs in input object are added as attributes to input element, ie type:'text' */}
      {/* makes element configurable from outside component */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
