import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow } from 'swiper/modules';

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
    price: 349.99,
    description: 'Short description of the product.',
    productName: 'Camisa I 24/25 Jogador',
    image:
      'https://lojapalmeiras.vteximg.com.br/arquivos/ids/182880-1000-1000/_0051_777238_01.jpg?v=638434330594070000',
  },
  {
    id: 3,
    price: 329.99,
    description: 'Short description of the product.',
    productName: 'Camisa II 24/25 Torcedor',
    image:
      'https://lojapalmeiras.vteximg.com.br/arquivos/ids/182880-1000-1000/_0051_777238_01.jpg?v=638434330594070000',
  },
  {
    id: 4,
    price: 319.99,
    description: 'Short description of the product.',
    productName: 'Camisa II 24/25 Jogador',
    image:
      'https://lojapalmeiras.vteximg.com.br/arquivos/ids/182880-1000-1000/_0051_777238_01.jpg?v=638434330594070000',
  },
  {
    id: 5,
    price: 309.99,
    description: 'Short description of the product.',
    productName: 'Camisa III 24/25 Jogador',
    image:
      'https://lojapalmeiras.vteximg.com.br/arquivos/ids/182880-1000-1000/_0051_777238_01.jpg?v=638434330594070000',
  },
  {
    id: 6,
    price: 299.99,
    description: 'Short description of the product.',
    productName: 'Camisa III 24/25 Jogador',
    image:
      'https://lojapalmeiras.vteximg.com.br/arquivos/ids/182880-1000-1000/_0051_777238_01.jpg?v=638434330594070000',
  },

  {
    id: 7,
    price: 289.99,
    description: 'Short description of the product.',
    productName: 'Camisa III 24/25 Jogador',
    image:
      'https://lojapalmeiras.vteximg.com.br/arquivos/ids/182880-1000-1000/_0051_777238_01.jpg?v=638434330594070000',
  },

  {
    id: 8,
    price: 279.99,
    description: 'Short description of the product.',
    productName: 'Camisa III 24/25 Jogador',
    image:
      'https://lojapalmeiras.vteximg.com.br/arquivos/ids/182880-1000-1000/_0051_777238_01.jpg?v=638434330594070000',
  },
];

const SwiperCustom = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow]}
        breakpoints={{
          300: {
            slidesPerView: 1.5,
          },

          500: {
            slidesPerView: 2.25,
          },

          900: {
            slidesPerView: 3,
          },

          1250: {
            slidesPerView: 3.5,
          },

          1536: {
            slidesPerView: 4,
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
    </>
  );
};

export default SwiperCustom;
