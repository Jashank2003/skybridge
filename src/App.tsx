import React from 'react';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {Routes,Route} from "react-router-dom"
import CreateMeeting from './pages/CreateMeeting';
import OneOnOneMeeting from './pages/OneOnOneMeeting';
import VideoConference from './pages/VideoConference';
// import { EuiProvider } from '@elastic/eui';
import "@elastic/eui/dist/eui_theme_dark.css"
import ViewMeet from './pages/ViewMeet';
import MyMeetings from './pages/MyMeetings';
import InvitedMeetings from './pages/InvitedMeetings';
import JoinMeeting from './pages/JoinMeeting';



function App() {
  return (
   
    <Routes>
      <Route path ="/login" element={<Login/>} />
      <Route path ="/" element={<Dashboard/>} /> 
      <Route path ="*" element={<Dashboard/>} />
      <Route path ="/create" element={<CreateMeeting/>} />
      <Route path ="/oneononemeet" element={<OneOnOneMeeting/>} />
      <Route path ="/videoconference" element={<VideoConference/>} />
      <Route path ="/viewmeet" element={<ViewMeet/>} />
      <Route path ="/mymeetings" element={<MyMeetings/>} />
      <Route path ="/invitedmeetings" element={<InvitedMeetings/>} />
      <Route path ="/join/:id" element={<JoinMeeting/>} />
    </Routes>
 
  );
}

export default App;
