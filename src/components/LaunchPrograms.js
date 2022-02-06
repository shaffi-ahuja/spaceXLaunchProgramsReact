import { useEffect, useState, useCallback } from "react";
import LaunchProgram from "./LaunchProgram";

const LaunchPrograms = (props) => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  const filterValues = props.filterValues;

  let url = "https://api.spaceXdata.com/v3/launches?limit=100";
  let query = "";

  if (filterValues.year !== "") query += `&launch_year=${filterValues.year}`;
  if (filterValues.launchSuccess !== "")
    query += `&launch_success=${
      filterValues.launchSuccess === "True" ? true : false
    }`;
  if (filterValues.landSuccess !== "" && filterValues.landSuccess !== "null")
    query += `&land_success=${
      filterValues.landSuccess === "True" ? true : false
    }`;

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    window.history.replaceState("", "", query);
    let recievedData = [];
    try {
      const response = await fetch(url + query);
      recievedData = await response.json();
      setHasError(null);
    } catch (error) {
      setHasError("Failed to fetch data. Try Again");
      console.log("Error " + error);
    }
    const loadedData = recievedData.map((data) => {
      return {
        mission_name: data.mission_name,
        mission_img: data.links.mission_patch,
        flight_num: data.flight_number,
        mission_id: data.mission_id,
        launch_year: data.launch_year,
        launch_success: data.launch_success,
        launch_landing: data.rocket.first_stage.cores[0].land_success,
      };
    });
    if (loadedData.length === 0)
      setHasError("No Data available for current year / status selected.");
    // console.log(recievedData);
    setDetails(loadedData);
    setIsLoading(false);
    // console.log(details);
  }, [url, query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log(filterValues);

  return (
    <div className="row">
      {isLoading && <h4 className="text-center"> Loading.... </h4>}
      {hasError && !isLoading && <h4 className="text-center"> {hasError} </h4>}
      {!isLoading &&
        details.map((data) => (
          <LaunchProgram details={data} key={data.flight_num} />
        ))}
    </div>
  );
};

export default LaunchPrograms;
