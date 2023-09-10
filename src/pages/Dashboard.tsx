import React from 'react'
import '../css/dashboard.css'
import { useAppSelector } from '../app/hooks'
import useAuth from '../hooks/useAuth'
import Header from '../components/Header';
import {useNavigate} from 'react-router-dom'
import rectangle from '../assets/Rectangle1.png'


function Dashboard() {
  useAuth();
  const navigate = useNavigate();
  return (
    <>

    <Header/>
    <div className="dashboardcont">
      <div className="animation">
        <img src={rectangle} alt="" />
      </div>

   
      <div className="createameet">
        <div className="headingindash">
          <div className="headingm">
          <h1>Create Meetings :</h1> 
          </div>
          <div className="headingn">
          <h3>Where People and coffee cups collide</h3>
          </div>
         
        <div className="paraindash">
        In a world where calendars run wild and coffee is our preferred elixir, welcome to the whimsical realm of "Creating Meetings”.
        </div>
        </div>
        <button className="cardindash" onClick={()=>navigate("/create")}>Create Meeting</button>
      </div>

      </div>
    </>
  )
}

export default Dashboard
