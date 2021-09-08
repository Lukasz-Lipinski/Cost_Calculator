import { useRef } from "react";

const useAllRef = (initVal = "") => {
  const Name = useRef();
  const Price = useRef();
  const Category = useRef();
  const Income = useRef();
  const Costs = useRef();

  return [Name, Price, Category, Income, Costs];
};

export default useAllRef;
