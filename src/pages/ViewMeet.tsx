import React from 'react'
import Header from '../components/Header'
import {useNavigate} from 'react-router-dom'
import '../css/createmeeting.css'

function ViewMeet() {
  const navigate = useNavigate();
  return (
    // <>
    // <Header/>
    // <div>
    //    <button className="mymeet" onClick={()=> navigate("/mymeetings")}>Meetings created by you </button>
    //    <button className="myinvitedmeet" onClick={()=> navigate("/invitedmeetings")}>Meetings you are invited to </button>
    // </div>
    // </>
    <>
    <Header/>
     <div className="sectionofcreatemeet">
 
         <div className="sectionmeet">
 
         <div className="flexbox1">
              {/* <img className="im" src={ooo} alt="" /> */}
              {/* <h3>1 on 1 meet</h3> */}
              <button className="mymeet cbutton" onClick={()=> navigate("/mymeetings")}>Meetings created by you </button>
             </div>
 
         <div className="flexbox1">
              {/* <img className="im" src={vc} alt="" /> */}
              {/* <h3>Video Conference</h3> */}
              <button className="myinvitedmeet cbutton" onClick={()=> navigate("/invitedmeetings")}>Meetings you are invited to </button>
             </div>
 
         </div>
 
     </div>
    </>
    
  )
}

export default ViewMeet
