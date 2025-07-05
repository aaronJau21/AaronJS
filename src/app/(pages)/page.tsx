import { Empresas } from "@/components/home/Empresas";
import { InformacionPrincipal } from "@/components/home/InformacionPrincipal";
import { Transforma } from "@/components/home/Transforma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AaronJS - Impulsa tu presencia digital",
  description:
    "Impulsa tu presencia digital con soluciones web a medida. Desde sitios web impactantes hasta aplicaciones eficientes, te ayudamos a lograr un crecimiento extraordinario en el mundo digital.",
  
};

export default function Page() {
  return (
    <>
      <InformacionPrincipal />
      <Empresas />
      <Transforma />
    </>
  );
}
