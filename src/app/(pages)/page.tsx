import { InformationComponent } from "@/components/home/information/InformationComponent";
import { InformacionGeneral } from "@/components/ui/informacion-general/InformacionGeneral";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " AaronJS | Empresa de Software",
  description:
    "Empresa de software especializada en desarrollo web, aplicaciones móviles y soluciones personalizadas.",
};

export default function Page() {
  return (
    <>
      <InformacionGeneral title="AaronJS | Empresa de Software" />
      <InformationComponent />
    </>
  );
}
