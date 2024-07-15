import Input from '@/components/form/input/Input';
import HeaderLogin from '../header/HeaderLogin';
import { X } from 'lucide-react';

const MainLogin = () => {
  return (
    <>
      <div className="relative">
        <HeaderLogin />
        <div className="backdrop-blur-sm">
          <div className="m-auto w-full text-center my-12 max-w-[90%] md:max-w-96 3xl:max-w-[550px]">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 md:mb-12">
                Olá!
              </h1>
              <h2 className="md:text-lg mb-5">
                Faça login ou cadastre-se para acessar
              </h2>
            </div>

            <form action="">
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <X
                    color="#6b7280"
                    className="h-6 w-6 md:h-7 md:w-7 cursor-pointer"
                  />
                </div>
                <Input type="email" placeholder="E-mail" />
              </div>

              <button className="text center text-white py-4 rounded-xl bg-green-900 mt-8 w-full">
                Continuar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLogin;
