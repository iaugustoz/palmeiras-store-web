import ReactDOM from 'react-dom/client';
import './style.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes.tsx';
import PerfectScroll from './components/common/PerfectScroll.tsx';

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

if (!googleClientId) {
  console.error('VITE_GOOGLE_CLIENT_ID is not defined in .env file');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={googleClientId}>
      <PerfectScroll>
        <MainRoutes />
      </PerfectScroll>
    </GoogleOAuthProvider>
  </BrowserRouter>
);
