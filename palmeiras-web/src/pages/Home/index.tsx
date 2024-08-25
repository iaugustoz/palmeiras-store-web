import HomeHeader from '@/components/layout/header/HomeHeader';
import HomeFooter from '@/components/layout/footer/HomeFooter';
import Button from '@/components/common/Button';
import SwiperCustom from '@/components/common/SwiperCustom';

import camisaI from '@/assets/images/products/camisaI.png';
import camisaII from '@/assets/images/products/camisaII.png';
import camisaIII from '@/assets/images/products/camisaIII.png';
import comemorativaMundial from '@/assets/images/products/comemorativa_mundial.png';

const Home: React.FC = () => {
  return (
    <>
      <HomeHeader />

      <main>
        <section>
          <div className="hidden sm:block image sm:h-[550px] 3xl:h-[700px] 4xl:h-[900px] w-full"></div>
          <div className="sm:hidden image-mobile h-96 w-full"></div>
        </section>

        <section className="mt-20">
          <h2 className="text-center dark:text-white text-5xl font-bold mb-10">
            Coleções
          </h2>

          <SwiperCustom />
        </section>

        <section className="my-20">
          <div className="banner-camisa-93 h-[400px] sm:h-[550px] 3xl:h-[700px] 4xl:h-[900px] w-full"></div>
        </section>

        <section className="mt-10">
          <div className="m-auto w-[80%] 4xl:grid 4xl:items-center 4xl:justify-around">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <figure className="flex flex-col items-center gap-y-8 w-full">
                <img
                  className="rounded-3xl 3xl:size-[650px]"
                  src={camisaI}
                  alt="Teste 1"
                />
                <img
                  className="rounded-3xl 3xl:size-[650px]"
                  src={camisaIII}
                  alt="Teste 2"
                />
              </figure>

              <figure className="flex flex-col items-center gap-y-8 w-full md:mt-28">
                <img
                  className="rounded-3xl 3xl:size-[650px]"
                  src={comemorativaMundial}
                  alt="Teste 2"
                />
                <img
                  className="rounded-3xl 3xl:size-[650px]"
                  src={camisaII}
                  alt="Teste 2"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="banner-leisure h-[400px] sm:h-[550px] 3xl:h-[700px] 4xl:h-[900px] w-full relative">
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      md:top-1/2 md:left-auto md:-right-10 lg:-right-20 md:transform md:-translate-y-1/2 w-[80%] sm:w-[60%] md:w-[30%]"
            >
              <div className="absolute inset-0 bg-white bg-opacity-85 rounded-xl"></div>

              <div className="relative w-full p-6">
                <h2 className="font-semibold text-3xl sm:text-4xl max-w-[400px]">
                  Coleção casual Palmeiras Leisure
                </h2>
                <Button
                  classes="text-center text-white py-4 rounded-xl bg-green-900 mt-6 active:scale-[0.99] w-full sm:w-[55%]"
                  text="Conferir"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </>
  );
};

export default Home;
