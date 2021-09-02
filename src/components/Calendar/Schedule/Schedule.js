import CardSchedule from "../../CardSchedule";
import Tag from "../../Tag/Tag";

import "./Schedule.scss";

const Schedule = (props) => {
  const { title, tag, mon, tue, wed, thu, fri, sat, sun } = props;
  console.log(props);

  if (!mon || !tue || !wed || !thu || !fri || !sat || !sun) return null;

  const daysObj = { ...props };
  delete daysObj.title;
  delete daysObj.tag;
  const days = Object.values(daysObj);

  return (
    <>
      <Tag title={title} tag={tag} />
      <div className="Schedule">
        {days.map((day) => (
          <div>
            {day.map((data) => {
              return <CardSchedule {...data} tag={tag} />;
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default Schedule;
