import ImagenInfo from "@/assets/home/imagenInfo.jpg";

interface IInformacion {
  posicion: string;
  titulo: string;
  descripcion: string;
}

const informacion: IInformacion[] = [
  {
    posicion: "1",
    titulo: "Webs que venden",
    descripcion: `Creamos sitios modernos y atractivos que ponen tu negocio frente a mas clientes.`,
  },
  {
    posicion: "2",
    titulo: "Apps que simplifican tu negocio",
    descripcion: `Desarrollamos sistemas de gestion a medida.`,
  },
  {
    posicion: "3",
    titulo: "Automatización inteligente",
    descripcion: `Implementamos soluciones con IA para que crezcas mas rápido.`,
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
            Haz crecer tu negocio con soluciones digitales que generan
            resultados.
          </h2>
          <h3 className="md:text-xl font-bold text-center mt-3">
            No necesitas expertos ni semanas de planificación. Dinos qué
            necesitas y nosotros nos encargamos del resto.
          </h3>

          <div className="flex justify-center bg-opacity-80 rounded-lg">
            <div>
              {informacion.map(({ descripcion, posicion, titulo }) => (
                <div
                  key={posicion}
                  className="flex items-center gap-x-5 my-9 bg-black/80 rounded-lg p-5"
                >
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
