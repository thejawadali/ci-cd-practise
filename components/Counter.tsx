import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <span data-testid="counter" className="px-6 py-2 rounded shadow border">
        {counter}
      </span>
      <div className="mt-5 flex">
        <button
          onClick={() => setCounter(counter - 1)}
          data-testid="decrement-button"
          className="bg-red-500 w-full rounded-l text-white"
        >
          -
        </button>
        <button
          data-testid="increment-button"
          onClick={() => setCounter(counter + 1)}
          className="bg-green-500 w-full rounded-r text-white"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
