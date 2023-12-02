import { useState } from "react"
import './Login.css'

function Login({ checkLogin, erroLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        const checkUser = { username, password };
        checkLogin(checkUser);
        setUsername('');
        setPassword('');
    }
   
    return (        
        <div className="login">
            <div className="login-container">
                <h1>Sign Up</h1>
                <div className="login-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder='Email Address'/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="login-login">Already have an account? <span>Login here</span></p>
                <div className="login-agree">
                    <input type="checkbox" name='' id='' />
                    <p><span>By continuing, I agree to the terms of use & privacy policy</span></p>
                </div>
            </div>
        </div>

        /* <div className="login">
            <form onSubmit={handleLogin} >
                <h4>{erroLogin}</h4>
                <h2>Log In</h2>
                <p><input type="text" placeholder="Tên Đăng Nhập" value={username} onChange={(e) => setUsername(e.target.value)}/></p>
                <p><input type="password" placeholder="Mật Khẩu" value={password} onChange={(e) => setPassword(e.target.value)}/></p>
                <p><input type="submit" value="Đăng Nhập"/></p>
            </form>
                <p><input type="submit" value="Đăng Ký"/></p>
        </div>
    </div> */
    );
} 

export default Login;