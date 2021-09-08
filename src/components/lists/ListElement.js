import "./styles/listElement.scss";

export default function ListElement(props) {
  return (
    <li id={props.id} onClick={props.handleClick} className={props.className}>
      <span className={`${props.className}-name`}>{props.Name}</span>
      <span className={`${props.className}-price`}>{props.Price}</span>
      <span className={`${props.className}-category`}>{props.Category}</span>
    </li>
  );
}
