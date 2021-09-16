import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-green-200 h-full">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className="container mx-auto pt-20">
        <div className="max-w-3xl mx-auto flex gap-x-10 rounded-lg shadow-2xl px-8 py-6 bg-white">
          <div className="w-5/12 flex-shrink-0">
            <h3 className="text-3xl mb-4 font-light italic">Brewdog</h3>
            <h4 className="text-2xl leading-7 font-bold text-gray-700 mb-4">
              From two guys filling bottles by hand to the trillion dollar
              company
            </h4>
            <p className="text-gray-500 leading-7">
              Brewdog are scaling a multi-billion dollar business while Veeqo
              helps them manage inventory, pick and ship online orders.
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <div className="rounded-full bg-yellow-500 w-8 h-8"></div>
              <span>+</span>
              <div className="rounded-full bg-yellow-300 w-8 h-8"></div>
            </div>
          </div>
          <div className="bg-green-100 w-full items-stretch flex justify-center rounded-lg">
            <img
              src="http://lorempixel.com/400/400/people"
              alt="brewdog"
              className="rounded-xl w-10/12"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
