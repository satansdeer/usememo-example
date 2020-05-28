import React, { useState, useMemo } from "react";

function App() {
  const [fibLength, setFibLength] = useState(3);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const fibonacciSequence = useMemo(() => {
    const t1 = performance.now();
    const result = [1, 1];
    for (let i = 2; i < fibLength; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    const t2 = performance.now();
    console.log(`Fibonacci calculation took ${t2 - t1}ms`);
    return result;
  }, [fibLength]);

  return (
    <>
      <button onClick={increment}>{count}</button>
      <hr />
      <input
        value={fibLength}
        onChange={(e) => setFibLength(Number(e.target.value))}
      />
      <p>
        Fibonacci sequence of length {fibLength}: {fibonacciSequence.join(", ")}
      </p>
    </>
  );
}
export default App;
