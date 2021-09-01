import Schedule from "../Schedule/Schedule";
import "./PlaceSchedule.scss";

const PlaceSchedule = (props) => {
  const { place, target, planned, type } = props;

  if (!type) return null;
  return (
    <div className="PlaceSchedule">
      <div className="PlaceSchedule--place">
        <h1>{place}</h1>
        <h1>{target}</h1>
        <h1>{planned}</h1>
      </div>
      <div className="PlaceSchedule--schedule">
        {type.map((a) => {
          return <Schedule {...a} />;
        })}
      </div>
    </div>
  );
};

export default PlaceSchedule;
