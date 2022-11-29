import React, { useState } from "react";

const Couneter = () => {
  const [count, setCount] = useState(0);
  const handleCounter = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCounter}>Counterr</button>
    </>
  );
};

export default Couneter;
