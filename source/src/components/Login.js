import { useState } from "react"

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
        <div className="loginPage">
            <form onSubmit={handleLogin} >
                <h4>{erroLogin}</h4>
                <h2>Đăng Nhập</h2>
                <p><input type="text" placeholder="Tên Đăng Nhập" value={username} onChange={(e) => setUsername(e.target.value)}/></p>
                <p><input type="password" placeholder="Mật Khẩu" value={password} onChange={(e) => setPassword(e.target.value)}/></p>
                <p><input type="submit" value="Đăng Nhập"/></p>
            </form>
                <p><input type="submit" value="Đăng Ký"/></p>
        </div>
    );
} 
export default Login;