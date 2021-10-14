import React, { useState } from "react";
import PropTypes from "prop-types";

ToDoFrom.propTypes = {
  onSubmit: PropTypes.func,
};
ToDoFrom.defaultProps = {
  onSubmit: null,
};

function ToDoFrom(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");
  function handleValueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    //prevent relaoding browser
    //e.preventDefault();
    if (!onSubmit) return;

    const formValue = {
      title: value,
    };
    onSubmit(formValue);
    // reset form
    setValue("");
  }
  return (
    <from onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange} />
    </from>
  );
}

export default ToDoFrom;
