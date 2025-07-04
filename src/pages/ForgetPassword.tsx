import { useState } from 'react';
import '../styles/ForgetPassword.scss';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const validateForm = (): string => {
        if (!email.trim() || !newPassword.trim() || !confirmPassword.trim()) {
            return 'Bütün sahələri doldurun.';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return 'Zəhmət olmasa düzgün email daxil edin.';
        }

        if (newPassword.length < 6) {
            return 'Yeni şifrə ən azı 6 simvoldan ibarət olmalıdır.';
        }

        if (newPassword !== confirmPassword) {
            return 'Şifrələr eyni deyil.';
        }

        return '';
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/api/auth/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, newPassword }),
            });

            if (!response.ok) {
                setError('Server xətası baş verdi.');
                return;
            }

            setSuccess('Şifrəniz uğurla dəyişdirildi!');
            setTimeout(() => navigate('/login'), 2000);
        } catch {
            setError('Şəbəkə xətası baş verdi.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="forgot_password_container">
            <h2>Change your password</h2>
            <form onSubmit={handleSubmit} className="forgot-password-form">
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                />
                <input
                    type="password"
                    name="new-password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    autoComplete="new-password"
                />
                <input
                    type="password"
                    name="confirm-password"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="new-password"
                />


                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}

                <button type="submit" disabled={loading}>
                    {loading ? 'Dəyişdirilir...' : 'Change my password'}
                </button>
            </form>
        </div>
    );
}

export default ForgotPassword;
