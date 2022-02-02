import { Card } from "react-bootstrap";

const LaunchProgram = (props) => {
  const details = props.details;
  const launchSuccess =
    details.launch_success !== null
      ? details.launch_success.toString()
      : "null";
  const landingSuccess =
    details.launch_landing !== null
      ? details.launch_landing.toString()
      : "null";
  return (
    <div className="col-3 px-2 pb-2">
      <Card className="p-3">
        <Card.Img
          variant="top"
          style={{ backgroundColor: "rgb(236, 236, 236)" }}
          src={details.mission_img}
        />
        <h6>
          <b>
            {details.mission_name} #{details.flight_num}
          </b>
        </h6>
        <h6>Launch Year {details.launch_year}</h6>
        <h6>Success Launch : {launchSuccess}</h6>
        <h6>Success Landing : {landingSuccess}</h6>
      </Card>
    </div>
  );
};

export default LaunchProgram;
