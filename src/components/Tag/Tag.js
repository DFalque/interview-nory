import "./Tag.scss";

const Tag = ({ title, tag }) => {
  return <span className={`Tag ${tag}`}>{title}</span>;
};

export default Tag;
