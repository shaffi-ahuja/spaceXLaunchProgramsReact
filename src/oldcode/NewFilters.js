import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const NewFilters = (props) => {
  const [filterSelected, setFilterSelected] = useState({
    year: "",
    launchSuccess: "",
    landSuccess: "",
  });
  const yearArray = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020,
  ];
  const booleanArray = ["True", "False"];

  const onLaunchYearChange = (event) => {
    const value = event.target.textContent;
    setFilterSelected((prevFilter) => {
      if (prevFilter.year === value) return { ...prevFilter, year: "" };
      return { ...prevFilter, year: value };
    });
  };
  const onLaunchSuccessChange = (event) => {
    const value = event.target.textContent;
    setFilterSelected((prevFilter) => {
      if (prevFilter.launchSuccess === value)
        return { ...prevFilter, launchSuccess: "" };
      return { ...prevFilter, launchSuccess: value };
    });
  };
  const onLandSuccessChange = (event) => {
    const value = event.target.textContent;
    setFilterSelected((prevFilter) => {
      if (prevFilter.landSuccess === value)
        return { ...prevFilter, landSuccess: "" };
      return { ...prevFilter, landSuccess: value };
    });
  };
  useEffect(() => {
    // console.log(filterSelected);
    props.onFilter(filterSelected);
  }, [filterSelected]);

  return (
    <Card className="p-2">
      <div className="row justify-content-center">
        <h4>Filters</h4>
        <h6 className="text-center">Launching Year</h6>
        <div className="px-3 py-0">
          <hr className="my-2" />
        </div>
        {yearArray.map((year) => (
          <Button
            id={year}
            key={year}
            className="col-3 m-2 btn-success"
            onClick={onLaunchYearChange}
          >
            {year}
          </Button>
        ))}
        <h6 className="text-center">Successful Launch</h6>
        <div className="px-3 py-0">
          <hr className="my-2" />
        </div>
        {booleanArray.map((value) => (
          <Button
            className="col-3 m-2 btn-success"
            key={value}
            onClick={onLaunchSuccessChange}
          >
            {value}
          </Button>
        ))}
        <h6 className="text-center">Successful Landing</h6>
        <div className="px-3 py-0">
          <hr className="my-2" />
        </div>
        {booleanArray.map((value) => (
          <Button
            className="col-3 m-2 btn-success"
            key={value}
            onClick={onLandSuccessChange}
          >
            {value}
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default NewFilters;
