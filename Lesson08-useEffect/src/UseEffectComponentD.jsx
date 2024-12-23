import { useState, useEffect } from "react"; /* Importing useState */

function UseEffectComponentD(){

    let [initialValuex, ChangingValuex] = useState(0);

    let [initialValueY, ChangingValueY] = useState(0);

    /* Arrow function to OPTIMIZE the code. */

    let increaseCount = () => {
        ChangingValuex( (x) => (x+1));
        /* Note: ( ) ke place me return { } use hota hai. [Already Done] */
    };

    let decreaseCount = () =>{
        ChangingValueY( (x) => (x-1));
    };

    //useEffect()
    useEffect(function printTenTimesTheInitalValue(){
        console.log(initialValuex+10);
    } , [initialValueY]);

    /* NOTE: useEffect( function ABC() { WORK }, [Work kro Only for This Current State.]  ) */

    useEffect(function alertFunc(){
        alert("Welcome To Counter Page..."); //When the component first renders.
    } , []);

    return(
        <div>
            <h3> Count = {initialValuex} </h3> {/* Initial Value 0 hai abhi as useState(0) */}
            <button onClick={increaseCount}> High [+1] </button> {/* Button with onClick EVENT. */}

            <h3> Count = {initialValueY} </h3> {/* Initial Value 0 hai abhi as useState(0) */}
            <button onClick={decreaseCount}> Low [-1]</button> {/* Button with onClick EVENT. */}
        </div>
    );
}

export default UseEffectComponentD;