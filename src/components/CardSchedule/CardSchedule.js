import "./CardSchedule.scss";

const CardSchedule = (props) => {
  const { name, hour } = props;
  return (
    <div className="CardSchedule">
      <p>{name}</p>
      <p>{hour}</p>
    </div>
  );
};

export default CardSchedule;
