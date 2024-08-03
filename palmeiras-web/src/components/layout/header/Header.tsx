import { ChevronLeft } from 'lucide-react';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const HeaderLogin = () => {
  return (
    <>
      <header className="py-5 w-full mx-auto">
        <nav className="flex justify-between items-center py-5 px-8 relative z-10">
          <Link to="/" className="flex items-center text-lg dark:text-white">
            <ChevronLeft className="dark:text-white" />
            Voltar
          </Link>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src={logo} alt="Logotipo" className="w-16 sm:w-[74px]" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderLogin;
