import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LoopProvider } from './LoopProvider';

ReactDOM.render(
    <React.StrictMode>
        <LoopProvider>
          <App />
        </LoopProvider>
    </React.StrictMode>, 
    document.getElementById('root'));
