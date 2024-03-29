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
import MeetingMaxUserField from '../components/FormComponents/MeetingMaxUserField'

function OneOnOneMeeting() {
  useAuth()  
    const navigate = useNavigate();
    const { users, loading, error } = useFetchUsers(); 
    const uid = useAppSelector((bridge)=> bridge.auth.userInfo?.uid)
    const[meetingName , setMeetingName] = useState("")
    const [selectedUser,setSelectedUser] = useState<Array<UserType>>([])
    const [startDate,setStartDate] = useState(moment());
    const [size,setSize] = useState(1);
    const [anyoneCanJoin,setAnyoneCanJoin] = useState(false);


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
            meetingType: anyoneCanJoin ?"anyone can join" : "Video Conference",
            invitedUsers: anyoneCanJoin ? [] : selectedUser.map((user: UserType)=> user.uid),
            meetingDate: startDate.format('L'),
            maxUsers: anyoneCanJoin ? 100 : size,
            status:true,
          })
          navigate("/");
          alert("Meeting Scheduled Successfully");
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
      
       

        <div className="center-container">
        <h1>Schedule Your Meeting</h1>
        <div className="content-container">
        <label 
        style={{
          color:'white',
          fontSize:'1rem',
          fontWeight:'400',
          marginBottom:'2%',
        }}
        htmlFor="Anyone Can Join">Anyone Can Join :
         <input
           style={{
            marginBottom:'2%',
            marginLeft:'3%',
          }}
          type="checkbox" 
         checked={anyoneCanJoin} onChange={(e)=>setAnyoneCanJoin(e.target.checked)} />

         </label>

        <MeetingNameField 
        label="Meeting Name" 
        placeholder="Meeting Name" 
        value={meetingName} 
        setMeetingName={setMeetingName}/>

        <div className="select">
        {
            anyoneCanJoin ?
         <MeetingMaxUserField value={size}
         setValue={setSize}/>

          :
        <MeetingUsersField label="Invite" 
        options={users || []} 
        onChange={onUserChange}
        selectedOptions={selectedUser} 
        isClearable={false} 
        placeholder="Select Users" 
        singleSelection= {false} />
    }
        </div>

        <MeetingDateField selected={startDate} setStartDate={setStartDate}/>
       
          <CreateMeetingButtons createMeeting={createMeeting}/>
       
        </div>
        </div>
       
        
    </>
  )
}

export default OneOnOneMeeting
