import { useState } from "react"
import './Login.css'
import { useNavigate } from "react-router-dom";

function Signup({ checkSignup }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        // Validation (you may want to add additional checks)
        if (!username || !email || !password) {
          alert('Please fill in all fields');
          return;
        }
        // Create the account object
        const account = {username,email,password}
        checkSignup(account)
      };
  
   
    return ( 
        <div className="login">
            <form className="login-container" onSubmit={handleSignUp}>
                <h1>Sign Up</h1>
                <div className="login-fields">
                    <input type="text" placeholder="Your Name" value={username} onChange={(event) => setUsername(event.target.value)} />
                    <input type="email" placeholder='Email Address' value={email} onChange={(event) => setEmail(event.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button type="submit">Continue</button>
                <p className="login-login">Already have an account? <span onClick={()=>navigate(`/Login`)}>Login here</span></p>
                <div className="login-agree">
                    <input type="checkbox" name='' id='' />
                    <p><span>By continuing, I agree to the terms of use & privacy policy</span></p>
                </div>
            </form>
        </div>
    );
} 

export default Signup;