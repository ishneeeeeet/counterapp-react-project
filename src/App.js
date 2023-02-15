import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);

  function handleClick() {
    setValue(value + 1);
  }
  function Reset() {
    setValue(0);
  }

  return (
    <div>
      <button onClick={value < 10 ? handleClick : undefined}>
        Click here, {value}
      </button>
      <br />
      <button onClick={Reset}>Reset</button>
    </div>
  );
}
