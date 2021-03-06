import Image from 'next/image';

const Welcome = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <Image
              alt="Ralo background"
              className="object-cover object-center h-full"
              src="/images/1200x500.jpg"
              width="1200"
              height="500"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                rALo
                </h2>
                <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                <i>Poe</i>ta, <i>story</i>ador, <i>cine</i>asta y <i>busca</i>dor.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
              rALo es un pseudónimo con el que he decidido firmar todo mi trabajo creativo. Soy un hombre nacido en el 82 heterosexual y Español. ¿Por qué utilizar un pseudónimo? Por esconderme un poco, por qué no reconocerlo. Por focalizar mi creatividad. Porque tanto si te importa lo que tiene que decir como si no, no es relevante quien sea ralo. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
