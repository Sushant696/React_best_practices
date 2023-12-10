import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import UseCallback from './bestPractices/hooks/useCallback'
// import UseStateHook from './bestPractices/hooks/hooks.jsx'
// import UsememoHook from './bestPractices/hooks/usememo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <UseStateHook/> */}
    {/* <UseCallback/> */}
    {/* <UsememoHook/> */}
  </React.StrictMode>,
)
