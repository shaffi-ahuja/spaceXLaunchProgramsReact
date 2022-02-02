import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Filter = (props) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [filterValue, setFilterValue] = useState(false);

  const onClickHandler = (event) => {
    setButtonClicked((buttonClicked) => !buttonClicked);
    setFilterValue(event.target.textContent);
  };

  useEffect(() => {
    if (buttonClicked) props.onChange(filterValue);
    else props.onChange("");
  }, [buttonClicked]);

  return (
    <Button
      id={props.filterValue + "btn"}
      className={`col-5 m-2 ${buttonClicked ? "btn-info" : "btn-primary"}`}
      onClick={onClickHandler}
    >
      {props.filterValue}
    </Button>
  );
};

export default Filter;
