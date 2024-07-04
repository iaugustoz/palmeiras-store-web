import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="mx-auto max-w-[1350px]">
        <header className="flex justify-between items-center bg-[#03eb99] my-4 py-5 px-4 rounded">
          <div>
            <button>Logo</button>
          </div>

          <nav className='flex gap-x-6'>
            <a href="produtos">Novidades</a>
            <a href="colecoes">Licenciados</a>
            <a href="socios">Coleções</a>
            <a href="https://futuro-site-de-noticias.com.br">Promoções</a>
            <a href="promocoes">Para Sócios</a>
            <a href="contato">Contato</a>
          </nav>

          <div className="flex gap-x-4">1 2 3 4</div>
        </header>
      </div>
    </>
  );
};

export default Header;
