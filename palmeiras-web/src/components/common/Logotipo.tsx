import logo from '../../assets/images/logo.png';

const Logotipo = () => {
  return (
    <>
      <div className="flex items-center space-x-2">
        <img src={logo} className="w-16 sm:w-[74px]" alt="Logotipo" />
        <div className="h-[70px] border-solid border-gray-400 border-[1px]" />
        <p className="font-semibold  text-gray-500 text-white max-w-0 leading-4 select-none">
          Official Store
        </p>
      </div>
    </>
  );
};

export default Logotipo;
