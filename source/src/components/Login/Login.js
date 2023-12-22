import { useState } from "react"
import './Login.css'
import './Modal.css'
import { useNavigate } from "react-router-dom"

function Login({ checkLogin, errorLogin, toggleLogin, logged }) {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const checkUser = { loginUsername, loginPassword };
        checkLogin(checkUser);
    }


    return (       
        <div className="login">
            <form className="login-container" onSubmit={handleLogin}>
                <h1>Sign in</h1>
                <div className="login-fields">
                    <input type="text" placeholder='User Name' value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/>
                </div>
                <button type="submit" value="Login">Continue</button>
                <p className="login-login">Do not have an account? <span onClick={()=>navigate(`/Signup`)}>Sign up here</span></p>
            </form>
            {errorLogin && (
                <div className="modal-login overlay">
                        <div className="modal-login-content">
                        <h4>Sign in Fail, Please try again</h4>
                        <button className="close-modal" onClick={toggleLogin}>X</button>
                        </div>
                </div>)}
            {logged && (
                <div className="modal-login overlay">
                    <div className="modal-login-content">
                        <h4>Sign in successful</h4>
                        <button className="close-modal" onClick={() => {toggleLogin(); navigate('/cart')}}>X</button>
                    </div>
                </div>)}
        </div>
    );
} 

export default Login;