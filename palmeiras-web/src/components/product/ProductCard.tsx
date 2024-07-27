type ProductCardProps = {
  price: number;
  productName: string;
  image: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  price,
  productName,
  image,
}) => {
  return (
    <div className="h-[400px] bg-white shadow shadow-gray-500 rounded-3xl p-5 my-5">
      <img
        src={image}
        alt={productName}
        className="w-full h-[60%] object-cover rounded-t-3xl"
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold">{productName}</h3>
        <div className="mt-4">
          <span className="text-xl font-semibold">R${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
