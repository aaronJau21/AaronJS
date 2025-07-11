import { Metadata } from "next";

import { Publicidad } from "@/components/services/Publicidad";
import { ServiciosComponent } from "@/components/services/ServiciosComponent";

export const metadata: Metadata = {
  title: "AaronJS - Servicios de Desarrollo Web y Software a Medida",
  description:
    "Descubre nuestros servicios de desarrollo web, apps móviles, consultoría tecnológica, integración de APIs y soluciones personalizadas.",
  keywords: [
    "servicios de software",
    "desarrollo de apps",
    "sitios web a medida",
    "consultoría en tecnología",
    "automatización",
    "IA",
    "Base de datos",
    "La nube",
    "AaronJS",
  ],
  robots: "index, follow",
  openGraph: {
    title: "AaronJS - Servicios de Software Personalizado",
    description:
      "Explora los servicios que ofrecemos: desarrollo web, apps móviles, soporte técnico y soluciones con inteligencia artificial.",
    url: "https://aaronjs.com/servicios",
    siteName: "AaronJS",
    images: [
      {
        url: "https://aaronjs.com/og-services.jpg", // <-- Reemplázalo con tu imagen de Open Graph para servicios
        width: 1200,
        height: 630,
        alt: "Servicios de desarrollo de software - AaronJS",
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Publicidad />
      <ServiciosComponent />
    </>
  );
}
