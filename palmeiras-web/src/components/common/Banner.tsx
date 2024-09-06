import Button from '@/components/common/Button';

type BannerProps = {
  text: string;
  image: string;
};

const Banner: React.FC<BannerProps> = ({ text, image }) => {
  return (
    <div
      className={`${image} h-[400px] sm:h-[550px] 3xl:h-[700px] 4xl:h-[900px] w-full relative`}
    >
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
md:top-1/2 md:left-auto md:-right-10 lg:-right-20 md:transform md:-translate-y-1/2 w-[80%] sm:w-[60%] md:w-[30%]"
      >
        <div className="absolute inset-0 bg-white bg-opacity-85 rounded-xl"></div>

        <div className="relative w-full p-6">
          <h2 className="font-semibold text-3xl sm:text-4xl max-w-[400px]">
            {text}
          </h2>
          <Button
            classes="text-center text-white py-4 rounded-xl bg-green-900 mt-6 active:scale-[0.99] w-full sm:w-[55%]"
            text="Ver coleção"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
