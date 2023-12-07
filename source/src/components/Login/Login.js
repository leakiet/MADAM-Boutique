import { useState } from "react"
import './Login.css'
import { useNavigate } from "react-router-dom"

function Login({ checkLogin, errorLogin }) {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const checkUser = { loginUsername, loginPassword };
        checkLogin(checkUser);
        setLoginUsername('');
        setLoginPassword('');
    }
   
    return (       
        <div className="login">
            <form className="login-container" onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="login-fields">
                    <input type="text" placeholder='Email Address' value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/>
                </div>
                <button type="submit" value="Login">Continue</button>
                {errorLogin && <p style={{ color: 'red' }}>{errorLogin}</p>}
                <p className="login-login">Do not have an account? <span onClick={()=>navigate(`/Signup`)}>Sign up here</span></p>
                <div className="login-agree">
                    <input type="checkbox" name='' id='' />
                    <p><span>Remember your account?</span></p>
                </div>
            </form>
        </div>
    );
} 

export default Login;