import React from 'react'
import '../css/dashboard.css'
import { useAppSelector } from '../app/hooks'
import useAuth from '../hooks/useAuth'
import Header from '../components/Header';
import {useNavigate} from 'react-router-dom'

function Dashboard() {
  useAuth();
  const navigate = useNavigate();
  return (
    <>
    <Header/>

    <div className="createameet">
      <div>

        <button className="card" onClick={()=>navigate("/create")}> create a meeting</button>
      </div>

      <div>

        <button className="card" onClick={()=>navigate("/create")}> View meeting </button>
      </div>

      <div>

        <button className="card" onClick={()=>navigate("/create")}> customize meet</button>
      </div>

    </div>
    </>
  )
}

export default Dashboard
