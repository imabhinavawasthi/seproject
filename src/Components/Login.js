import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { signInWithEmailAndPassword, getAuth, emailVerified } from 'firebase/auth';
import logo from '../Media/logog.gif';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [sucessmess, setSuccesmess] = useState('');
    const [errormess, setErrormess] = useState('');
    const auth = getAuth();
    const emailset = (e) => {
        setEmail(e.target.value);
    }
    const passwordset = (e) => {
        setPassword(e.target.value);
    }
    const navigate = useNavigate();
    const submitclick = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            const user = userCredentials.user;
                setSuccesmess('Logged in successfully');
                setTimeout(
                    () => {
                        setErrormess('');
                        navigate('/');
                    }, 1000)

        }).catch((error) => {
            console.log(error.message);
            if (error.message == 'Firebase: Error (auth/missing-email).')
                setErrormess('Enter Email');
            else if (error.message == 'Firebase: Error (auth/internal-error).')
                setErrormess('Enter Password');
            else if (error.message == 'Firebase: Error (auth/wrong-password).')
                setErrormess('Wrong Password');
            else if (error.message == 'Firebase: Error (auth/user-not-found).')
                setErrormess('User not found');
            else if (error.message == 'Firebase: Error (auth/invalid-email).')
                setErrormess('Invalid Email');
            else if (error.message == 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).')
                setErrormess('Access to this account has been temporarily disabled due to many failed login attempts. Try again later.');
            setTimeout(
                () => {
                    setErrormess('');
                }, 4000)
        })
    }
    return (
        <div className='text-center container'>
            <div className='row'>
                <div>
                    <form className="form-signin">
                        <img class="mb-4" src={logo} alt="" width="72" height="72" />
                        <h1 class="h3 mb-3 font-weight-normal">Please log in</h1>
                        {sucessmess && <>
                            <div className='alert alert-success'>{sucessmess}</div>
                        </>}
                        {errormess && <>
                            <div className='alert alert-danger'>{errormess}</div>
                        </>}
                        <label for="inputEmail" class="sr-only">Email address</label>
                        <input onChange={emailset} type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input onChange={passwordset} type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
                        <button onClick={submitclick} class="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
                        <p class="mt-5 mb-3 text-muted">© crackDSA.com</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
