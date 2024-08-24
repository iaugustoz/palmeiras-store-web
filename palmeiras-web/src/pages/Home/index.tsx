import HomeHeader from '@/components/layout/header/HomeHeader';
import HomeFooter from '@/components/layout/footer/HomeFooter';
import Button from '@/components/common/Button';
import SwiperCustom from '@/components/common/SwiperCustom';

import palmeirasIII from '@/assets/images/products/palmeiras_24.25_III.avif';

const Home: React.FC = () => {
  return (
    <>
      <HomeHeader />

      <main>
        <section>
          <div className="hidden sm:block image sm:h-[550px] 3xl:h-[700px] 4xl:h-[900px] w-full"></div>
          <div className="sm:hidden image-mobile h-[550px] w-full"></div>
        </section>

        <section className=" mt-20">
          <h2 className="text-center dark:text-white text-5xl font-bold mb-10">
            Coleções
          </h2>

          <SwiperCustom />
        </section>

        <section className='my-20'>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-8 mx-auto max-w-[80%]">
            <div className="flex flex-col gap-y-8">
              <img className="rounded-xl object-cover" src={palmeirasIII} alt="Teste 1" />
              <img className="rounded-xl aspect-auto" src={palmeirasIII} alt="Teste 2" />
            </div>

            <div className="flex flex-col gap-y-8 md:mt-28" >
              <img className="rounded-xl aspect-auto" src={palmeirasIII} alt="Teste 2" />
              <img className="rounded-xl aspect-auto" src={palmeirasIII} alt="Teste 2" />
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="banner h-[400px] sm:h-[550px] 3xl:h-[700px] 4xl:h-[900px] w-full relative">
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
