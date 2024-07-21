import Header from '@/components/layout/header/Header';

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <div className="hidden sm:block image sm:h-[550px] 3xl:h-[700px] 4xl:h-[900px] w-full"></div>
        <div className="sm:hidden image-mobile h-[550px] w-full"></div>
      </main>
    </>
  );
};

export default Home;
