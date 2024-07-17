import ReactDOM from 'react-dom/client';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="<your_client_id>">
      <MainRoutes />
    </GoogleOAuthProvider>
  </BrowserRouter>
);
