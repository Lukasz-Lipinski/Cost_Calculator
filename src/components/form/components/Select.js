export default function Select(props) {
  const {
    className,
    CatRef,
    value,
    onChange
  } = props;

  return (
    <select className={className} ref={CatRef} value={value} onChange={onChange} required>
      <option name="food">Food</option>
      <option name="travels">Travels</option>
      <option name="car">Car</option>
      <option name="entertainment">Entertainment</option>
      <option name="job">Job</option>
      <option name="renting">Renting</option>
    </select>
  );
}
