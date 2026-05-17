import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';
import LocomotiveScrollProvider from './components/LocomotiveScrollProvider.jsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        {/* 
          LocomotiveScrollProvider wraps entire app for smooth scrolling
          All scroll-related functionality is managed within this provider
        */}
        <LocomotiveScrollProvider>
          <App />
        </LocomotiveScrollProvider>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);