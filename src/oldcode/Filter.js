import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const Filter = (props) => {
  const onClickHandler = (e) => {
    const value = e.target.textContent;
    props.onChange(value);
    //can't show toggle state in UI??????
    // debugger;
    // if (props.filterSelected === value) {
    //   e.preventDefault();
    //   document.getElementById(id).checked = false;
    // }
  };
  return (
    <ToggleButtonGroup type="radio" name={props.type}>
      {props.filterValues.map((filterValue) => (
        <ToggleButton
          className="col-3 m-2 btn-primary"
          id={props.type + filterValue}
          key={filterValue}
          value={filterValue}
          onClick={(event) => onClickHandler(event, props.type + filterValue)}
          //   onClick={props.onChange(filterValue, props.type + filterValue)}
        >
          {filterValue}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default Filter;
