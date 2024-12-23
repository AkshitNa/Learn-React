//Simple Counter

import { useState } from "react"; /* Importing useState */

function CounterA(){

    let [initialValue, ChangingValue] = useState(0);

    /* useState(INITIAL VALUE) => It returns an array with two values */
    /* We are basically de-constructing our ARRAY */
    /* (1) initialValue => which stores the value of INITIAL VALUE here it is 0  */
    /* (2) changingValue => It is a function to change the initialValue.*/

    //Note: If there is change in the function, the component re-EXECUTE or re-renders.

    //Best Practice = Use Arrow function to OPTIMIZE the code.

    let increaseCount = () =>{
        ChangingValue(initialValue + 1); /* changingValue function hi majboor karega component ko "re-render hone me." */
    };

    let decreaseCount = () =>{
        ChangingValue(initialValue - 1);  /* changingValue function hi majboor karega component ko "re-render hone me." */
    };

    return(
        <div>
            <h3> Count = {initialValue} </h3> {/* Initial Value 0 hai abhi as useState(0) */}
            <button onClick={increaseCount}> Pulse </button> {/* Button with onClick EVENT. */}
            <button onClick={decreaseCount}> Depulse </button> {/* Button with onClick EVENT. */}
        </div>
    );
}

export default CounterA;