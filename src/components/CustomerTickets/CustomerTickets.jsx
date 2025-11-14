import React, { use } from 'react';
import CustomerTicket from '../CustomerTicket/CustomerTicket';

const CustomerTickets = ({ ticketsPromise, visitedTickets, setVisitedTickets, handleVisitedTickets, setAvailableTickets, availableTickets, completeTask, setCompleteTask, removePlayer }) => {

    

    return (
        <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 text-center items-center md:items-start'>
            <div className='max-w-[800px]'>
                <h1 className='text-3xl font-semibold my-5'>Customer Tickets</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>

                    {
                        availableTickets.map(ticket => (
                            <CustomerTicket
                                key={ticket.id}
                                ticket={ticket}
                                visitedTickets={visitedTickets}
                                handleVisitedTickets={handleVisitedTickets}
                            ></CustomerTicket>
                        ))
                    }

                </div>
            </div>

            {/* right side  */}
            <div className='max-w-[390px]'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl font-semibold my-5'>Task Status</h1>

                    {visitedTickets.length === 0 && <p className='text-center'>Select a ticket to add to Task Status</p>}

                  

                    {visitedTickets.map((ticket, index) => (
                        <div key={index} className='p-3 shadow-2xl rounded-md my-2 max-w-full'>
                            <h3 className='w-full  text-center mb-[15px] text-2xl'>{ticket.title}</h3>
                            <button onClick={()=> removePlayer(ticket)} className="w-[350px] h-[33px] text-white bg-[#02A53B]">Complete</button>
                        </div>
                    ))}

                    

                </div>

                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl font-semibold my-5'>Resolved Task</h1>

                    {completeTask.length === 0 && <p className='text-center'>Select a ticket to add to Task Status</p>}

                  

                    {completeTask.map((ticket, index) => (
                        <div key={index} className='p-3 shadow-2xl rounded-md my-2 max-w-full'>
                            <h3 className='w-full  text-center mb-[15px] text-2xl'>{ticket.title}</h3>
                            
                        </div>
                    ))}

                    

                </div>
            </div>
        </div>
    );
};

export default CustomerTickets;
