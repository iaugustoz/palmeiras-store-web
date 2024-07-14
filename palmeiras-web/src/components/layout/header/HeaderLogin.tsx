import logo from '../../../assets/images/logo.png';

const HeaderLogin = () => {
  return (
    <>
      <header className="sticky top-0 z-10 backdrop-blur-lg bg-opacity-80">
        <nav className="flex justify-center py-5 px-12">
          <img src={logo} alt="Logotipo" className="w-16 sm:w-[74px]" />
        </nav>
      </header>
    </>
  );
};

export default HeaderLogin;
