import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import LaunchPrograms from "./components/LaunchPrograms";
import Filters from "./components/Filters";
import { useState } from "react";
import React from "react";

function App() {
  const [filterValues, setFilterValues] = useState({
    year: "",
    launchSuccess: "",
    landSuccess: "",
  });
  const filterHandler = (filters) => {
    console.log(filters);
    setFilterValues((prevFilters) => ({
      ...prevFilters,
      year: filters.year,
      launchSuccess: filters.launchSuccess,
      landSuccess: filters.landSuccess,
    }));
  };
  return (
    <Container fluid>
      <h4 className="row px-3">
        <strong>SpaceX Launch Programs</strong>
      </h4>
      <div className="row px-3 pb-3">
        <div className="col-2">
          <Filters onFilter={filterHandler} filterValues={filterValues} />
        </div>
        <div className="col-10">
          <LaunchPrograms filterValues={filterValues} />
        </div>
      </div>
      <div className="row p-3">
        <h5 className="text-center">Developed By: Shaffi Ahuja</h5>
      </div>
    </Container>
  );
}

export default App;
