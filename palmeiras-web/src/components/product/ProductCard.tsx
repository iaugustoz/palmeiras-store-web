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
    <div className="bg-white shadow-lg rounded-3xl p-5 my-5 hover:shadow-2xl transition-shadow duration-300 focus-within:shadow-2xl">
      <img
        src={image}
        alt={`Imagem do produto ${productName}`}
        className="w-auto h-48 sm:h-64 md:h-72 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex flex-col mt-4">
        <h3 className="text-lg font-bold sm:max-w-[80%] max-w-full hover:underline">
          {productName}
        </h3>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-green-600">
            R${price}
          </span>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            aria-label={`Adicionar ${productName} ao carrinho`}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
