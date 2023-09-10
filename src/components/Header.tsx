import React, { useState,useEffect } from 'react'
import '../css/header.css'
import { useDispatch } from 'react-redux'
import { useNavigate,useLocation } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { signOut } from 'firebase/auth'
import { firebaseAuth } from '../utils/FirebaseConfig'
import { getCreateMeetingBreadCrumbs } from '../utils/breadCrumbs'
import logo from '../assets/logo.png'
import more from '../assets/more.png'

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () =>{
    setIsDropdownOpen(!isDropdownOpen)
  }
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
    
    <div className={`dropdown-container ${isDropdownOpen ? 'show' : ''}`}>
          <div className="dropdown-content">
            <button className='buttonlogout' onClick={logout}>logout</button>
           <button>Aboutus</button>
            </div>
              
            </div>
    <img className='morepic' src={more} alt="more about us" onClick={toggleDropdown} />

   </div>
   </div>
   </>
  )
}

export default Header
