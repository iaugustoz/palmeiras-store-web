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
    <div className="h-[450px] w-max-[300px] bg-white shadow shadow-gray-500 rounded-3xl p-5 my-5">
      <img
        src={image}
        alt={productName}
        className="w-full h-[60%] object-cover rounded-t-3xl"
      />
      <div className="flex flex-col mt-4">
        <h3 className="text-lg font-bold sm:max-w-[80%] max-w-full">
          {productName}
        </h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4">
          <span className="text-lg font-semibold">R${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
