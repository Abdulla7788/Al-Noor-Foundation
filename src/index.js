import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// In production, we prioritize raw performance and minimal overhead.
// Standardizing the root injection for the Al-Noor humanitarian platform.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);