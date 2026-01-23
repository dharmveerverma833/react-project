
import { useState } from "react";

import {genTickit,sum}  from './ticket.js';
import Ticket from "./Ticket.jsx";

export default function LotteryTickect({n=3, winConditions}) {
    const [tickect , setTicket] = useState(genTickit(n));
    let isWinnig = winConditions(tickect);

    let buyNewTicket= () =>{
        setTicket(genTickit(n));
    }

    
  return (
    <>
    <div>
        <h1>Lottery Tickect!</h1>

        <div className='ticket '>
            <Ticket tickect={tickect}/>
        </div>
    
        <button onClick={buyNewTicket}>Bye New Ticket</button>
        <h3>{isWinnig && "Congratulation you win!"}</h3>
         
    </div>
    </>
  )
};

