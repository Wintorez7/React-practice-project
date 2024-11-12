import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Toaster} from "react-hot-toast"
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter} from 'react-router-dom';


createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <App/>
            <Toaster/>
        </BrowserRouter>
       
    </>
)
