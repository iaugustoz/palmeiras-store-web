type ProductCardProps = {
  price: number;
  productName: string;
  description: string;
  image: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  price,
  productName,
  description,
  image,
}) => {
  return (
    <div className="bg-white border rounded-3xl p-5 my-5 duration-300">
      <img
        src={image}
        alt={`Imagem do produto ${productName}`}
        className="w-auto h-48 sm:h-64 md:h-72 object-cover rounded-t-3xl transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex flex-col mt-4">
        <h3 className="text-lg font-bold sm:max-w-[80%] max-w-full hover:underline">
          {productName}
        </h3>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold">R${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
