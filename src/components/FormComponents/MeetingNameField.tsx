import React from 'react'

function MeetingNameField({ label, placeholder, value, setMeetingName }:
     { label: string, 
       placeholder: string,
       value: string, 
       setMeetingName: React.Dispatch<React.SetStateAction<string>>}) 
    {
    return (
       <>
        <div>
        <div>{label}</div>
         <input type="text" placeholder={placeholder} value={value} onChange={(e) => setMeetingName(e.target.value)} />
        </div>
       </>
    )
}

export default MeetingNameField
