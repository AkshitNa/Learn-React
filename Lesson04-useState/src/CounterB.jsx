import { useState } from "react"; /* Importing useState */

function CounterB(){

    let [initialValue, ChangingValue] = useState(7);

     //Best Practice = Use Arrow function to OPTIMIZE the code.

    let increaseCount = () =>{
        ChangingValue( (currentValue) => {return currentValue + 2;} ); /* Increase by 2 */
        ChangingValue( (currentValue) => {return currentValue + 3;} ); /* Increase by 3 */
    };                                                                 /* Total increase: 2+3 = 5 */
   
    let fixedCount = () =>{
        ChangingValue(100); /* changingValue =100 */
    };

    return(
        <div>
            <h3> Count = {initialValue} </h3> {/* Initial Value 7 hai abhi as useState(7) */}
            <button onClick={increaseCount}> CallBack Increase Pulse </button> {/* Button with onClick EVENT. */}
            <button onClick={fixedCount}> Fixed CallBack To 100 </button>  {/* Button with onClick EVENT. */}
        </div>
    );
}

export default CounterB;