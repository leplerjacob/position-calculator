import CalcForm from "./components/CalcForm";
import History from "./components/History";
import { useState, useEffect } from "react";
import "./App.css";

const tempData = [
  {
    index: 1,
    crypto: "BTC",
    capital: 1000,
    risk: 2,
    entry: 47500,
    stop: 47250,
    stopPercentage: 0.53,
    calculatedPosition: 3773,
    position: "long",
  },
];

const App = () => {
  const [history, setHistory] = useState(tempData);

  const handleCalc = async (trade) => {
    trade["index"] = history.length + 1;
    await setHistory([...history, trade]);
  };

  return (
    <div className="App">
      <CalcForm handleCalc={handleCalc} />
      <History history={history} />
    </div>
  );
};

export default App;
