import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

console.log('main.jsx loaded')

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')

import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
