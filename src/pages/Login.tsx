import { useState } from 'react';
import '../styles/Login.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import type { JSX } from 'react/jsx-runtime';

function Login(): JSX.Element {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const validateInputs = () => {
        if (!email.trim() || !password.trim()) {
            return "Email və şifrə tələb olunur.";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return "Zəhmət olmasa düzgün email daxil edin.";
        }

        if (password.length < 6) {
            return "Şifrə ən azı 6 simvoldan ibarət olmalıdır.";
        }

        return "";
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const validationError = validateInputs();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home');
        } catch (err: any) {
            if (err.code === 'auth/user-not-found') {
                setError("Belə bir istifadəçi mövcud deyil.");
            } else if (err.code === 'auth/wrong-password') {
                setError("Yanlış şifrə daxil edilib.");
            } else {
                setError("Giriş zamanı xəta baş verdi.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login_container">
            <div className="login_left_panel">
                <img src="/assets/login.png" alt="photo" />
            </div>

            <div className="login_right_panel">
                <span>Welcome</span>
                <form className="auth-form" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                    />
                    <input
                        type="password"
                        placeholder="Şifrə"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit" disabled={loading}>
                        {loading ? 'Giriş edilir...' : 'Daxil ol'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
