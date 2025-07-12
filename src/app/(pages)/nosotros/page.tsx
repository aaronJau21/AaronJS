import { Cierre } from "@/components/nosotros/Cierre";
import EncabezadoNosotros from "@/components/nosotros/EncabezadoNosotros";
import { Equipo } from "@/components/nosotros/Equipo";
import { Mision } from "@/components/nosotros/Mision";
import { QuienesSomos } from "@/components/nosotros/QuienesSomos";
import { Valores } from "@/components/nosotros/Valores";

export default function Page() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
            <EncabezadoNosotros />
            <QuienesSomos />
            <Mision />
            <Valores />
            <Equipo />
            <Cierre />
        </main>
    );
}