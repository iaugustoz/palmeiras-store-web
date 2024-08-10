import HomeHeader from '@/components/layout/header/HomeHeader';
import HomeFooter from '@/components/layout/footer/HomeFooter';
import ProductCard from '../../components/product/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';

type Product = {
  id: number;
  price: number;
  description: string;
  productName: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    price: 359.99,
    description: 'Short description of the product.',
    productName: 'Camisa I 24/25 Torcedor',
    image:
      'https://lojapalmeiras.vteximg.com.br/arquivos/ids/182880-1000-1000/_0051_777238_01.jpg?v=638434330594070000',
  },
  {
    id: 2,
    price: 359.99,
    description: 'Short description of the product.',
    productName: 'Camisa I 24/25 Jogador',
    image:
      'https://lojapalmeiras.vteximg.com.br/arquivos/ids/182880-1000-1000/_0051_777238_01.jpg?v=638434330594070000',
  },
  {
    id: 3,
    price: 299.99,
    description: 'Short description of the product.',
    productName: 'Camisa II 24/25 Torcedor',
    image:
      'https://lojapalmeiras.vteximg.com.br/arquivos/ids/182880-1000-1000/_0051_777238_01.jpg?v=638434330594070000',
  },
  {
    id: 4,
    price: 289.99,
    description: 'Short description of the product.',
    productName: 'Camisa II 24/25 Jogador',
    image:
      'https://lojapalmeiras.vteximg.com.br/arquivos/ids/182880-1000-1000/_0051_777238_01.jpg?v=638434330594070000',
  },
  {
    id: 5,
    price: 279.99,
    description: 'Short description of the product.',
    productName: 'Camisa III 24/25 Jogador',
    image:
      'https://lojapalmeiras.vteximg.com.br/arquivos/ids/182880-1000-1000/_0051_777238_01.jpg?v=638434330594070000',
  },
  {
    id: 6,
    price: 269.99,
    description: 'Short description of the product.',
    productName: 'Camisa III 24/25 Jogador',
    image:
      'https://lojapalmeiras.vteximg.com.br/arquivos/ids/182880-1000-1000/_0051_777238_01.jpg?v=638434330594070000',
  },
];

const Home: React.FC = () => {
  return (
    <>
      <HomeHeader />

      <main>
        <section>
          <div className="hidden sm:block image sm:h-[550px] 3xl:h-[700px] 4xl:h-[900px] w-full"></div>
          <div className="sm:hidden image-mobile h-[550px] w-full"></div>
        </section>

        <section className="mx-auto max-w-[80%] py-20">
          <h2 className="text-center dark:text-white text-5xl font-bold mb-10">
            Coleções
          </h2>

          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={4.5}
            slidesPerGroup={1}
            keyboard={true}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              300: {
                slidesPerView: 1.25,
                spaceBetween: 10,
                centeredSlides: true,
              },
              520: {
                slidesPerView: 1.75,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 3.5,
              },
              1536: {
                slidesPerView: 4.5,
                spaceBetween: 30,
              },
              2100: {
                slidesPerView: 4.5,
                spaceBetween: 40,
              },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <Link to={`/product/${product.id}`} target="_top">
                  <ProductCard
                    description={product.description}
                    image={product.image}
                    price={product.price}
                    productName={product.productName}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>

      <section className="mt-20">
        <div className="banner h-[400px] sm:h-[550px] 3xl:h-[700px] 4xl:h-[900px] w-full relative">
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      md:top-1/2 md:left-auto md:-right-10 lg:-right-20 md:transform md:-translate-y-1/2"
          >
            <div className="absolute inset-0 bg-white opacity-70 rounded-xl"></div>

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
