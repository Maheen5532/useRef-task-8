import { useState, useRef, useEffect } from "react";
import "./App.css"; // External CSS for styling

export default function PreviousStateCounter() {
  const [count, setCount] = useState(0); // Counter state
  const prevCountRef = useRef(null); // Reference to store the previous count

  // Update previous count in useEffect
  useEffect(() => {
    prevCountRef.current = count; // Store the current count before next update
  }, [count]); // Runs on count change

  return (
    <div className="main-container">
      <div className="container">
      <h2>Counter with Previous State</h2>
      <p>Current Count: <span className="current">{count}</span></p>
      <p>Previous Count: <span className="previous">{prevCountRef.current ?? "N/A"}</span></p>
      <button className="button" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="button reset" onClick={() => setCount(0)}>Reset</button>
    </div>
    </div>
  );
}
