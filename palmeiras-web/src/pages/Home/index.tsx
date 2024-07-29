import Header from '@/components/layout/header/Header';
import ProductCard from '../../components/product/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

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
    image: 'path',
  },
  {
    id: 2,
    price: 359.99,
    description: 'Short description of the product.',
    productName: 'Camisa I 24/25 Jogador',
    image: 'path',
  },
  {
    id: 3,
    price: 299.99,
    description: 'Short description of the product.',
    productName: 'Camisa II 24/25 Torcedor',
    image: 'path',
  },
  {
    id: 4,
    price: 289.99,
    description: 'Short description of the product.',
    productName: 'Camisa II 24/25 Jogador',
    image: 'path',
  },
  {
    id: 5,
    price: 279.99,
    description: 'Short description of the product.',
    productName: 'Camisa III 24/25 Jogador',
    image: 'path',
  },
  {
    id: 6,
    price: 269.99,
    description: 'Short description of the product.',
    productName: 'Camisa III 24/25 Jogador',
    image: 'path',
  },
];

const Home: React.FC = () => {
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

          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={4.5}
            slidesPerGroup={1}
            keyboard={true}
            navigation
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
                <Link to="/opa">
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
    </>
  );
};

export default Home;
