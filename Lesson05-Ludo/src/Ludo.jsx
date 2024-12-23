import { useState } from "react"; /* Importing useState */

function Ludo(){

    //dealing with object
    //movesI is object
    let [movesI, movesF] = useState({
                                    blue: 0, 
                                    yellow: 0,
                                    green: 0,
                                    red: 0
                                    });

    //dealing with array
    //PlayerA is array
    let [PlayerA, ChangePlayer] = useState(["Akshit"]);

    //functions
    let updateBlue = () => {   
        //Note: While dealing with array AND object we need
        //to use Spread Operator as it creates NEW ADDRESS.
        movesI.blue += 1;//incrementing
        //To re-render the component we have to pass 
        //"the copy of the object" having new ADDRESS.
        movesF({...movesI}); 
        //To re-render the component we have to pass
        //"the copy of the array" having new ADDRESS.
        //also we are removing first player.
        ChangePlayer([...PlayerA = "", "Saurab"]);
    };

    //Alternative Way
    let updateYellow = () => {   
        movesF(    (oldMoves) => { return  {...oldMoves, yellow: oldMoves.yellow + 1 };}    );
        ChangePlayer([...PlayerA = "", "Sakshi"]);
    };

    let updateGreen = () => {   
        movesI.green += 1;
        movesF({...movesI});
        ChangePlayer([...PlayerA = "", "Himani"]);
    };

    let updateRed = () => {   
        movesI.red += 1;
        movesF({...movesI});
        ChangePlayer([...PlayerA = "", "Akshit"]);
    };

    return(

        <div>

            <h1> Ludo Games Begins !! </h1>
            <h3> 
            Current Chance = 
            {
            PlayerA.map((x,key) => {
                return <div style={{display: "inline-block", color: "orange"}} key={key+1}>
                     {x} 
                </div>
            }) 
            }
            </h3>
 
            <h3> Blue Moves Akshit = {movesI.blue} </h3> {/* Accessing Initial Moves */}
            <button style={{backgroundColor: "blue"}} onClick={updateBlue}> +1 </button>
            <h3> Yellow Moves Saurab = {movesI.yellow} </h3> {/* Accessing Initial Moves */}
            <button style={{backgroundColor: "yellow", color : "black"}} onClick={updateYellow}> +1 </button>
            <h3> Green Moves Sakshi = {movesI.green} </h3> {/* Accessing Initial Moves */}
            <button style={{backgroundColor: "green"}} onClick={updateGreen}> +1 </button>
            <h3> Red Moves Himani = {movesI.red} </h3> {/* Accessing Initial Moves */}
            <button style={{backgroundColor: "red"}} onClick={updateRed}> +1 </button>

        </div>
    );
}

export default Ludo;