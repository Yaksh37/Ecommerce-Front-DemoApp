import React from "react";

import styles from "./inputControl.module.css";

function InputControl(props) {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

export default InputControl;