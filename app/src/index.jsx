import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './assets/css/colors.css';
import './assets/css/fonts.css';
import './assets/css/Principais.css';
import './assets/css/scrollbar.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
