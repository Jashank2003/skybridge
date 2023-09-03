import React from 'react';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {Routes,Route} from "react-router-dom"
import CreateMeeting from './pages/CreateMeeting';
import OneOnOneMeeting from './pages/OneOnOneMeeting';

function App() {
  return (
   <>
    <Routes>
      <Route path ="/login" element={<Login/>} />
      <Route path ="/" element={<Dashboard/>} />
      <Route path ="*" element={<Dashboard/>} />
      <Route path ="/create" element={<CreateMeeting/>} />
      <Route path ="/oneononemeet" element={<OneOnOneMeeting/>} />
    </Routes>
   </>
  );
}

export default App;
