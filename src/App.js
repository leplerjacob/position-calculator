import CalcForm from "./components/CalcForm";
import History from "./components/History";
import { useState } from "react";
import { postTrade, deleteTrade } from "./actions/history";
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
    postTrade(trade);
  };

  const handleDelete = async(index) => {
    console.log(index)
    // TODO: Develop delete function to backend
    await setHistory(history.splice(index, 1))
    await deleteTrade(index)
  }

  /*
  this.setState({people: this.state.people.filter(function(person) { 
        return person !== e.target.value 
    })});
  */ 

  return (
    <div className="App">
      <CalcForm handleCalc={handleCalc} />
      <History history={history} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
