import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Testimonial from './components/testomonial.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      {/* <App /> */}
      <Testimonial />
    </div>
  </StrictMode>
);
