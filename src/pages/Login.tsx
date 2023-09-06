import React from 'react'
import '../css/login.css'
import {useNavigate} from 'react-router-dom'
import { setUser } from '../app/slices/AuthSlice';
import { useAppDispatch } from '../app/hooks';

// Firebase imports
import { GoogleAuthProvider, signInWithPopup ,onAuthStateChanged} from 'firebase/auth'
import { firebaseAuth, userRef } from '../utils/FirebaseConfig';
import { query,getDocs,where,addDoc,collection} from 'firebase/firestore';


function Login() {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser){
      navigate("/")
    }
  })
  const login = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName, email, uid },
    } = await signInWithPopup(firebaseAuth, provider);

    if (email) {
      const firestoreQuery = query(userRef, where("uid", "==", uid))
      const fetchedUsers = await getDocs(firestoreQuery)
      if (fetchedUsers.docs.length === 0) {
        await addDoc(userRef, {
          uid,
          name: displayName,
          email,
        });
      }
    }
    dispatch(setUser({uid,name:displayName,email}))
    navigate("/")
  }

  return (
    <>
      {/* <div>hello welcome to skybridge</div>

      <button className='loginbutton' onClick={login}>login here</button> */}

      <div className="container">
      <h1 className="heading"><span className="lelo">Welcome to</span> SkyBridge</h1>
    </div>
    <div className="paraco">
      <p className="para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, ex!
        Veniam vero a deleniti, reprehenderit maxime deserunt cum nobis
        veritatis adipisci, id suscipit ea nemo assumenda quasi doloremque
        velit. Laudantium.
      </p>
    </div>

    <div className="buu">
      <button className="button" onClick={login}>Sign in with google</button>
    </div>
    </>
  )
}

export default Login
