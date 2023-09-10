import React from 'react'
import { useNavigate } from 'react-router-dom'

function CreateMeetingButtons({createMeeting,}:{
    createMeeting:()=>void
}) {
    const navigate =useNavigate();
  return (
    <>
    
        <div>
            <button onClick={()=> navigate("/")} >Cancel</button>
            <button onClick={createMeeting} >Submit</button>
        </div>
   
    </>
  )
}

export default CreateMeetingButtons
