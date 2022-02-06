import { Button } from "react-bootstrap";

const Filter = (props) => {
  return (
    <Button
      onClick={(event) => {
        props.onChange(event.target.value);
      }}
      value={props.filterValue}
      className={`col-3 m-2 ${
        props.isActive ? "btn-info text-white" : "btn-primary"
      }`}
    >
      {props.filterValue}
    </Button>
  );
};

export default Filter;
