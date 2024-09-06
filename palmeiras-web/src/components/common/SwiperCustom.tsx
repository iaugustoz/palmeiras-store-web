import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import ProductCard from '../product/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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

  {
    id: 9,
    price: 269.99,
    description: 'Short description of the product.',
    productName: 'Camisa III 24/25 Jogador',
    image:
      'https://lojapalmeiras.vteximg.com.br/arquivos/ids/182880-1000-1000/_0051_777238_01.jpg?v=638434330594070000',
  },

  {
    id: 10,
    price: 259.99,
    description: 'Short description of the product.',
    productName: 'Camisa III 24/25 Jogador',
    image:
      'https://lojapalmeiras.vteximg.com.br/arquivos/ids/182880-1000-1000/_0051_777238_01.jpg?v=638434330594070000',
  },
];

const SwiperCustom = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <div className="flex items-center max-w-[85%] 4xl:max-w-[80%] mx-auto gap-x-4 xl:gap-x-10">
        <Button
          text=""
          classes="hidden sm:block size-auto p-2"
          classesLogo="dark:text-white text-4xl"
          hasLogo={true}
          icon={IoIosArrowBack}
          ref={prevRef}
        />

        <Button
          text=""
          classes="hidden sm:block size-auto p-2 order-1"
          classesLogo="dark:text-white text-4xl"
          hasLogo={true}
          icon={IoIosArrowForward}
          ref={nextRef}
        />

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
            modifier: 2.25,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== 'boolean') {
              const navigationParams = swiper.params.navigation!;
              navigationParams.prevEl = prevRef.current;
              navigationParams.nextEl = nextRef.current;
            }
          }}
          modules={[EffectCoverflow, Navigation]}
          breakpoints={{
            300: {
              slidesPerView: 1.5,
            },
            400: {
              slidesPerView: 1.75,
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
            1900: {
              slidesPerView: 5.5,
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
      </div>
    </>
  );
};

export default SwiperCustom;
