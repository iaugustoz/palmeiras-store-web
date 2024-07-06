import { User, ShoppingCart, Search } from 'lucide-react';
import logo from '../../../assets/logo-palmeiras.png';

const Header = () => {
  return (
    <div className="mx-auto max-w-[80%]">
      <header className="flex justify-between items-center bg-white my-4 p-[18px]">
        <div className="flex items-center space-x-2">
          <img src={logo} className="w-[74px]" alt="Logotipo" />
          <div className="h-[70px] border-solid border-gray-400 border-[1px]"></div>
          <p className="font-semibold text-gray-500 text-md leading-4">
            Official<br></br>Store
          </p>
        </div>

        <div className="relative w-1/3 mx-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Pesquisar"
            className="pl-10 pr-4 py-2 w-full rounded-lg bg-[#edeff2] focus:outline-green-600"
          />
        </div>

        <div className="flex gap-x-4">
          <ShoppingCart color="#4b5563" size={24} className="cursor-pointer hover:text-green-600" />
          <User color="#4b5563" size={24} className="cursor-pointer" />
        </div>
      </header>
    </div>
  );
};

export default Header;
