import React from 'react'
import useAuth from '../hooks/useAuth'
import Header from '../components/Header';
import '../css/createmeeting.css'
import {useNavigate} from 'react-router-dom'

function CreateMeeting() {
    useAuth();
    const navigate = useNavigate();
  return (
   <>
   <Header/>
    <div className="section">
        <button onClick={()=> navigate("/oneononemeet")} className="card">
            Create 1 on 1 meeting 
        </button>
        <button onClick={()=> navigate("/videoconference")} className="card">
            Create video conference
        </button>
    </div>
   </>
  )
}

export default CreateMeeting
