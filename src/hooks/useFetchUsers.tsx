import React ,{useEffect, useState} from 'react'
import { useAppSelector } from '../app/hooks'
import { userRef } from '../utils/FirebaseConfig';
import { query,where,getDocs} from 'firebase/firestore';
import {UserType} from '../utils/Types'


// export default function useFetchUsers() {
//    const [users,setUsers] = useState<Array<UserType>>([])
//    const uid = useAppSelector((bridge) => bridge.auth.userInfo?.uid);
   
//    useEffect(()=>{
//       if(uid){
//          const getUsers = async()=>{
//             const firestoreQuery = query(userRef,where("uid","!=", uid));
//             const data = await getDocs(firestoreQuery);
//             const firebaseUsers: Array<UserType> =[];
//             data.forEach((user) =>{
//                const userData = user.data() as UserType;
//                firebaseUsers.push({
//                   ...userData,
//                   label:userData.name,
//                })
//             })
//             setUsers(firebaseUsers)
//          }
//          getUsers();
//       }
//    },[uid])
//    return[users]
// }


export default function useFetchUsers() {
   const [users, setUsers] = useState<Array<UserType> | null>(null); // Initialize as null
   const [loading, setLoading] = useState(true); // Add loading state
   const [error, setError] = useState<string | null>(null); // Add error state
   const uid = useAppSelector((bridge) => bridge.auth.userInfo?.uid);

   useEffect(() => {
       if (uid) {
           const getUsers = async () => {
               try {
                   const firestoreQuery = query(userRef, where("uid", "!=", uid));
                   const data = await getDocs(firestoreQuery);
                   const firebaseUsers: Array<UserType> = [];
                   data.forEach((user) => {
                       const userData = user.data() as UserType;
                       firebaseUsers.push({
                           ...userData,
                           label: userData.name,
                       });
                   });
                   setUsers(firebaseUsers);
                   setLoading(false); // Data has been loaded
               } catch (error) {
                   setError("Error fetching user data");
                   setLoading(false); // An error occurred
               }
           };
           getUsers();
       }
   }, [uid]);

   return { users, loading, error }; // Return an object with users, loading, and error
}


