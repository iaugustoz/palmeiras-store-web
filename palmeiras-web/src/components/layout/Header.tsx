import { User, ShoppingCart } from 'lucide-react';
import logo from '../../assets/images/logo-palmeiras.png';
import SearchInput from '../common/SearchInput';

const Header = () => {
  return (
    <div className="mx-auto max-w-[80%]">
      <header className="flex justify-between items-center bg-white my-4 p-[18px]">
        <div className="flex items-center space-x-2">
          <img src={logo} className="w-16 sm:w-[74px]" alt="Logotipo" />
          <div className="h-[70px] border-solid border-gray-400 border-[1px]" />
          <p className="font-semibold text-gray-500 sm:text-md max-w-0 leading-4">
            Official Store
          </p>
        </div>

        <SearchInput className="hidden md:flex w-1/3 mx-4" />

        <nav className="flex gap-x-4">
          <ShoppingCart color="#4b5563" size={24} className="cursor-pointer" />
          <User color="#4b5563" size={24} className="cursor-pointer" />
        </nav>
      </header>

      <div className="md:hidden mb-6">
        <SearchInput className="w-full mx-4" />
      </div>
    </div>
  );
};

export default Header;
