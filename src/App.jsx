import React, { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Courses from './Components/Courses'
import Youtube from './Components/Youtube'
import Error from './Components/Error'
import Login from './Components/Login'
import Signup from './Components/Signup'
import UserProfile from './Components/UserProfile'
import Welcome from './Components/Welcome'
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth, db } from './Firebasecong/Firebasecong'
import { doc, collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import Footer from './Components/Footer';

const App = () => {
    const [user, setUser] = useState('');
    function GetCurrentUser() {
        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    const getUser = async () => {
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                        const data = await getDocs(q);
                        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                    }
                    getUser();
                }
                else {
                    setUser(null);
                }
            })
        }, [])
        return user;
    }
    GetCurrentUser();
    if (user) {
        console.log("haioyes");
        console.log(user);
    }
    else console.log("naio");
    return (
        <div>
            {user ? <div>
                <BrowserRouter>
                    <Navbar userdata={user[0]} />
                    <Routes>
                        <Route exact path="/" element={<Home userdata={user[0]} />} />
                        <Route exact path="/doctors" element={<Courses />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route exact path="/consultant" element={<Youtube />} />
                        <Route exact path="/error404" element={<Error />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/signup" element={<Signup />} />
                        <Route exact path="/profile" element={<UserProfile userdata={user[0]} />} />
                        <Route exact path="/welcome" element={<Welcome />} />
                        <Route path="*" element={<Navigate replace to="/error404" />} />
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </div> : <div>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/doctors" element={<Courses />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route exact path="/consultant" element={<Youtube />} />
                        <Route exact path="/error404" element={<Error />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/signup" element={<Signup />} />
                        <Route path="*" element={<Navigate replace to="/error404" />} />
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </div>}
        </div>
    );
}

export default App;