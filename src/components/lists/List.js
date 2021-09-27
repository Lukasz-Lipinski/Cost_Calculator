import "../styles/lists.scss";

export default function List(props) {
  const { title, children, sum, className } = props;
  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className={`${className}-main`}>
        <ul className={`${className}-main-list`}>{children}</ul>
        <p className={`${className}-main-summing`}>total: {sum} zł</p>
      </div>
    </div>
  );
}
