import { useState } from "react"
import './Login.css'
import { useNavigate } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        //Validate user
        const regex = /^[a-zA-Z0-9]+$/;
        if (!regex.test(username)) {
            alert("Username cannot contain spaces or special characters.");
            return;
        } 
        // Validate email
        const regexs = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!regexs.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        // Validation
        if (!username || !email || !password) {
          alert('Please fill in all fields');
          return;
        }
        // Check if user agrees to terms and conditions
        if (!isAgreed) {
            alert('Please agree to the terms and conditions');
            return;
        }
        const account = { username, email, password };

        let existingAccounts = JSON.parse(localStorage.getItem('user-data')) || [];
        existingAccounts.push(account);
        localStorage.setItem('user-data', JSON.stringify(existingAccounts));

        alert('User successfully signed up');
        console.log(localStorage)
        navigate(`/login`);
    };
  
   
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
                <p className="login-login">Already have an account? <span onClick={()=>navigate(`/Login`)}>Login here</span></p>
                <div className="login-agree">
                    <p><input type="checkbox" checked={isAgreed} onChange={() => setIsAgreed(!isAgreed)}/></p>
                    <p><span>By continuing, I agree to the terms of use & privacy policy</span></p>
                </div>
            </form>
        </div>
    );
} 

export default Signup;