export default function AddButton(props) {
  return (
    <button className={props.className} onClick={props.handleClick}>
      {props.label}
    </button>
  );
}
