import HomeHeader from '@/components/layout/header/HomeHeader';
import HomeFooter from '@/components/layout/footer/HomeFooter';
import SwiperCustom from '@/components/common/SwiperCustom';

import camisaI from '@/assets/images/products/camisaI.png';
import camisaII from '@/assets/images/products/camisaII.png';
import camisaIII from '@/assets/images/products/camisaIII.png';
import comemorativaMundial from '@/assets/images/products/comemorativa_mundial.png';
import Banner from '@/components/common/Banner';

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
            Favoritos dos Palestrinos
          </h2>

          <SwiperCustom />
        </section>

        <section className="my-20">
          <Banner
            text="Palmeiras 1993 (Camisa Comemorativa)"
            image="banner-camisa-93"
          />
        </section>

        <section className="mt-10">
          <div className="m-auto w-[80%] 4xl:grid 4xl:items-center 4xl:justify-around">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <figure className="flex flex-col items-center gap-y-8 w-full">
                <img
                  className="rounded-3xl 3xl:size-[650px] select-none"
                  src={camisaI}
                  alt="Teste 1"
                />
                <img
                  className="rounded-3xl 3xl:size-[650px] select-none"
                  src={camisaIII}
                  alt="Teste 2"
                />
              </figure>

              <figure className="flex flex-col items-center gap-y-8 w-full md:mt-28">
                <img
                  className="rounded-3xl 3xl:size-[650px] select-none"
                  src={comemorativaMundial}
                  alt="Teste 2"
                />
                <img
                  className="rounded-3xl 3xl:size-[650px] select-none"
                  src={camisaII}
                  alt="Teste 2"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <Banner
            text="Coleção casual Palmeiras Leisure"
            image="banner-leisure"
          />
        </section>
      </main>

      <HomeFooter />
    </>
  );
};

export default Home;
