import './App.css'
import Lottery from './Lottery.jsx';
import { sum } from './LotteryHelp.js';

function App() {

  let winningCondition = (ticket) =>{
    return ticket.every((num) => num == ticket[0]); //Every Number is equal. 5 5 5, 2 2 2. 9 9 9 etc. [CONDITION]
  }

  return (
    <>
    <h3 style = {{color: "orange", fontSize: "2 rem"}}> Lottery Games </h3>
    <Lottery n={3} condition = {winningCondition}/> {/* Props me size of the array (n) and condition pass hui hai. */}
    </>
  );
}

export default App;