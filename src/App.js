import React, { useState, useEffect } from "react";
import OperationButton from "./components/OperationButton";
import OperationInput from "./components/OperationInput";

function App() {
  const [basicUrl] = useState("https://newton.now.sh/api/v2/");
  const [operation, setOperation] = useState("");
  const [operations] = useState([
    "simplify",
    "factor",
    "derive",
    "integrate",
    "zeroes",
    "area",
  ]);
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    setOperation("");
    setExpression("");
  }, []);

  return (
    <div>
      <OperationInput setExpr={setExpression} />
      {operations.map((op) => {
        return (
          <OperationButton
            key={`oper-btn${operations.indexOf(op)}`}
            operation={op}
            setOper={setOperation}
            expr={expression}
            basicUrl={basicUrl}
            setResult={setResult}
          />
        );
      })}
      <div>Result: {result}</div>
      <div>
        <a
          href="https://github.com/aunyks/newton-api"
          target="_blank"
          rel="noreferrer"
        >
          Not possible without this API
        </a>
      </div>
    </div>
  );
}

export default App;
