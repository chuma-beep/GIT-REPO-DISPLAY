import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
//import { BrowserRouter  } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'


ReactDOM.createRoot(document.getElementById('root')).render(
 
 <React.StrictMode>
      <ErrorBoundary>
   <HelmetProvider>
<App/>
    </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>,
) 