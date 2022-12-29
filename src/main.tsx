import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactGA from 'react-ga4'
import App from './App'
import './index.css'

ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
