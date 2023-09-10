import React, { useState,useEffect } from 'react'
import '../css/header.css'
import { useDispatch } from 'react-redux'
import { useNavigate,useLocation } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { signOut } from 'firebase/auth'
import { firebaseAuth } from '../utils/FirebaseConfig'
import { getCreateMeetingBreadCrumbs } from '../utils/breadCrumbs'
import logo from '../assets/logo.png'

function Header() {

  const navigate = useNavigate()

  const handleLogoClick  = ()=> {
      window.location.reload();
  }
    const location = useLocation()
    const username = useAppSelector((bridge) =>bridge.auth.userInfo?.name)
    const [breadCrumbs,setBreadCrumbs] = useState([{text:"Dashboard"}])
    const [isResponsive,setIsResponsive] = useState(false)
    const dispatch = useDispatch();

    // Functions
    const logout = ()=>{
    signOut(firebaseAuth);
    }

    useEffect(()=>{
      const {pathname} = location;
      if(pathname==="/create") setBreadCrumbs(getCreateMeetingBreadCrumbs(navigate));
    },[location,navigate])

  return (
   <>
   <div className="navbar">
    <div className="logos">
    <img className='logoshape' onClick={handleLogoClick } src={logo} alt="Nhi hai img" />
    <div className="logo">SkyBridge</div>
    </div>
   <div className="header">
    <h3 className='head'>hello {username}</h3>
    <button className='buton' onClick={logout}>logout</button>
   </div>
   </div>
   </>
  )
}

export default Header
