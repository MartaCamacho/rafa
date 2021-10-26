const Body = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Obras
            </h1>
            <div class="h-1 w-20 bg-blue-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            A continuación puedes encontrar una selección de sus exquisitas
            obras que lo van a petar.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/720x400"
                alt="content"
              />
              <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                POESÍA
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Puesías 1
              </h2>
              <p class="leading-relaxed text-base">Un libro con rimas y tal.</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/721x401"
                alt="content"
              />
              <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                NOVELA
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Los bebés también mienten
              </h2>
              <p class="leading-relaxed text-base">
                Un libro sobre mentiras y traición.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/722x402"
                alt="content"
              />
              <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                GUIÓN
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Not Yet
              </h2>
              <p class="leading-relaxed text-base">
                Nunca 3 granaínos dieron tanto que hablar.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/723x403"
                alt="content"
              />
              <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                POESÍA
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Marranadas y otras cosas
              </h2>
              <p class="leading-relaxed text-base">
                Guarreridas que riman y se te pegan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;