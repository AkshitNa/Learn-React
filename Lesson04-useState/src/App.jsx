import './App.css'
import CounterA from './CounterA';
import CounterB from './CounterB';
import CounterLike from './CounterLike';
import Fruit from './Fruit';
import FruitInput from './FruitInput';
import Notes from './Notes';

function App()
{
return(
    <>
    <h1> React useState() </h1>
    <CounterA/>
    <hr /> <hr />
    <CounterB/>
    <hr /><hr />
    <CounterLike/>
    <hr /> <hr />
    <Fruit/>
    <hr /> <hr />
    <FruitInput/>
    <hr /> <hr />
    <Notes/>
    </>
      );
}

export default App;
