import { useState, useEffect } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

const fetchTickets = async () => {
  const res = await fetch('./tickets.json')
  return res.json()
}
const ticketsPromise = fetchTickets();

function App() {

  const [visitedTickets, setVisitedTickets] = useState([])
  const [availableTickets, setAvailableTickets] = useState([])

 

  useEffect(() => {
    ticketsPromise.then(data => setAvailableTickets(data))
  }, [])

  const handleVisitedTickets = (ticketData) => {
    const newVisitedTickets = [...visitedTickets, ticketData]
    setVisitedTickets(newVisitedTickets)

    setAvailableTickets(prev =>
      prev.filter(ticket => ticket.id !== ticketData.id)
    )
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner visitedTickets={visitedTickets} setVisitedTickets={setVisitedTickets}></Banner>

      <CustomerTickets
        ticketsPromise={ticketsPromise}
        visitedTickets={visitedTickets}
        setVisitedTickets={setVisitedTickets}
        handleVisitedTickets={handleVisitedTickets}
        availableTickets={availableTickets}        
        setAvailableTickets={setAvailableTickets}
      ></CustomerTickets>

      <Footer></Footer>
    </>
  )
}

export default App
