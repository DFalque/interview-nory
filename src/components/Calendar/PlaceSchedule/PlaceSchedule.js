import { useState } from "react";
import Schedule from "../Schedule/Schedule";
import "./PlaceSchedule.scss";

const PlaceSchedule = (props) => {
  const { place, tag, target, planned, type } = props;
  const [displaySchedule, setDisplayShedule] = useState(true);

  if (!type) return null;

  return (
    <div className="PlaceSchedule">
      <div
        className="PlaceSchedule--place"
        onClick={() => setDisplayShedule(!displaySchedule)}
      >
        <div className="PlaceSchedule--place-name">
          <p className="paragraph--bold item">{place}</p>
        </div>
        <p className="paragraph--opacity item">Target</p>
        <p className="paragraph item">{target}</p>
        <p className="paragraph--opacity item">Planned</p>
        <p className="paragraph item">{planned}</p>
      </div>
      <div className={`PlaceSchedule--schedule ${displaySchedule}`}>
        {type.map((a) => {
          return <Schedule {...a} tag={tag} />;
        })}
      </div>
    </div>
  );
};

export default PlaceSchedule;
