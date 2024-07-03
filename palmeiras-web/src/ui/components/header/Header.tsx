const Header = () => {
  return (
    <>
      <div className="mx-auto max-w-[1350px]">
        <div className="flex justify-between items-center bg-palmeiras-green-light py-5 px-4">
          <div>
            <button>Logo</button>
          </div>

          <div className="flex gap-x-4">
            <button>Produtos Oficiais</button>
            <button>Coleções</button>
            <button>Para sócios</button>
            <button>Notícias</button>
          </div>

          <div className="flex-grow-[0.35] mx-4">
            <input
              type="text"
              className="w-full p-0.5 rounded"
              placeholder="Pesquisar..."
            />
          </div>

          <div className="flex gap-x-4">
            <button>Sign In</button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
