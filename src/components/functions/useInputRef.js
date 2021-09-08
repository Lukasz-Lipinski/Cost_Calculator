import { useRef, useState } from "react";

const useInputRef = (initVal = "") => {
  const reference = useRef();
  const [val, setVal] = useState();
  setVal(reference.current);

  return [val, reference];
};

export default useInputRef;
