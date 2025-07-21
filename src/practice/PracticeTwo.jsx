import { useState } from "react";
export default function main() {
  const [name, setName] = useState("");
  const [mode, setMode] = useState("");

  return (
    <div>
      <p>Please Insert Your Name:</p>
      <input
        type="text"
        className="text-practice-two"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name Here"
      />
      <br/>

      {mode==='manual' &&  <button style={{ marginTop:'20px' }}>Submit</button>}
     
      <p>Your Name: {name}</p>

      <p className="mt-4">Select Mode</p>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="auto"
            checked={mode === "auto"}
            onChange={(e) => setMode(e.target.value)}
          />{" "}
          Auto
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="manual"
            checked={mode === "manual"}
            onChange={(e) => setMode(e.target.value)}
          />{" "}
          Manual
        </label>
      </div>
      <p>Your Mode Is {mode.toUpperCase()}</p>
    </div>
  );
}
