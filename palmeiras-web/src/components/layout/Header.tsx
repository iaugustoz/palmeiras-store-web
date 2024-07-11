import { User, ShoppingCart, X } from 'lucide-react';
import logo from '../../assets/images/logo-palmeiras.png';
import SearchInput from '../common/SearchInput';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const shoppingCartRef = useRef(null);

  useEffect(() => {
    if (toggle) {
      gsap.fromTo(
        shoppingCartRef.current,
        { x: '100%' },
        {
          duration: 1,
          x: '0%',
          ease: 'power1.inOut',
        }
      );
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [toggle]);

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
          <div onClick={() => setToggle(!toggle)}>
            <ShoppingCart
              color="#4b5563"
              size={24}
              className="cursor-pointer"
            />
          </div>
          <User color="#4b5563" size={24} className="cursor-pointer" />
        </nav>
      </header>

      <div className="md:hidden mb-6">
        <SearchInput className="w-full mx-4" />
      </div>

      {toggle && (
        <>
          <div className="fixed w-full h-full backdrop-blur-lg inset-0"></div>
          <div
            className="z-20 top-0 right-0 w-full sm:w-[40%] xl:w-1/3 h-full absolute bg-white sm:rounded-s-[40px] sm:shadow-black sm:shadow-2xl p-8"
            ref={shoppingCartRef}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Seu carrinho | {0} Itens</h2>
              <span className=""></span>
              <div onClick={() => setToggle(!toggle)}>
                <X className="hover:bg-green-200 rounded-full cursor-pointer" />
              </div>
            </div>
            <div className="mt-2 mb-6 border-[1px] "></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
