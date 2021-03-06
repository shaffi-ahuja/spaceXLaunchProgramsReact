import { Button } from "react-bootstrap";
import React from "react";

const Filter = (props) => {
  return (
    <Button
      onClick={(event) => {
        props.onChange(event.target.value);
      }}
      value={props.filterValue}
      className={`col-5 m-2 btn-sm ${
        props.isActive ? "btn-info text-white" : "btn-primary"
      }`}
    >
      {props.filterValue}
    </Button>
  );
};

export default Filter;
