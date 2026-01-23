import React from 'react'
import "./Ticket.css"
import TicketNum from './TicketNum'


export default function Ticket({tickect }) {
  return (
    <div className='ticket1'>
        <p>Ticket</p>
     {tickect.map((num, idx)=>(
        <TicketNum num = {num} key = {idx} />
     ))}
               
    </div>
  )
}
