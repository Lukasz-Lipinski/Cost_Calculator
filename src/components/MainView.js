import { useState, useEffect } from "react";
import "./styles/mainview.scss";

import { Form } from "./form";
import { List, ListElement } from "./lists";
import { useAllRef } from "./functions/";

const costsElements = [];
const incomeElements = [];
const costsPrices = [];
const incomePrices = [];


const useInputVal = (initialVal = '') => {
  const [val, setVal] = useState(initialVal);

  const handleEvent = (e) => {
    setVal(e.target.value);
  }

  return [val, handleEvent];
}

export default function MainView() {
  const [NameVal, PriceVal, CategoryVal, IncomeVal, CostsVal] = useAllRef();
  const [products, handleOnChangeProducts] = useInputVal();
  const [price, handleOnChangePrice] = useInputVal();
  const [category, handleChangeCategory] = useInputVal("Food");
  const [upload, setUpload] = useState(0);
  const [className, setClassName] = useState("");
  const [sumCosts, setSumCosts] = useState(0);
  const [sumIncome, setSumIncome] = useState(0);

  const handleClick = () => {
    let totalIncome = 0;
    let totalCosts = 0;
    if (
      IncomeVal.current.checked &&
      price
    ) {
      incomeElements.push({
        id: incomeElements.length,
        name: products,
        price: price,
        category: category
      });

      incomePrices.push(Number.parseFloat(price));
      totalIncome = incomePrices.reduce(
        (preventVal, currentVal) => preventVal + currentVal
      );

      setSumIncome(totalIncome);
    } else if (
      CostsVal.current.checked &&
      price
    ) {
      costsElements.push({
        id: incomeElements.length,
        name: products,
        price: price,
        category: category
      });

      costsPrices.push(Number.parseFloat(price));
      totalCosts = costsPrices.reduce(
        (preventVal, currentVal) => preventVal + currentVal
      );

      setSumCosts(totalCosts);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const removeItem = (e) => {
    if (e.target.className === "incomeElement") {
      incomeElements.splice(e.target.id - 1, 1);
      incomePrices.splice(e.target.id - 1, 1);
      let totalIncome = 0;
      if (incomePrices.length !== 0) {
        totalIncome = incomePrices.reduce(
          (preventVal, currentVal) => preventVal + currentVal
        );
      }
      setSumIncome(totalIncome);
    } else {
      costsElements.splice(e.target.id - 1, 1);
      costsPrices.splice(e.target.id - 1, 1);

      let totalCost = 0;
      if (costsPrices.length !== 0) {
        totalCost = costsPrices.reduce(
          (preventVal, currentVal) => preventVal + currentVal
        );
      }
      setSumCosts(totalCost);
    }
    setUpload(sumIncome - sumCosts);
  };

  useEffect(() => {
    setUpload(sumIncome - sumCosts);
    upload < 0 ? setClassName("-less") : setClassName("");
  }, [sumCosts, sumIncome, upload]);

  return (
    <div className="container">
      <div className="container-form">
        <Form
          onChangeProducts={handleOnChangeProducts}
          valueProducts={products}
          onChangePrice={handleOnChangePrice}
          valuePrice={price}
          onChangeCategory={handleChangeCategory}
          valueCategory={category}
          className={className}
          NameRef={NameVal}
          PriceReference={PriceVal}
          CatRef={CategoryVal}
          IncomeRef={IncomeVal}
          CostsRef={CostsVal}
          handleSubmit={handleSubmit}
          handleClick={handleClick}
          saldo={upload}
        />
      </div>
      <div className="container-col">
        <div className="container-col-incomeList">
          <List className="income" title="Income" sum={sumIncome}>
            {incomeElements.map((el, index) => (
              <ListElement
                id={index}
                key={index}
                Name={el.name}
                Price={el.price}
                Category={el.category}
                className="incomeElement"
                handleClick={removeItem}
              />
            ))}
          </List>
        </div>
        <div className="container-col-costsList">
          <List className="costs" title="Costs" sum={sumCosts}>
            {costsElements.map((el, index) => (
              <ListElement
                id={index}
                key={index}
                Name={el.name}
                Price={el.price}
                Category={el.category}
                className="costsElement"
                handleClick={removeItem}
              />
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}
