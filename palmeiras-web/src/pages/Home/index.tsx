import HomeHeader from '@/components/layout/header/HomeHeader';
import HomeFooter from '@/components/layout/footer/HomeFooter';
import Button from '@/components/common/Button';
import SwiperCustom from '@/components/common/SwiperCustom';

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
      </main>

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

      <HomeFooter />
    </>
  );
};

export default Home;
