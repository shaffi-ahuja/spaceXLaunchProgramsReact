import { Card } from "react-bootstrap";
import Filter from "./Filter";
import React, { Component } from "react";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterSelected: { year: "", launchSuccess: "", landSuccess: "" },
    };
  }

  isEqual(object1, object2) {
    for (let key of Object.keys(object1)) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  onLaunchYearChange(value) {
    this.state.filterSelected.year === value
      ? this.setState({
          filterSelected: { ...this.state.filterSelected, year: "" },
        })
      : this.setState({
          filterSelected: { ...this.state.filterSelected, year: value },
        });
  }
  onLaunchSuccessChange(value) {
    this.state.filterSelected.launchSuccess === value
      ? this.setState({
          filterSelected: { ...this.state.filterSelected, launchSuccess: "" },
        })
      : this.setState({
          filterSelected: {
            ...this.state.filterSelected,
            launchSuccess: value,
          },
        });
  }
  onLandSuccessChange(value) {
    this.state.filterSelected.landSuccess === value
      ? this.setState({
          filterSelected: { ...this.state.filterSelected, landSuccess: "" },
        })
      : this.setState({
          filterSelected: { ...this.state.filterSelected, landSuccess: value },
        });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.isEqual(this.state.filterSelected, prevState.filterSelected)) {
      this.props.onFilter(this.state.filterSelected);
    }
  }

  render() {
    const yearArray = [
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
    ];
    const booleanArray = ["True", "False"];
    return (
      <Card className="p-2">
        <div className="row justify-content-center">
          <h4>Filters</h4>

          <h6 className="text-center mb-0 mt-1">Launching Year</h6>
          <div className="px-3 py-0">
            <hr className="my-0" />
          </div>
          {yearArray.map((value) => (
            <Filter
              key={value}
              onChange={this.onLaunchYearChange.bind(this)}
              type="year"
              filterValue={value}
              isActive={this.state.filterSelected.year === value ? true : false}
              filterSelected={this.state.filterSelected.year}
            />
          ))}

          <h6 className="text-center mb-0 mt-1">Successful Launch</h6>
          <div className="px-3 py-0">
            <hr className="my-0" />
          </div>
          {booleanArray.map((value) => (
            <Filter
              key={value}
              onChange={this.onLaunchSuccessChange.bind(this)}
              type="launch_success"
              filterValue={value}
              isActive={
                this.state.filterSelected.launchSuccess === value ? true : false
              }
              filterSelected={this.state.filterSelected.launchSuccess}
            />
          ))}

          <h6 className="text-center mb-0 mt-1">Successful Landing</h6>
          <div className="px-3 py-0">
            <hr className="my-0" />
          </div>
          {booleanArray.map((value) => (
            <Filter
              key={value}
              onChange={this.onLandSuccessChange.bind(this)}
              type="land_success"
              filterValue={value}
              isActive={
                this.state.filterSelected.landSuccess === value ? true : false
              }
              filterSelected={this.state.filterSelected.landSuccess}
            />
          ))}
        </div>
      </Card>
    );
  }
}

export default Filters;
