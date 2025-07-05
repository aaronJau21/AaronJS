import ImagenInfo from "@/assets/home/imagenInfo.jpg";

interface IInformacion {
  posicion: string;
  titulo: string;
  descripcion: string;
}

const informacion: IInformacion[] = [
  {
    posicion: "1",
    titulo: "Diseñadores",
    descripcion: `Creamos experiencias visuales únicas. Diseños centrados en el
                usuario que combinan estética y funcionalidad para potenciar tu
                marca.`,
  },
  {
    posicion: "2",
    titulo: "Desarrolladores",
    descripcion: `Construimos soluciones eficientes y escalables. Desde páginas web hasta sistemas complejos, desarrollamos con calidad y precisión técnica.`,
  },
  {
    posicion: "3",
    titulo: " Product Owners",
    descripcion: `Alineamos la tecnología con tus objetivos de negocio. Te ayudamos a planificar, validar y escalar productos digitales que realmente aporten valor.`,
  },
];

export const Transforma = () => {
  return (
    <section
      className=""
      style={{
        backgroundImage: `url(${ImagenInfo.src})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="bg-black/50 py-9 text-white">
        <div className="md:container md:mx-auto mx-5 md:w-8/12">
          <h2 className="md:text-3xl font-bold text-center">
            💼 Impulsa tu crecimiento
          </h2>
          <h3 className="md:text-3xl font-bold text-center mt-3">
            Transforma tu negocio con soluciones digitales a la medida.
          </h3>

          <div className="flex  bg-opacity-80 rounded-lg">
            <div className="flex-1">
              {informacion.map(({ descripcion, posicion, titulo }) => (
                <div key={posicion} className="flex items-center gap-x-5 my-9">
                  <div className="bg-header text-white py-1 px-4 rounded-full">
                    <p className="text-xl">{posicion}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{titulo}</h4>
                    <p>{descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
