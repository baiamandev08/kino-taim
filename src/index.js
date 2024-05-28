import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import DarkMood from "./container/darkMood/darkMood";
import "./i18n/I18n";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <DarkMood>
                <App/>
            </DarkMood>
        </BrowserRouter>
    </React.StrictMode>
);

