import React,{ useState, useEffect } from 'react'
import { auth, db } from '../Firebasecong/Firebasecong'
import { doc, collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router';

const Welcome = () => {
    const [user, setUser] = useState('');
    function GetCurrentUser() {
        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    const getUser=async()=>{
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                        const data = await getDocs(q);
                        setUser(data.docs.map((doc) => ({ ...doc.data (),id:doc.id})));
                    }
                    getUser();
                }
                else{
                    setUser(null);
                }
            })
        },[])
        return user;
    }
    GetCurrentUser();
    if(user==undefined)console.log("no");
  return (
    <div>
      <h1>Welcome {user.name}</h1>
    </div>
  )
}

export default Welcome
