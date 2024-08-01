import Button from '@/components/common/Button';
import HeaderLogin from '@/components/layout/header/HeaderLogin';

const ProductDetails = () => {
  return (
    <>
      <HeaderLogin />

      <main className="w-[80%] mx-auto mt-10">
        <div className="flex items-center flex-col gap-y-8 md:items-start md:flex-row md:gap-10">
          <div className="w-full md:w-1/2">
            <img
              className="rounded-2xl"
              src={`https://lojapalmeiras.vteximg.com.br/arquivos/ids/182880-1000-1000/_0051_777238_01.jpg?v=638434330594070000`}
              alt={``}
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2 gap-y-4 md:gap-y-10">
            <div className="bg-white rounded-2xl pt-12 p-8 w-full">
              <h1 className="text-5xl">
                Camisa Palmeiras Puma I 24/25 - Jogador
              </h1>

              <div className="flex flex-col leading-5 mt-8">
                <p className="font-semibold">R$ 399.99</p>
                <p className="text-gray-400">Produto Oficial</p>
              </div>

              <Button
                classes="text-center text-white py-4 rounded-xl bg-green-900 mt-6 w-full active:scale-[0.99]"
                action={() => {}}
                text="Adicionar ao carrinho"
              />
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="bg-white shadow rounded-2xl p-8">
                <h2 className="text-3xl pb-4">Descrição</h2>
                <p className="indent-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati voluptates eligendi officiis expedita debitis
                  voluptatem, suscipit perspiciatis mollitia ratione soluta
                  itaque inventore rerum aspernatur praesentium illo? Eum vero
                  hic nostrum!
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <h2 className="text-3xl">Detalhes do Produto</h2>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
