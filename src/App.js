import CalcForm from "./components/CalcForm";
import History from "./components/History";
import { useState } from "react";
import "./App.css";

const tempData = [
  {crypto: "BTC", capital: 1000, risk: 2, entry:47500, stop: 47250, stopPercentage: 0.53, calculatedPosition: 3773, position: "long"},
  {crypto: "BTC", capital: 1000, risk: 2, entry:47500, stop: 47250, stopPercentage: 0.53, calculatedPosition: 3773, position: "long"},
];

function App() {
  const [history, setHistory] = useState(tempData);

  const handleCalc = (trade) => {
    console.log(trade)
    setHistory([...history, trade])
  }
  
  return (
    <div className="App">
      <CalcForm handleCalc={handleCalc} />
      <History history={history} />
    </div>
  );
}

export default App;
