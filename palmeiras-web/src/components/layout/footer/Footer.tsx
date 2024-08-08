import Logotipo from '@/components/common/Logotipo';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t-2 py-4 px-8 bg-green-900 mt-24">
      <div className="flex justify-between items-center">
        <div>
          <Logotipo color="text-white" />
        </div>

        <nav className="hidden sm:flex items-center gap-x-5">
          <Link 
            to="/cookies"
            target='_top'
            className="text-sm text-white"
          >
            Cookies
          </Link>

          <Link 
            to="/aviso-legal" 
            target='_top'
            className="text-sm text-white"
          >
            Aviso Legal
          </Link>

          <Link 
            to="/termos-e-condicoes"
            target='_top' 
            className="text-sm text-white"
          >
            Termos &amp; Condições
          </Link>
        </nav>
      </div>

      <div className="sm:hidden border my-5"></div>

      <nav className="flex justify-center gap-x-5 sm:hidden">
        <Link 
          to="/cookies" 
          target="_top" 
          className="text-sm text-white"
        >
          Cookies
        </Link>

        <Link 
          to="/aviso-legal" 
          target="_top" 
          className="text-sm text-white"
        >
          Aviso Legal
        </Link>

        <Link
          to="/termos-e-condicoes"
          target="_top"
          className="text-sm text-white"
        >
          Termos &amp; Condições
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
