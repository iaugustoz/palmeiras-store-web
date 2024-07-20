import Input from '@/components/form/input/Input';
import HeaderLogin from '../header/HeaderLogin';
import { GoogleLogin } from '@react-oauth/google';
import { X } from 'lucide-react';

const MainLogin = () => {
  const onSucess = (response: void) => {
    console.log('Login bem sucedido: ', response);
  };

  const onFailure = (response: void) => {
    console.log('Falha no login: ', response);
  };

  return (
    <div className="relative">
      <HeaderLogin />
      <main className="backdrop-blur-sm">
        <section className="m-auto w-full text-center my-12 max-w-[90%] md:max-w-96 3xl:max-w-[550px]">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 md:mb-12">
              Olá!
            </h1>
            <h2 className="md:text-lg mb-5 dark:text-white">
              Faça login ou cadastre-se para acessar
            </h2>
          </div>

          <form>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <X
                  color="#6b7280"
                  className="h-6 w-6 md:h-7 md:w-7 cursor-pointer"
                />
              </div>
              <Input type="email" placeholder="E-mail" />
            </div>

            <button
              type="submit"
              className="text-center text-white py-4 rounded-xl bg-green-900 mt-8 w-full"
            >
              Continuar
            </button>

            <div className="flex items-center gap-x-5 h-0.5 my-7">
              <hr className="border-2 w-1/2"></hr>
              <span className="font-bold text-[#e5e7eb] text-xl select-none">
                o
              </span>
              <hr className="border-2 w-1/2"></hr>
            </div>

            <GoogleLogin
              context="signin"
              onSuccess={onSucess}
              onError={onFailure}
            />
          </form>
        </section>
      </main>
    </div>
  );
};

export default MainLogin;
