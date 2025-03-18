import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './lib/i18n';

// Create root and render app
createRoot(document.getElementById('root')!).render(
  import.meta.env.DEV ? <App /> : <StrictMode><App /></StrictMode>
);