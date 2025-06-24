import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between ">
      <div className="flex items-center gap-x-9">
        <div className="bg-fondo py-3 px-9">
          <Image
            src="/img/shared/logo.png"
            alt="Logo de AaronJS"
            width={200}
            height={200}
            className=""
          />
        </div>
        <nav className="flex-1 py-5">
          <ul className="flex gap-x-7 text-texto font-bold">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Historia</a>
            </li>
            <li>
              <a href="#">Vacantes</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 ">
        <div className="flex justify-end items-center w-[81%]">
          <button className="btn">Contacto</button>
        </div>
      </div>
    </header>
  );
};
