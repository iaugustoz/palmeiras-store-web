const ProductCard = () => {
  return (
    <div className="w-full h-[400px] bg-white shadow-2xl shadow-gray-500 rounded-3xl p-5">
      <img
        src="path_to_image.jpg"
        alt="Product"
        className="w-full h-[60%] object-cover rounded-t-3xl"
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold">Product Name</h3>
        <p className="text-gray-600 mt-2">Short description of the product.</p>
        <div className="mt-4">
          <span className="text-xl font-semibold">$99.99</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
