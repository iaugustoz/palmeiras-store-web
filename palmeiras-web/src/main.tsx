import ReactDOM from 'react-dom/client';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes.tsx';

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

if (!googleClientId) {
  console.error('VITE_GOOGLE_CLIENT_ID is not defined in .env file');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={googleClientId}>
      <MainRoutes />
    </GoogleOAuthProvider>
  </BrowserRouter>
);
