import { useState } from 'react';

function Home() {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function sayHi() {
        setLoading(true);
        try {
            const res = await fetch('/api/message');
            const data = await res.json();
            setMessage(data.text);
        } catch (err) {
            setMessage('Could not reach the API 😬');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="page">
            <h1>Welcome to Your Event Name</h1>
            <p className="subtitle">A workshop on going from zero to deployed.</p>

            <button onClick={sayHi} disabled={loading}>
                {loading ? 'Asking the backend...' : 'Say hi to the backend'}
            </button>

            {message && <p className="api-message">{message}</p>}
        </div>
    );
}

export default Home;