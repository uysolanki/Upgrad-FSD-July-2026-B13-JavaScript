import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import DemoContextProvider from './contexts/DemoContextProvider.jsx';
import ProductContextProvider from './contexts/ProductContextProvider.jsx';

createRoot(document.getElementById('root')).render(
    <ProductContextProvider>
        <DemoContextProvider>
            <App />
        </DemoContextProvider>
    </ProductContextProvider>
)
