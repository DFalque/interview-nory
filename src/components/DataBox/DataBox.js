import "./DataBox.scss";

const DataBox = ({ title, budget }) => {
  return (
    <div className="dataBox">
      <h1 className="heading-primary">{`€${budget}`}</h1>
      <p>{title}</p>
    </div>
  );
};

export default DataBox;
