import React from 'react';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {Routes,Route} from "react-router-dom"
import CreateMeeting from './pages/CreateMeeting';
import OneOnOneMeeting from './pages/OneOnOneMeeting';
// import { EuiProvider } from '@elastic/eui';
import "@elastic/eui/dist/eui_theme_dark.css"
import ViewMeet from './pages/ViewMeet';



function App() {
  return (
   
    <Routes>
      <Route path ="/login" element={<Login/>} />
      <Route path ="/" element={<Dashboard/>} />
      <Route path ="*" element={<Dashboard/>} />
      <Route path ="/create" element={<CreateMeeting/>} />
      <Route path ="/oneononemeet" element={<OneOnOneMeeting/>} />
      <Route path ="/viewmeet" element={<ViewMeet/>} />
    </Routes>
 
  );
}

export default App;
