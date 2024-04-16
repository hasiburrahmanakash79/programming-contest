import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </AuthProvider>,
)
