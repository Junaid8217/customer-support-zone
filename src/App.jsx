import { useState, useEffect } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { toast, ToastContainer } from 'react-toastify';

const fetchTickets = async () => {
  const res = await fetch('./tickets.json')
  return res.json()
}
const ticketsPromise = fetchTickets();

function App() {

  const [visitedTickets, setVisitedTickets] = useState([])
  const [availableTickets, setAvailableTickets] = useState([])
  const [completeTask, setCompleteTask] = useState([])



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


  const removePlayer = (p) => {
    // const filteredData = visitedTickets.filter(tic => tic.id!== p.id)
    // setVisitedTickets(filteredData)
    const filterData = visitedTickets.filter(tic => tic.id!==p.id)
    setVisitedTickets(filterData)
    toast("Resolved")

    handleResolve(p)
    
    
  }

  const handleResolve = (resolve) => {
    const newResolvedList = [...completeTask, resolve]
    setCompleteTask(newResolvedList)
  }

  

  return (
    <>
      <Navbar></Navbar>
      <Banner visitedTickets={visitedTickets} setVisitedTickets={setVisitedTickets} completeTask={completeTask}></Banner>

      <CustomerTickets
        ticketsPromise={ticketsPromise}
        visitedTickets={visitedTickets}
        setVisitedTickets={setVisitedTickets}
        handleVisitedTickets={handleVisitedTickets}
        availableTickets={availableTickets}        
        setAvailableTickets={setAvailableTickets}
        completeTask={completeTask}
        setCompleteTask={setCompleteTask}
        removePlayer={removePlayer}
        handleResolve={handleResolve}
        
      ></CustomerTickets>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
