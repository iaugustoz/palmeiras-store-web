import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const HomeFooter = () => {
  return (
    <>
      <footer className="bg-green-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <img src={logo} className="h-12 me-3" alt="FlowBite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  Palmeiras Store
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  Comprar
                </h2>

                <ul className="text-white ">
                  <li className="mb-4">
                    <Link className="hover:underline" to="">
                      Minha conta
                    </Link>
                  </li>

                  <li>
                    <Link className="hover:underline" to="">
                      Localizar encomenda
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  Legal
                </h2>

                <ul className="text-white">
                  <li className="mb-4">
                    <Link className="hover:underline" to="/">
                      Aviso Legal
                    </Link>
                  </li>

                  <li>
                    <Link className="hover:underline" to="/">
                      Termos &amp; Condições
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  Ajuda
                </h2>

                <ul className="text-white">
                  <li className="mb-4">
                    <Link className="hover:underline" to="">
                      Contato
                    </Link>
                  </li>

                  <li>
                    <Link className="hover:underline" to="">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-white sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center font-thin">
              © 2024 Palmeiras Store™ . All Rights Reserved.
            </span>

            <div className="flex mt-4 mb-8 sm:justify-center sm:my-0 sm:mb-0">
              <a
                href="https://www.instagram.com/iaugusto__/"
                target="_blank"
                className="text-white hover:text-green-300"
              >
                <FaInstagram size={18} />
                <span className="sr-only">Insagram</span>
              </a>

              <a
                href="https://www.linkedin.com/in/igorbrz/"
                target="_blank"
                className="text-white hover:text-green-300 ms-5"
              >
                <FaLinkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href="https://github.com/igoraugustobrz"
                target="_blank"
                className="text-white hover:text-green-300 ms-5"
              >
                <FaGithub size={18} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeFooter;
