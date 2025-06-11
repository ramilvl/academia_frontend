import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import '../styles/register.scss'
import {useState} from 'react'
import {auth} from '../firebase/config'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    async function handleRegister(e: React.FormEvent){
        e.preventDefault();
        setError("");

        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            updateProfile((await userCredential).user, {
                displayName: fullName,
            });
            navigate("/login")
        }
        catch(err:any){
            setError(err.message)
        }
    }

    return (
        <div className="login_container">
            <div className="login_left_panel">
                <img src="/assets/login.png" alt="photo" />
            </div>

            <div className="login_right_panel">
                <span>Qeydiyyat</span>
                <form className="auth-form" onSubmit={handleRegister}>
                    <input type="text" placeholder='Tam Ad' value={fullName} onChange={(e)=>setFullName(e.target.value)} required />
                    <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    <input type="password" placeholder='Şifrə' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    {error && <p style={{color: "red"}}>{error}</p>}
                <button type="submit">Qeydiyyat</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
