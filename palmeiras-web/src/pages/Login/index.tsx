import Footer from '@/components/layout/footer/Footer';
import Input from '@/components/form/input/Input';
import Header from '../../components/layout/header/Header';
import { X } from 'lucide-react';
import GoogleOauth from '@/components/user/authentication/GoogleSignIn';
import Apple from '@/components/user/authentication/AppleSignIn';
import Button from '@/components/common/Button';
import { useEffect, useState } from 'react';

const Login = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const emailInput = document.querySelector('input');
    if (emailInput) {
      emailInput.addEventListener('input', handleInput);
    }
    return () => {
      if (emailInput) {
        emailInput.removeEventListener('input', handleInput);
      }
    };
  }, []);

  const handleInput = () => {
    setVisible(!visible);
  };

  const removeText = () => {
    const emailInput = document.querySelector('input');
    if (emailInput) {
      (emailInput as HTMLInputElement).value = '';
      setVisible(false);
    }
  };

  return (
    <>
      <Header />

      <main>
        <section className="m-auto w-full text-center my-12 max-w-[90%] md:max-w-96 3xl:max-w-[550px]">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 dark:text-green-700 mb-6 md:mb-6">
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
                  onClick={removeText}
                  color="#6b7280"
                  className={`h-6 w-6 md:h-7 md:w-7 cursor-pointer 
                      ${visible ? 'block' : 'hidden'}
                    `}
                />
              </div>
              <Input type="email" placeholder="E-mail" />
            </div>

            <Button
              classes="text-center text-white py-4 rounded-xl bg-green-900 mt-6 w-full active:scale-[0.99] w-full"
              text="Continuar"
              action={() => {
                event?.preventDefault();
              }}
            />

            <div className="flex items-center gap-x-5 h-0.5 my-7">
              <hr className="border-2 w-1/2"></hr>
              <span className="font-bold text-[#e5e7eb] text-xl select-none">
                o
              </span>
              <hr className="border-2 w-1/2"></hr>
            </div>

            <GoogleOauth />
            <Apple />
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Login;
