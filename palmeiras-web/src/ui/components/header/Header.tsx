import { User, Search, ShoppingCart, Heart } from 'lucide-react';

const Header = () => {
  return (
    <>
      <div className="mx-auto max-w-[80%]">
        <header className="flex justify-between items-center bg-[#03eb99] my-4 p-[18px] rounded">
          <div>
            <button>Logo</button>
          </div>

          <nav className="flex gap-x-4">
            <a href="novidades" className="hover:underline">
              Novidades
            </a>
            <a href="licenciados" className="hover:underline">
              Licenciados
            </a>
            <a href="colecoes" className="hover:underline">
              Coleções
            </a>
            <a href="promocoes" className="hover:underline">
              Promoções
            </a>
            <a href="para-socios" className="hover:underline">
              Para Sócios
            </a>
            <a href="contato" className="hover:underline">
              Contato
            </a>
          </nav>

          <div className="flex gap-x-2">
            <Heart color="#000" size={20} className="cursor-pointer" />

            <Search color="#000" size={20} className="cursor-pointer" />

            <ShoppingCart color="#000" size={20} className="cursor-pointer" />

            <User color="#000" size={20} className="cursor-pointer" />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
