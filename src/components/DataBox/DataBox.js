import "./DataBox.scss";

const DataBox = ({ title, budget }) => {
  return (
    <div className="dataBox">
      <p>{budget}</p>
      <p>{title}</p>
    </div>
  );
};

export default DataBox;
