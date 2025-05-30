import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Provider } from 'react-redux';
import { store } from './state/store.ts';

createRoot(document.getElementById("root")!).render(
<React.StrictMode>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
</React.StrictMode>
);
