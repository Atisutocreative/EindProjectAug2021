import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import LoginContext from "./components/Context/LoginContext"

ReactDOM.render(
    <React.StrictMode>
        <LoginContext>
        <App />
        </LoginContext>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
