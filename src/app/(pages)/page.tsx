import { Empresas } from "@/components/home/Empresas";
import { InformacionPrincipal } from "@/components/home/InformacionPrincipal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AaronJS - Impulsa tu presencia digital",
};

export default function Page() {
  return (
    <>
      <InformacionPrincipal />
      <Empresas />
    </>
  );
}
