export default function Radio(props) {
  const {
    className,
    costRef,
    incomeRef,
  } = props;

  return (
    <div className={`${className}`}>
      <label className={`${className}__label`} htmlFor="income">
        Income:
      </label>
      <input
        className={`${className}__input`}
        ref={incomeRef}
        id="income"
        value="income"
        name="costs"
        type="radio"
        required
        checked
        readOnly
      />
      <label className={`${className}__label`} htmlFor="costs">
        Costs:
      </label>
      <input
        className={`${className}__input`}
        ref={costRef}
        id="costs"
        value="costs"
        name="costs"
        type="radio"
        required
        readOnly
      />
    </div>
  );
}
