// Login.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        // This alert will be displayed when the component is mounted/rendered
        alert(`Usuario: 'usuario' // Contraseña: 'contrasena'`);
    }, []); // Trigger the effect only once when the component mounts

    const handleLogin = () => {
        // Simulamos una lógica de autenticación básica
        if (username === 'usuario' && password === 'contrasena') {
            // Almacenamos el estado de inicio de sesión en sessionStorage
            sessionStorage.setItem('isLoggedIn', 'true');
            onLogin();
        } else {
            alert('Credenciales incorrectas. Intenta de nuevo.');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card col-md-6">
                <div className="card-body ">
                    <h2 className="card-title mb-4">Login</h2>
                    <div className="mb-3">
                        <label className="form-label">Usuario:</label>
                        <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña:</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="btn btn-primary mx-auto d-block" onClick={handleLogin}>
                        Iniciar sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
