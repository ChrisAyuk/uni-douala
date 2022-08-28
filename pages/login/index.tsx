import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router';


const login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();
    const [isAuthenticated,setIsAuthenticated] = useState(true);

    const loginUser = () => {
        // LOGIN
        console.log("student details")
        if(name == 'admin' && password == "unidouala") {
            console.log("LOGIN");
            localStorage.setItem('auth', JSON.stringify({isLogin: true}))    
            router.push('/');
            setError(false);
        }else {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000)
        }
        
    }

    useEffect(() => {
        let loginData:any = localStorage.getItem('auth');

        if(loginData) {
            let cleanData = JSON.parse(loginData);
            if(cleanData.isLogin) {
                router.push('/');
            }else {
                setIsAuthenticated(false);
            }
        }
    })
  
    return (
       !isAuthenticated ? <div className="login-container">
            <div className="login">
                <h1>Login</h1>
                {error && <div className="error">
                    Invalid username or password
                </div>}
                <br />
                <div className="username">
                    <input type="text" value={name} onChange={(e:any) => setName(e.target.value)} placeholder="Username" required/>
                </div>
                <div className="password">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                </div>
                <button className="login-btn" onClick={loginUser}>Login</button>
            </div>
        </div> : ""
    )
}

export default login;