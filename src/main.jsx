import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from '../src/Route.jsx';
import AuthProvider from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <AuthProvider>
   <RouterProvider router={router} />
   <ToastContainer />
   </AuthProvider>
  </StrictMode>,
)
