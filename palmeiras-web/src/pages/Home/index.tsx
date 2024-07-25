import Header from '@/components/layout/header/Header';

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <section>
          <div className="hidden sm:block image sm:h-[550px] 3xl:h-[700px] 4xl:h-[900px] w-full"></div>
          <div className="sm:hidden image-mobile h-[550px] w-full"></div>
        </section>

        <section className="mx-auto max-w-[80%] py-20">
          <h2 className="text-center dark:text-white md:text-5xl font-bold">
            Produtos
          </h2>
          <div></div>
        </section>
      </main>
    </>
  );
};

export default Home;
