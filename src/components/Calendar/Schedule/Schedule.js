import CardSchedule from "../../CardSchedule";
import Tag from "../../Tag/Tag";

import "./Schedule.scss";

const Schedule = (props) => {
  const { title, mon, tue, wed, thu, fri, sat, sun } = props;
  console.log(props);

  if (!mon || !tue || !wed || !thu || !fri || !sat || !sun) return null;

  const daysObj = { ...props };
  delete daysObj.title;
  const days = Object.values(daysObj);

  return (
    <>
      <Tag title={title} />
      <div className="Schedule">
        {days.map((day) => (
          <div>
            {day.map((data) => {
              return <CardSchedule {...data} />;
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default Schedule;
