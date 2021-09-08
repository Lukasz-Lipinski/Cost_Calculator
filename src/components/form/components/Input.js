export default function Input(props) {
  return (
    <div>
      <label htmlFor={props.label}>{props.label}: </label>
      <input
        onChange={props.onChange}
        value={props.value}
        ref={props.Ref}
        min={props.min}
        type={props.type}
        name={props.name}
        className={props.className}
        required
      />
    </div>
  );
}
