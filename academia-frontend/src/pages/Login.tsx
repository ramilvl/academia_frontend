import { useState } from 'react';
import '../styles/Login.scss'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase/config'
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    async function handleLogin(e: React.FormEvent){
        e.preventDefault();
        setError("");

        try{
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/");
        }
        catch(err: any){
            setError(err);
        }
    }

    return(
        <div className="login_container">

            <div className="login_left_panel">
                <img src="../assets/login.png" alt="photo" />
            </div>

            <div className="login_right_panel">
                <span>Welcome</span>
                <form className="auth-form" onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}  required />
                    {error && <p style={{color: 'red'}}>{error}</p>}
                    <button type="submit">Daxil ol</button>
                </form>
            </div>

        </div>
    )
}

export default Login;