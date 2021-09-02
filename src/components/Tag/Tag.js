import "./Tag.scss";

const Tag = ({ title, tag }) => {
  return <div className={`ContainerTag ${tag}`}>{title}</div>;
};

export default Tag;
