import { User, ShoppingCart, X } from 'lucide-react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '@/components/form/input/SearchInput';
import Logotipo from '@/components/common/Logotipo';

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
        <Logotipo />

        <SearchInput className="hidden md:flex w-1/3 mx-4" />

        <nav className="flex gap-x-4">
          <div onClick={() => setToggle(!toggle)}>
            <ShoppingCart
              color="#4b5563"
              size={24}
              className="cursor-pointer"
            />
          </div>
          <Link to="/login">
            <User color="#4b5563" size={24} className="cursor-pointer" />
          </Link>
        </nav>
      </header>

      <div className="flex items-center md:hidden mb-6">
        <SearchInput className="w-full mx-4" />
      </div>

      {toggle && (
        <>
          <div className="fixed inset-0  backdrop-blur-lg"></div>
          <div
            className="fixed top-0 right-0 z-20 w-full h-full bg-white p-8 sm:w-1/2 xl:w-1/3 sm:rounded-s-[40px] sm:shadow-black sm:shadow-2xl"
            ref={shoppingCartRef}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Seu carrinho | {0} Itens</h2>
              <span className=""></span>
              <div onClick={() => setToggle(!toggle)}>
                <X className="hover:bg-green-200 rounded-full cursor-pointer" />
              </div>
            </div>
            <div className="mt-2 mb-6 border-[1px]"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
