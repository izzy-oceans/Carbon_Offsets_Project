import { useState } from "react";

function EquationExplorer() {
  const [showChange, setShowChange] = useState(false);

  return (
    <div className="p-4 max-w-lg mx-auto text-center">
      <h1 className="text-2xl font-bold">Equation Explorer</h1>
      <p className="mt-2 text-lg">
        Net = 
        <button className="text-blue-500 underline" onClick={() => setShowChange(!showChange)}>
          {showChange ? " (z + y - p) " : " Change in X "}
        </button>
        - Loss
      </p>
    </div>
  );
}

export default EquationExplorer;
