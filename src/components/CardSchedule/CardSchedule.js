import "./CardSchedule.scss";

const CardSchedule = (props) => {
  const { name, hour, tag } = props;

  return (
    <div className={`CardSchedule ${tag}-Card`}>
      <div className="CardSchedule--data">
        <p className="paragraph">{name}</p>
        <p className="paragraph--bold">{hour}</p>
      </div>
    </div>
  );
};

export default CardSchedule;
