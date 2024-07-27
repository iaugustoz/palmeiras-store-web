import Header from '@/components/layout/header/Header';
import ProductCard from '../../components/product/ProductCard';

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
          <h2 className="text-center dark:text-white text-5xl font-bold mb-10">
            Coleções
          </h2>
          <div className="flex justify-center">
            <div className="grid justify-center items-center gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 h-[400px]">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
