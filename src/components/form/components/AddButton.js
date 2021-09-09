export default function AddButton(props) {
  const {
    className,
    handleClick,
    label
  } = props;

  return (
    <button className={className} onClick={handleClick}>
      {label}
    </button>
  );
}
