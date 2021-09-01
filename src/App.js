import CalcForm from "./components/CalcForm";
import History from "./components/History";
import { useState } from "react";
import "./App.css";

/* Position formula
  Trade amount = Risk / (Stoploss / 100)
*/

const tempData = [
  ["BTC", 1000, 2, 47500, 47250, 0.53, 3773],
  ["ETH", 1000, 2, 3500, 3350, 4.29, 466],
];

function App() {
  const [history, setHistory] = useState(tempData);

  return (
    <div className="App">
      <CalcForm />
      <History history={history} />
    </div>
  );
}

export default App;
