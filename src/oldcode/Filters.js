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

  const onLaunchYearChange = (value) => {
    setFilterSelected((prevFilter) => {
      if (prevFilter.year === value) return { ...prevFilter, year: "" };
      return { ...prevFilter, year: value };
    });
  };
  const onLaunchSuccessChange = (value) => {
    setFilterSelected((prevFilter) => {
      if (prevFilter.launchSuccess === value)
        return { ...prevFilter, launchSuccess: "" };
      return { ...prevFilter, launchSuccess: value };
    });
  };
  const onLandSuccessChange = (value) => {
    setFilterSelected((prevFilter) => {
      if (prevFilter.landSuccess === value)
        return { ...prevFilter, landSuccess: "" };
      return { ...prevFilter, landSuccess: value };
    });
  };
  useEffect(() => {
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
        <Filter
          onChange={onLaunchYearChange}
          type="year"
          filterValues={yearArray}
          filterSelected={filterSelected.year}
        />
        <h6 className="text-center">Successful Launch</h6>
        <div className="px-3 py-0">
          <hr className="my-2" />
        </div>
        <Filter
          onChange={onLaunchSuccessChange}
          type="launch_success"
          filterValues={booleanArray}
          filterSelected={filterSelected.launchSuccess}
        />
        <h6 className="text-center">Successful Landing</h6>
        <div className="px-3 py-0">
          <hr className="my-2" />
        </div>
        <Filter
          onChange={onLandSuccessChange}
          type="land_success"
          filterValues={booleanArray}
          filterSelected={filterSelected.landSuccess}
        />
      </div>
    </Card>
  );
};

export default Filters;
