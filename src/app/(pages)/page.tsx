import { Empresas } from "@/components/home/Empresas";
import { InformacionPrincipal } from "@/components/home/InformacionPrincipal";
import { Transforma } from "@/components/home/Transforma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AaronJS - Impulsa tu presencia digital con soluciones web a medida",
  description:
    "Creamos sitios web impactantes, aplicaciones personalizadas e integraciones inteligentes que impulsan tu negocio en el mundo digital.",
  keywords: [
    "desarrollo web",
    "software a medida",
    "apps móviles",
    "transformación digital",
    "consultoría tecnológica",
    "AaronJS",
  ],
  robots: "index, follow",
  openGraph: {
    title: "AaronJS - Soluciones digitales a medida",
    description:
      "Agencia de software especializada en desarrollo web y apps para empresas modernas. Elevamos tu presencia digital.",
    url: "https://aaronjs-production.up.railway.app/",
    siteName: "AaronJS",
    // images: [
    //   {
    //     url: "https://aaronjs.com/og-home.jpg", // <-- Reemplázalo con tu imagen real
    //     width: 1200,
    //     height: 630,
    //     alt: "AaronJS - Desarrollo Web Personalizado",
    //   },
    // ],
    type: "website",
  },
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
