import { useState } from "react";

const useToggle = (initialVal) => {
  const [toggle, setToggle] = useState(initialVal);

  const toggleState = () => {
    setToggle(!toggle);
  };
<s></s>
  return [toggle, toggleState, setToggle];
};

export default useToggle;
