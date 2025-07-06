import { useState } from 'react';
import '../styles/Login.scss';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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
            const response = await fetch("http://localhost:8080/v1/auth/sign-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                if (response.status === 401) {
                    setError("Email və ya şifrə yanlışdır.");
                } else {
                    setError("Server xətası baş verdi.");
                }
                return;
            }

            const data = await response.json();
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("user", JSON.stringify(data.user));

            navigate('/home');
        } catch {
            setError("Şəbəkə xətası baş verdi.");
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = () => {
        navigate('/forget-password');
    };

    return (
        <div className="login_container">
            <div className="login_left_panel">
                <img className='img1' src="/assets/login.png" alt="Login" />
            </div>

            <div className="login_right_panel">
                <span>Welcome</span>
                <form className="auth-form" onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <label>Email</label>
                        <div className="input-field">
                            <MdEmail className="icon" />
                            <input
                                type="email"
                                placeholder="Emailinizi daxil edin"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-wrapper">
                        <label>Şifrə</label>
                        <div className="input-field">
                            <MdLock className="icon" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Şifrənizi daxil edin"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {showPassword ? (
                                <AiOutlineEyeInvisible className="eye-icon" onClick={() => setShowPassword(false)} />
                            ) : (
                                <AiOutlineEye className="eye-icon" onClick={() => setShowPassword(true)} />
                            )}
                        </div>
                        <p className="forgot-password" onClick={handleForgotPassword}>
                            Şifrəni unutmusunuz?
                        </p>
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit" disabled={loading}>
                        {loading ? 'Giriş edilir...' : 'Daxil ol'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
