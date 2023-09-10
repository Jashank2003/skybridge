import React,{useState} from 'react'
import '../css/oneononemeeting.css'
import Header from '../components/Header'
import MeetingNameField from '../components/FormComponents/MeetingNameField'
import MeetingUsersField from '../components/FormComponents/MeetingUsersField'
import MeetingDateField from '../components/FormComponents/MeetingDateField'
import useAuth from '../hooks/useAuth'
import useFetchUsers from '../hooks/useFetchUsers'
import moment from 'moment';
import CreateMeetingButtons from '../components/FormComponents/CreateMeetingButtons'
import { addDoc} from 'firebase/firestore'
import { meetingsRef } from '../utils/FirebaseConfig'
import { generateMeetingID } from '../utils/generateMeetingID'
import { useAppSelector } from '../app/hooks'
import { UserType } from '../utils/Types'
import { useNavigate } from 'react-router-dom'

function OneOnOneMeeting() {
  useAuth()  
    const navigate = useNavigate();
    const { users, loading, error } = useFetchUsers(); 
    const uid = useAppSelector((bridge)=> bridge.auth.userInfo?.uid)
    
    const[meetingName , setMeetingName] = useState("")
    const [selectedUser,setSelectedUser] = useState<Array<UserType>>([])
    const [startDate,setStartDate] = useState(moment());
    const [UID , setUID] = useState("");


    const onUserChange = (selectedOptions:Array<UserType>)=>{
      setSelectedUser(selectedOptions)
      console.log()      
    }
   
    // console.log([selectedUser[1].uid]);
    // console.log(selectedUser)
    const createMeeting = async ()=>{

      try{

        if(meetingName.length>0){
          const meetingId = generateMeetingID();  
          
        
          await addDoc(meetingsRef,{
            createdBy: uid,
            meetingId,
            meetingName,
            meetingType:"1-on-1",
            invitedUsers:[selectedUser[0].uid],
            meetingDate: startDate.format('L'),
            maxUsers:1,
            status:true,
          })
          navigate("/");
        }
        else{
          alert("please enter meeting Name ")
        }
      }
      catch{
        console.log("Internal Server Error")
      }

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
          
        <MeetingNameField 
        label="Meeting Name" 
        placeholder="Meeting Name" 
        value={meetingName} 
        setMeetingName={setMeetingName}/>

        <div className="select">
        <MeetingUsersField label="Invite" 
        options={users || []} 
        onChange={onUserChange}
        selectedOptions={selectedUser} 
        isClearable={false} 
        placeholder="Select Users" 
        singleSelection= {{asPlainText:true}} />
        </div>
        <MeetingDateField selected={startDate} setStartDate={setStartDate}/>
       
          <CreateMeetingButtons createMeeting={createMeeting}/>
       
        </div>
        </div>
       
        
    </>
  )
}

export default OneOnOneMeeting
