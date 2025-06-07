import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import '../styles/register.scss'
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
        <div className='auth-container'>
            <h2>Register</h2>
            <form className='auth-form' onSubmit={handleRegister}>
                <input type="text" placeholder='Fullname' value={fullName} onChange={(e)=>setFullName(e.target.value)} required />
                <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                {error && <p style={{color: "red"}}>{error}</p>}
                <button type="submit">Qeydiyyat</button>
            </form>
        </div>
    );
};

export default Register;
