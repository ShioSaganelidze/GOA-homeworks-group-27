import { useState } from "react";
import "./App.css";

function HW1() {
  const [password, setPassword] = useState("");

  const pswd = password.length;
  const long8 = pswd >= 8;

  return (
    <>
      <h2>Password Checker</h2>

      <input type="password" placeholder="Enter password" value={password} onChange={
        (e) => setPassword(e.target.value)
      }
      />

      <p>Password length: {pswd}</p>
      <p>Longer than 8 characters: {long8 ? "Yes" : "No"}</p>
    </>
  );
}

function App() {
  return (
    <HW1 />
  )
}

export default App;
