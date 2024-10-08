import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import ProductCard from '../product/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useRef } from 'react';
import products from '@/data/products.json';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
