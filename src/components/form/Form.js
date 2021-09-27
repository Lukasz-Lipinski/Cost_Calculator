import { Input, Radio, Select, AddButton } from "./components";
import "../styles/form.scss";

export default function Form(props) {
  const {
    handleSubmit,
    IncomeRef,
    CostsRef,
    onChangeProducts,
    valueProducts,
    NameRef,
    onChangePrice,
    valuePrice,
    PriceReference,
    valueCategory,
    onChangeCategory,
    CatRef,
    handleClick,
    className,
    saldo,
  } = props;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form--center">
        <Radio
          className="form--center__radio"
          incomeRef={IncomeRef}
          costRef={CostsRef}
        />
      </div>
      <Input
        onChange={onChangeProducts}
        value={valueProducts}
        className="form--product"
        Ref={NameRef}
        label="Products"
        name="products"
        type="text"
      />
      <Input
        onChange={onChangePrice}
        value={valuePrice}
        className="form--price"
        Ref={PriceReference}
        label="Price"
        name="price"
        type="number"
        min="0"
      />
      <div className="form--center">
        <Select value={valueCategory} onChange={onChangeCategory} className="form--center__select" CatRef={CatRef} />
      </div>
      <div className="form--center">
        <AddButton
          className="form--center__btn"
          label="Add"
          onClick={handleClick}
        />
      </div>
      <span className={`form--saldo${className}`}>
        Saldo: {saldo}
      </span>
    </form>
  );
}
