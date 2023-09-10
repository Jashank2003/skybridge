import { onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { firebaseAuth } from '../utils/FirebaseConfig';
import { setUser } from '../app/slices/AuthSlice';

function useAuth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(firebaseAuth,(currentUser)=>{
            if(!currentUser){
                navigate("/login")
            } 
            else{
                console.log(currentUser)
                dispatch(setUser({
                    uid:currentUser.uid,
                    email:currentUser.email,
                    name:currentUser.displayName,
                }))
            }
        });
        return ()=> unsubscribe()
    },[dispatch,navigate])
}

export default useAuth
