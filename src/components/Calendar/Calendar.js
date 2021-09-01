import { useState, useEffect } from "react";

import Week from "./Week/Week";
import "./Calendar.scss";
import PlaceSchedule from "./PlaceSchedule/PlaceSchedule";
import data from "../../data/calendar";

const Calendar = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Simulate a fetch Data
    setSchedule(data);
  }, []);

  return (
    <div className="Calendar">
      <Week />
      {schedule.map((place) => {
        return <PlaceSchedule {...place} />;
      })}
    </div>
  );
};

export default Calendar;
