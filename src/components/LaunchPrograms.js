import { Component } from "react";
import LaunchProgram from "./LaunchProgram";
import React from "react";

class LaunchPrograms extends Component {
  constructor(props) {
    super(props);
    this.state = { details: [], isLoading: true, hasError: null };
  }

  async fetchData() {
    const url = "https://api.spaceXdata.com/v3/launches?limit=100";
    let query = "";
    if (this.props.filterValues.year !== "")
      query += `&launch_year=${this.props.filterValues.year}`;
    if (this.props.filterValues.launchSuccess !== "")
      query += `&launch_success=${
        this.props.filterValues.launchSuccess === "True" ? true : false
      }`;
    if (this.props.filterValues.landSuccess !== "")
      query += `&land_success=${
        this.props.filterValues.landSuccess === "True" ? true : false
      }`;

    this.setState({ isLoading: true });
    // window.history.replaceState("", "", query);
    let recievedData = [];

    try {
      const response = await fetch(url + query);
      recievedData = await response.json();
      this.setState({ hasError: null });
    } catch (error) {
      this.setState({ hasError: "Failed to fetch data. Try Again" });
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
      this.setState({
        hasError: "No Data available for current year / status selected.",
      });
    this.setState({ details: loadedData });
    this.setState({ isLoading: false });
  }

  componentDidMount() {
    this.fetchData();
  }
  isEqual(object1, object2) {
    for (let key of Object.keys(object1)) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    if (!this.isEqual(prevProps.filterValues, this.props.filterValues)) {
      this.fetchData();
    }
  }

  render() {
    return (
      <div className="row">
        {this.state.isLoading && <h4 className="text-center"> Loading.... </h4>}
        {this.state.hasError && !this.state.isLoading && (
          <h4 className="text-center"> {this.state.hasError} </h4>
        )}
        {!this.state.isLoading &&
          this.state.details.map((data) => (
            <LaunchProgram details={data} key={data.flight_num} />
          ))}
      </div>
    );
  }
}

export default LaunchPrograms;
