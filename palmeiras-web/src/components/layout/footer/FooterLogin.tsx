import Logotipo from '@/components/common/Logotipo';
import { Link } from 'react-router-dom';

const FooterLogin = () => {
  return (
    <footer className="border-t-2 py-4 px-8 bg-green-900">
      <div className="flex justify-between items-center">
        <div>
          <Logotipo color="text-white" />
        </div>

        <nav className="hidden sm:flex items-center gap-x-5">
          <Link to="/cookies" className="text-sm text-white">
            Cookies
          </Link>

          <Link to="/aviso-legal" className="text-sm text-white">
            Aviso Legal
          </Link>

          <Link to="/termos-e-condicoes" className="text-sm text-white">
            Termos & Condições
          </Link>
        </nav>
      </div>

      <div className="sm:hidden border my-5"></div>

      <nav className="flex justify-center gap-x-5 sm:hidden">
        <Link to="/cookies" className="text-sm text-white">
          Cookies
        </Link>

        <Link to="/aviso-legal" className="text-sm text-white">
          Aviso Legal
        </Link>

        <Link to="/termos-e-condicoes" className="text-sm text-white">
          Termos & Condições
        </Link>
      </nav>
    </footer>
  );
};

export default FooterLogin;
