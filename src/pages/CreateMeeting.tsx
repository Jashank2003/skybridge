import React from 'react'
import useAuth from '../hooks/useAuth'
import Header from '../components/Header';
import '../css/createmeeting.css'
import {useNavigate} from 'react-router-dom'
import vc from "../assets/conference.png"
import ooo from "../assets/ooo.png"

function CreateMeeting() {
    useAuth();
    const navigate = useNavigate();
  return (
   <>
   <Header/>
    <div className="sectionofcreatemeet">

        <div className="sectionmeet">

        <div className="flexbox1">
             <img className="im" src={ooo} alt="" />
             <h3>1 on 1 meet</h3>
             <button className="cbutton" onClick={()=> navigate("/oneononemeet")}>
                Create Now 
             </button>
            </div>

        <div className="flexbox1">
             <img className="im" src={vc} alt="" />
             <h3>Video Conference</h3>
            <button className="cbutton" onClick={()=> navigate("/videoconference")}>
                Create Now
            </button>
            </div>

        </div>

    </div>
   </>
  )
}

export default CreateMeeting
