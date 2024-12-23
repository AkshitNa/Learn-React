import TicketNumber from './TicketNumber.jsx';
import './Ticket.css';

function Ticket({ticket}){
    
    return(

        <div className='ticketdiv'>
            <p> Ticket </p>
            {ticket.map((num, id) => ( <TicketNumber num = {num} key = {id} /> ))}
        </div>
          );
}

export default Ticket;