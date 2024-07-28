import Button from '../common/Button';

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
    <div className="h-[450px] bg-white shadow shadow-gray-500 rounded-3xl p-5 my-5">
      <img
        src={image}
        alt={productName}
        className="w-full h-[55%] object-cover rounded-t-3xl"
      />
      <div className="flex flex-col justify-end mt-4">
        <h3 className="text-lg font-bold">{productName}</h3>
        <div className="mt-4">
          <span className="text-lg font-semibold">R${price}</span>
        </div>
        <Button
          text="Ver produto"
          action={() => {}}
          classes="bg-transparent text-green-600 border-2 border hover:border-green-500 hover:transition-[border] mt-5"
        />
      </div>
    </div>
  );
};

export default ProductCard;
