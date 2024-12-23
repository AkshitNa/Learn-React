import { useState } from "react"; /* Importing useState */
import { genNumber } from './LotteryHelp.js';
import Ticket from "./Ticket.jsx";
import Button from "./Button.jsx";

function Lottery({n = 3, condition}){

    //genNumber(n) => n size ka array return krega, jiski value ticket me store hogi.
    let [ticket, changeTicket] = useState(genNumber(n));
    let isTotal = condition(ticket);//This is not useState

    //Arrow function Buy
    let Buy = () => { changeTicket(genNumber(n)); }

    return(
        <div>

            <Ticket ticket={ticket}/> {/* ticket ek array hai. */}
            <Button action = {Buy}/>

        <h3>{isTotal ? 
            <> Congratulations!! You Won </> :
            <>
            <i className="fa-solid fa-clover"> </i>
            Better Luck Next Time
            <i className="fa-solid fa-clover"> </i>
            </>
            } </h3>

        </div>
         );
}

export default Lottery;