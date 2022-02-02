import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import NewFilters from "./components/NewFilters";
import LaunchPrograms from "./components/LaunchPrograms";
import { useState } from "react";

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
      <h4 className="row px-3 pt-3">
        <strong>SpaceX Launch Programs</strong>
      </h4>
      <div className="row p-3">
        <div className="col-3">
          <NewFilters onFilter={filterHandler} />
        </div>
        <div className="col-9">
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
