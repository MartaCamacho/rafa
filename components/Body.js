import Image from 'next/image';

const Body = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 pb-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <Image
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/poe.jpg"
                alt="content"
                width="720"
                height="400"
              />
              <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                POE
              </h3>
              <p class="leading-relaxed text-base">Estoy trabajando para publicar mi primera antología, pero tengo más escritas. Más información muy pronto. Mientras tanto visita <a href="https://arrobaralo.wordpress.com/">mi blog de poesía</a></p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <Image
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/fic.jpg"
                alt="content"
                width="720"
                height="400"
              />
              <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                FIC
              </h3>
              <p class="leading-relaxed text-base">
              He escrito tres novelas, dos obras de teatro, innumerables guiones para series de televisión y películas, además de muchos relatos cortos y cuentos. Por el momento no he publicado nada, pero eso no tardará en cambiar.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <Image
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/crea.jpg"
                alt="content"
                width="720"
                height="400"
              />
              <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                CREA
              </h3>
              <p class="leading-relaxed text-base">
              Colaboro con el fotógrafo José García @jose35mm en el proyecto Fotografía Imperfecta @foto8rafia_imp. Soy parte del colectivo de humor NOT YET @nnnnnotyet donde a parte de grabar un Podcast y crear contenido gráfico proyectamos ampliar el contenido con material audiovisual.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <Image
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/preguntas.jpg"
                alt="content"
                width="720"
                height="400"
              />
              <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                ¿?
              </h3>
              <p class="leading-relaxed text-base">
              Cada paso es una pregunta y cada respuesta cerrada y absoluta algo de lo que huír. Me siento cómodo en la incertidumbre y te invito a que hagas lo mismo. Así que pregúntate y cuestiona cada cosa que te rodea y pregúntame a mí si te apetece. Te prometo no resolver tus dudas mas tampoco defraudarte. Mi email es ______(lo tengo que hacer)________
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
