import React from "react";

function App() {
  /* You will need to use many state to keep the input values and other needs */
  const [inputA, setInputA] = React.useState("");
  const [inputB, setInputB] = React.useState("");
  const [result, setResult] = React.useState("");
  const [hasError, setHasError] = React.useState(false);

  /* You will need some function to handle the key pressed and button events */
  function onA(event) {
    setInputA(event.target.value);
  }

  function onB(event) {
    setInputB(event.target.value);
  }

  function isNumeric(value) {
    const newValue = value.trim();
    if (newValue === "") {
      return false;
    }
    return !isNaN(newValue);
  }

  function compute() {
    if (isNumeric(inputA) && isNumeric(inputB)) {
      const sum = Number(inputA) + Number(inputB);
      setResult(String(sum));
      setHasError(false);
    } else {
      setResult("A and B shall be numbers !");
      setHasError(true);
    }
  }

  function checkError() {
    return hasError ? "error" : "";
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input value={inputA} onChange={onA} />

      <label>B =</label>
      <input value={inputB} onChange={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result} className={checkError()} />
      <button onClick={compute}>Compute</button>
    </main>
  );
}

export default App;
