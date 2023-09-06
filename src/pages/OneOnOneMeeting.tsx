import React,{useState} from 'react'
import Header from '../components/Header'
import MeetingNameField from '../components/FormComponents/MeetingNameField'
import MeetingUsersField from '../components/FormComponents/MeetingUsersField'
import useAuth from '../hooks/useAuth'
import useFetchUsers from '../hooks/useFetchUsers'
import '../css/oneononemeeting.css'

function OneOnOneMeeting() {
    useAuth() 
    // const [users] = useFetchUsers(); 
    const { users, loading, error } = useFetchUsers(); 
    const[meetingName , setMeetingName] = useState("")
    const [selectedUsers,setSelectedUsers] = useState([])
     
    const onUserChange = (selectedOptions:any)=>{
      setSelectedUsers(selectedOptions)

    }

    if (loading) {
      return <div>Loading...</div>; // Display a loading indicator while data is loading
  }

  if (error) {
      return <div>Error: {error}</div>; // Display an error message if an error occurred
  }

  return (
    <>
        <Header/>
        MIEN HUN ONE ON ONE MEET 
        <div className="center-container">
        <div className="content-container">
          
        <MeetingNameField label="Meeting Name" placeholder="Meeting Name" value={meetingName} setMeetingName={setMeetingName}/>
        <div className="select">
        
        <MeetingUsersField label="Invite" options={users || []} onChange={onUserChange}selectedOptions={selectedUsers} isClearable={false} placeholder="Select Users" singleSelection= {{asPlainText:true}} />
        </div>
        </div>
        </div>
    </>
  )
}

export default OneOnOneMeeting
