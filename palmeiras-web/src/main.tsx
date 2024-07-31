import PerfectScroll from './components/common/PerfectScroll.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/routes.tsx';
import './style.css';
import 'swiper/css';
import 'swiper/bundle';

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

if (!googleClientId) {
  console.error('VITE_GOOGLE_CLIENT_ID is not defined in .env file');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={googleClientId}>
    <PerfectScroll>
      <AppRouter />
    </PerfectScroll>
  </GoogleOAuthProvider>
);
