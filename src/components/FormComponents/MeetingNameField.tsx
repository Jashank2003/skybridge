import React from 'react'

function MeetingNameField({ label, placeholder, value, setMeetingName}:
   {
      label: string,
      placeholder: string,
      value: string,
      setMeetingName: React.Dispatch<React.SetStateAction<string>>,
      
   }) {
   return (
      <>
         <div>
            <input 
            type="text"
             placeholder={placeholder} 
             value={value} 
             required
             minLength={3}
             onChange={(e) => setMeetingName(e.target.value)}
             style={{
               background: 'none',
               border: 'none',
               borderBottom: '3px solid purple', // Initial border color is purple
               outline: 'none',
               transition: 'border-color 0.2s ease',
               color:'white',
               fontSize:'1.2rem',
               fontWeight: '500',
               paddingLeft:'3px',
               // margin: 'auto auto',
             }}
             onFocus={(e) => {
               e.target.style.borderColor = 'blue'; // Change border color on focus
             }}
             onBlur={(e) => {
               e.target.style.borderColor = 'purple'; // Change border color back to purple on blur
             }}
              />
         </div>
      </>
   )
}

export default MeetingNameField
