import { User, ShoppingCart } from 'lucide-react';
import logo from '../../../assets/logo-palmeiras.png'

const Header = () => {
  return (
    <>
      <div className="mx-auto max-w-[80%]">
        <header className="flex justify-between items-center bg-white my-4 p-[18px]">
          <div>
            <img src={logo} className="w-16" alt="Logotipo" />
          </div>

          <input
            type="text"
            placeholder="Procurar"
            className="px-4 py-2 w-1/3 rounded-lg bg-[#edeff2] focus:outline-green-700"
          />

          <div className="flex gap-x-2">
            <ShoppingCart color="#000" size={24} className="cursor-pointer" />

            <User color="#000" size={24} className="cursor-pointer" />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
