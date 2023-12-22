import { useState } from "react"
import './Login.css'
import './Modal.css'
import { useNavigate } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const navigate = useNavigate();
    const [correctUsername, setCorrectUsername] = useState(false);
    const [correctEmail, setCorrectEmail] = useState(false);
    const [correctAll, setCorrectAll] = useState(false);
    const [correctPolicy, setCorrectPolicy] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        //Validate user
        const regex = /^[a-zA-Z0-9]+$/;
        if (!regex.test(username)) {
            // alert("Username cannot contain spaces or special characters.");
            setCorrectUsername(true)
            return;
        } 
        // Validate email
        const regexs = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!regexs.test(email)) {
            // alert("Please enter a valid email address.");
            setCorrectEmail(true)
            return;
        }
        // Validation
        if (!username || !email || !password) {
        //   alert('Please fill in all fields');
          setCorrectAll(true)
          return;
        }
        // Check if user agrees to terms and conditions
        if (!isAgreed) {
            // alert('Please agree to the terms and conditions');
            setCorrectPolicy(true)
            return;
        }
        const account = { username, email, password };

        let existingAccounts = JSON.parse(localStorage.getItem('user-data')) || [];
        existingAccounts.push(account);
        localStorage.setItem('user-data', JSON.stringify(existingAccounts));

        // alert('User successfully signed up');
        setIsRegistered(true)
        console.log(localStorage)
    };

    const toggleUsername = () => {
        setCorrectUsername(!correctUsername)
    }
    const toggleEmail = () => {
        setCorrectEmail(!correctEmail)
    }
    const toggleAll = () => {
        setCorrectAll(!correctAll)
    }
    const togglePolicy = () => {
        setCorrectPolicy(!correctPolicy)
    }
    const toggleRegistered = () => {
        setIsRegistered(!isRegistered);
        navigate('/login');
    }
  
   
    return ( 
        <div className="signup">
            <form className="sign-container" onSubmit={handleSignUp}>
                <h1>Create Account</h1>
                <div className="login-fields">
                    <input type="text" placeholder="User Name" value={username} onChange={(e)=> setUsername(e.target.value)} />
                    <input type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button type="submit">Continue</button>
                <p className="login-login">Already have an account? <span onClick={()=>navigate(`/Login`)}>Sign in here</span></p>
                <div className="login-agree">
                    <p><input type="checkbox" checked={isAgreed} onChange={() => setIsAgreed(!isAgreed)}/></p>
                    <p><span>By continuing, I agree to the terms of use & privacy policy</span></p>
                </div>
            </form>

            {correctUsername && (
                <div className="modal-login overlay">
                    <div className="modal-login-content">
                        <h4>Username cannot contain spaces or special characters.</h4>
                        <button className="close-modal" onClick={toggleUsername}>X</button>
                    </div>
                </div>)}
            {correctEmail && (
                <div className="modal-login overlay">
                    <div className="modal-login-content">
                        <h4>Please enter a valid email address.</h4>
                        <button className="close-modal" onClick={toggleEmail}>X</button>
                    </div>
                </div>)}
            {correctAll && (
                <div className="modal-login overlay">
                    <div className="modal-login-content">
                        <h4>Please enter all fields.</h4>
                        <button className="close-modal" onClick={toggleAll}>X</button>
                    </div>
                </div>)}
             {correctPolicy && (
                <div className="modal-login overlay">
                    <div className="modal-login-content">
                        <h4>Please agree to the terms and conditions.</h4>
                        <button className="close-modal" onClick={togglePolicy}>X</button>
                    </div>
                </div>)}
            {isRegistered && (
                <div className="modal-login overlay">
                    <div className="modal-login-content">
                        <h4>Sign up successful</h4>
                        <button className="close-modal" onClick={toggleRegistered}>X</button>
                    </div>
                </div>)}


        </div>
    );
} 

export default Signup;