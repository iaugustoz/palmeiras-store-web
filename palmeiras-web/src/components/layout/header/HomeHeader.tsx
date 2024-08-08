import { User, ShoppingCart, X } from 'lucide-react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '@/components/form/input/SearchInput';
import Logotipo from '@/components/common/Logotipo';

const HomeHeader = () => {
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
      <header className="flex justify-between items-center my-4 p-[18px]">
        <Logotipo color="text-gray-500 dark:text-white" />

        <SearchInput className="hidden md:flex w-1/3 mx-4" />

        <nav className="flex gap-x-4">
          <button onClick={() => setToggle(!toggle)}>
            <ShoppingCart
              size={24}
              className="hover:text-green-500 dark:hover:text-green-300 cursor-pointer text-[#4b5563] dark:text-white"
            />
          </button>
          <Link to="/login" aria-label="User login">
            <User
              size={24}
              className="hover:text-green-500 dark:hover:text-green-300 cursor-pointer text-[#4b5563] dark:text-white"
            />
          </Link>
        </nav>
      </header>

      <div className="flex items-center md:hidden mb-6">
        <SearchInput className="w-full mx-4" />
      </div>

      {toggle && (
        <>
          <div className="fixed inset-0 backdrop-blur-lg"></div>
          <aside
            className="fixed top-0 right-0 z-20 w-full h-full bg-white dark:bg-[#121212] p-8 sm:w-1/2 xl:w-1/3 sm:rounded-s-[40px] shadow-lg sm:shadow-black dark:sm:shadow-white dark:sm:shadow-lg"
            ref={shoppingCartRef}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold dark:text-white">
                Seu carrinho | {0} Itens
              </h2>
              <button onClick={() => setToggle(!toggle)}>
                <X
                  size={40}
                  className="hover:bg-green-200 dark:hover:bg-green-900 rounded-full dark:text-white cursor-pointer p-2"
                />
              </button>
            </div>
            <hr className="mt-2 mb-6 border-[1px]" />
          </aside>
        </>
      )}
    </div>
  );
};

export default HomeHeader;
