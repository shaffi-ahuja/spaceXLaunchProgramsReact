import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Filter from "./Filter";

const Filters = (props) => {
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

  const onLaunchYearChange = (year) => {
    setFilterSelected((prevFilter) => ({ ...prevFilter, year }));
  };
  const onLaunchSuccessChange = (launchSuccess) => {
    setFilterSelected((prevFilter) => ({ ...prevFilter, launchSuccess }));
  };
  const onLandSuccessChange = (landSuccess) => {
    setFilterSelected((prevFilter) => ({ ...prevFilter, landSuccess }));
  };
  useEffect(() => {
    console.log(filterSelected);
  }, [filterSelected]);

  return (
    <Card className="p-2">
      <div className="row">
        <h4>Filters</h4>
        <h6 className="text-center">Launching Year</h6>
        <hr />
        {yearArray.map((year) => (
          <Filter filterValue={year} key={year} onChange={onLaunchYearChange} />
        ))}
        <h6 className="text-center">Successful Launch</h6>
        <hr />
        {booleanArray.map((value) => (
          <Filter
            filterValue={value}
            key={value}
            onChange={onLaunchSuccessChange}
          />
        ))}
        <h6 className="text-center">Successful Landing</h6>
        <hr />
        {booleanArray.map((value) => (
          <Filter
            filterValue={value}
            key={value}
            onChange={onLandSuccessChange}
          />
        ))}
      </div>
    </Card>
  );
};

export default Filters;
