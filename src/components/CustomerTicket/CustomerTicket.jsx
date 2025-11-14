import React, { useState } from 'react';

const CustomerTicket = ({ ticket, handleVisitedTickets, visitedTickets,   }) => {
    


    // const [isSelected, setIsSelected] = useState(false);


    const handleSelected = (ticketData) => {
        // setIsSelected(true)
        
        

    
        handleVisitedTickets(ticketData)
        
        
        
    }



    return (

        

        <div className="card bg-base-100 w-96 shadow-sm hover:not-focus-visible:">

            <div onClick={()=>handleSelected(ticket)} className="card-body">
                <h2 className="card-title justify-between my-2">
                    {ticket.title}
                    <div className="badge badge-secondary">{ticket.status}</div>
                </h2>
                <p className='my-2'>{ticket.description}</p>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <p>{ticket.id}</p>
                        <h3 className='text-red-400'>{ticket.priority}</h3>
                    </div>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">{ticket.customer}</div>
                    <div className="badge badge-outline">{ticket.createdAt}</div>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default CustomerTicket;