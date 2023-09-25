import React from 'react'
import { useNavigate } from 'react-router-dom'

function CreateMeetingButtons({createMeeting, isEdit,closeFlyout}:{
    createMeeting:()=>void;
    isEdit?:boolean;
    closeFlyout?: () =>{};
}) {
    const navigate =useNavigate();
    const buttonStyle = {
      backgroundColor: 'purple', // Set your desired background color
      color: 'white',
      padding: '5px 8px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginRight: '10px',
      transition: 'background-color 0.3s'
    };
  
    const hoverStyle = {
      backgroundColor: '#4b0082', // Set your desired hover background color
    };
  
    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor;
    };
  
    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
    };
    
  return (
    <>
    
        <div style={{
          marginTop: '5%',
          
        }}>
            <button 
            onClick={()=> (isEdit ? closeFlyout!(): navigate("/"))} 
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >Cancel</button>
            <button 
             style={buttonStyle}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
            onClick={createMeeting} >{isEdit? "Edit Meeting" : "Create Meet"}</button>
        </div>
   
    </>
  )
}

export default CreateMeetingButtons
