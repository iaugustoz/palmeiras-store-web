import Logotipo from '@/components/common/Logotipo';
import { Link } from 'react-router-dom';

const FooterLogin = () => {
  return (
    <>
      <footer>
        <div className="border-t-2 py-4 px-8 bg-green-900">
          <div className="flex justify-between items-center">
            <div>
              <Logotipo />
            </div>

            <div className="hidden sm:flex sm: items-center gap-x-5">
              <Link to="/cookies" className="text-sm text-white">
                Cookies
              </Link>

              <Link to="/aviso-legal" className="text-sm text-white">
                Aviso Legal
              </Link>

              <Link to="/termos-e-condicoes" className="text-sm text-white">
                Termos & Condições
              </Link>
            </div>
          </div>

          <div className="md:hidden border my-5"></div>

          <div className="flex justify-center gap-x-2  md:hidden">
            <Link to="/aviso-legal" className="text-sm text-white">
              Cookies
            </Link>

            <Link to="/aviso-legal" className="text-sm text-white">
              Aviso Legal
            </Link>

            <Link to="/termos-e-condicoes" className="text-sm text-white">
              Termos & Condições
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterLogin;
