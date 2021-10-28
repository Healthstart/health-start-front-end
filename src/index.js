import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css';
import App from './App';
import { Toaster } from 'react-hot-toast';
import dotenv from 'dotenv';
import { ProfileProvider } from './Hooks/useProfile';
import { RoutineProvider } from './Hooks/useRoutine';

dotenv.config();

ReactDOM.render(
    <React.StrictMode>
        <ProfileProvider>
            <RoutineProvider>
                <App />

                <Toaster />
            </RoutineProvider>
        </ProfileProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
