import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const TASKS = [
  { id: 'td1', name: 'Eat', completed: true },
  { id: 'td2', name: 'Sleep', completed: false },
  { id: 'td3', name: 'Repeat', completed: false },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={TASKS} />
  </React.StrictMode>
);