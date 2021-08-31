import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css';
import App from './App';
import { Toaster } from 'react-hot-toast';
import dotenv from 'dotenv';

dotenv.config();

ReactDOM.render(
    <React.StrictMode>
        <App />

        <Toaster />
    </React.StrictMode>,
    document.getElementById('root')
);
