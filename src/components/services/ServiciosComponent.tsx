import { CardComponent } from "../ui/cards/CardComponent";

export const ServiciosComponent = () => {
  return (
    <section className="lg:max-w-9/12 mx-auto px-4 py-8">
      <h2 className="text-center text-xl md:text-3xl font-bold">
        Nuestros Servicios
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-9 mt-8">
        <CardComponent>
          <h3 className="font-bold lg:text-3xl">Páginas Web</h3>
          <p>
            Diseñamos y desarrollamos sitios web modernos, rápidos y adaptables
            a cualquier dispositivo, usando tecnologías de última generación.
          </p>
        </CardComponent>

        <CardComponent>
          <h3 className="font-bold lg:text-3xl">Desarrollo de Apps</h3>
          <p>
            Creamos aplicaciones móviles y de escritorio con interfaces
            intuitivas y alto rendimiento, totalmente adaptadas a tu negocio.
          </p>
        </CardComponent>

        <CardComponent>
          <h3 className="font-bold lg:text-3xl">Sitios Web a Medida</h3>
          <p>
            Construimos soluciones web totalmente personalizadas, integradas con
            tus procesos y necesidades específicas.
          </p>
        </CardComponent>

        <CardComponent>
          <h3 className="font-bold lg:text-3xl">Consultoría en Tecnología</h3>
          <p>
            Te ayudamos a tomar decisiones estratégicas con asesoría experta en
            software, infraestructura, automatización e IA.
          </p>
        </CardComponent>

        <CardComponent>
          <h3 className="font-bold lg:text-3xl">Automatización</h3>
          <p>
            Optimizamos tus procesos con sistemas automatizados que ahorran
            tiempo, reducen errores y aumentan la eficiencia operativa.
          </p>
        </CardComponent>

        <CardComponent>
          <h3 className="font-bold lg:text-3xl">Inteligencia Artificial</h3>
          <p>
            Implementamos soluciones de IA como chatbots, análisis predictivo y
            generación de contenido para potenciar tu negocio.
          </p>
        </CardComponent>

        <CardComponent>
          <h3 className="font-bold lg:text-3xl">Base de Datos</h3>
          <p>
            Diseñamos, optimizamos y administramos bases de datos seguras y
            escalables para el manejo eficiente de tu información.
          </p>
        </CardComponent>

        <CardComponent>
          <h3 className="font-bold lg:text-3xl">La Nube</h3>
          <p>
            Migramos y gestionamos tus servicios en la nube, garantizando
            escalabilidad, seguridad y disponibilidad 24/7.
          </p>
        </CardComponent>
      </div>
    </section>
  );
};
