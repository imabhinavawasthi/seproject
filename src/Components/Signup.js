import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import { storage, db } from '../Firebasecong/Firebasecong'
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import logo from '../Media/logog.gif';

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [profilepic, setProfilepic] = useState();
    const [sucessmess, setSuccesmess] = useState('');
    const [errormess, setErrormess] = useState('');
    const [infomess, setInfomess] = useState('');

    const nameset = (e) => {
        setName(e.target.value);
    }
    const emailset = (e) => {
        setEmail(e.target.value);
    }
    const passwordset = (e) => {
        setPassword(e.target.value);
    }
    const profilepicset = (e) => {
        let selectedimage = e.target.files[0];

        if (selectedimage) {
            setProfilepic(selectedimage);
        }
        else {
            setErrormess('Please select profile pic');
            setTimeout(
                () => {
                    setErrormess('');
                }, 2000
            )
        }
    }
    const auth = getAuth();
    const navigate = useNavigate();
    const submitclick = (e) => {
        e.preventDefault();
        setInfomess('Registering New User...');
        console.log("hello");
        if (!name) {
            setInfomess('');
            setErrormess('Please enter Name');
            setTimeout(
                () => {
                    setErrormess('');
                }, 2000
            )
        }
        else if (!profilepic) {
            setInfomess('');
            setErrormess('Please select profile pic');
            setTimeout(
                () => {
                    setErrormess('');
                }, 2000
            )
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredentials) => {

                    const user = userCredentials.user;
                    const storageRef = ref(storage, `profile-images/${Date.now()}`);
                    // const storageRef =storage().ref(`profile-images`);
                    console.log("ok");
                    uploadBytes(storageRef, profilepic).then(() => {
                        getDownloadURL(storageRef).then((url) => {
                            addDoc(collection(db, 'users'), {
                                name, email, password, profilepic: url, uid: user.uid
                            }).then(() => {
                                setInfomess('');
                                setSuccesmess('User Registered!');
                                
                                const auth = getAuth();
                                
                                sendEmailVerification(user);
                                let msg = 'An email verification link has been sent to ' + user.email;
                                setInfomess(msg);
                                setSuccesmess('');
                                setTimeout(
                                    () => {
                                        setErrormess('');
                                        setInfomess('');
                                        navigate('/login');
                                    }, 1000)
                            }).catch((error) => {
                                setInfomess('');
                                setErrormess('error');
                                setTimeout(
                                    () => {
                                        setErrormess('');
                                    }, 2000
                                )
                            })

                        })
                    })
                })
                .catch((error) => {
                    console.log(error.message);
                    if (error.message == 'Firebase: Error (auth/email-already-in-use).') { setInfomess(''); setErrormess('User Already Exists! Please Login'); }
                    else if (error.message == 'Firebase: Error (auth/missing-email).') { setInfomess(''); setErrormess('Please Enter Email'); }
                    else if (error.message == 'Firebase: Error (auth/admin-restricted-operation).') { setInfomess(''); setErrormess('Please enter all the fields'); }
                    else if (error.message == 'Firebase: Error (auth/invalid-email).') { setInfomess(''); setErrormess('Invalid Email'); }
                    else if (error.message == 'Firebase: Error (auth/internal-error).') { setInfomess(''); setErrormess('Please Enter Password'); }
                    else if (error.message == 'Firebase: Error (auth/network-request-failed).') { setInfomess(''); setErrormess('Login Failed, Please check internet connection.'); }
                    else if (error.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).') { setInfomess(''); setErrormess('Password should be at least 6 characters'); }
                    setTimeout(
                        () => {
                            setErrormess('');
                        }, 4000)
                })

        }
    }
    return (
        <div>
            <div className='text-center container'>
                <div className='row'>
                    <div>
                        <form className="form-signin">

                            <img class="mb-4" src={logo} alt="" width="72" height="72" />
                            <h1 class="h3 mb-3 font-weight-normal">Please Sign in</h1>
                            {sucessmess && <>
                                <div className='alert alert-success'>{sucessmess}</div>
                            </>}
                            {errormess && <>
                                <div className='alert alert-danger'>{errormess}</div>
                            </>}
                            {infomess && <>
                                <div className='alert alert-info'>{infomess}</div>
                            </>}
                            <input onChange={nameset} type="text" id="inputName" class="form-control" placeholder="Name" autofocus="" required />
                            <input onChange={emailset} type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
                            <input onChange={profilepicset} accept="image/png, image/jpg, image/gif, image/jpeg" class="form-control" type="file" id="formFile" required />
                            <input onChange={passwordset} type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
                            <button onClick={submitclick} class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            <p class="mt-5 mb-3 text-muted">© crackDSA.com</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
