import { useParams } from 'react-router-dom';
import Button from '@/components/common/Button';
import Footer from '@/components/layout/footer/Footer';
import HeaderLogin from '@/components/layout/header/Header';
import SelectSize from '@/components/product/SelectSize';
import productsData from '@/data/products.json'; 
import { useEffect, useState } from 'react';

type Product = {
  id: number;
  price: number;
  description: string;
  productName: string;
  image: string;
};

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>(); 
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    
    const foundProduct = productsData.find(
      (product) => product.id === parseInt(id as string, 10)
    );
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <>
      <HeaderLogin />

      <main className="w-[80%] 4xl:w-[60%] mx-auto mt-20">
        <div className="flex items-center flex-col gap-y-4 md:items-start md:flex-row md:gap-10">
          <div className="w-full md:w-1/2">
            <img
              className="bg-white rounded-2xl shadow-lg"
              src={product.image}
              alt={product.productName}
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2 gap-y-4">
            <div className="bg-white shadow-lg rounded-2xl pt-12 p-8 w-full">
              <h2 className="text-4xl sm:text-5xl">{product.productName}</h2>
              <div className="flex flex-col leading-5 mt-8">
                <p className="text-xl font-semibold">R$ {product.price}</p>
                <p className="text-gray-400">Produto Oficial</p>
              </div>

              <SelectSize />

              <Button
                classes="text-center text-white py-4 rounded-xl bg-green-900 mt-6 w-full active:scale-[0.99] w-full"
                action={() => {}}
                text="Adicionar ao carrinho"
              />
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-3xl pb-4">Descrição</h2>
                <p className="indent-6">{product.description}</p>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-3xl pb-4">Detalhes</h2>
                <ul className="indent-6 leading-9">
                  <li>✓ AEROREADY;</li>
                  <li>✓ Corte Justo;</li>
                  <li>✓ Gola em V.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductDetails;
