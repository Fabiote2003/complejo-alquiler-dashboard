import Link from "next/link";
import { FaHouse } from "react-icons/fa6";

export default function Header() {
  return (
    <nav className="w-full flex items-center max-w-5xl justify-between border-b border-b-foreground/10 h-16">
      <Link
        href={"/"}
        className="flex items-center gap-2 text-green-500 text-xl"
      >
        <FaHouse className="text-2xl" />
        <p className="font-bold">La Familia</p>
      </Link>
      <div className="flex gap-8">
        <Link
          className="font-semibold text-gray-700 hover:text-green-500 transition-colors"
          href={"/"}
        >
          Inicio
        </Link>
        <Link
          className="font-semibold text-gray-700 hover:text-green-500 transition-colors"
          href={"/alquileres"}
        >
          Galería
        </Link>
        <Link
          className="font-semibold text-gray-700 hover:text-green-500 transition-colors"
          href={"/propiedades"}
        >
          Propiedades
        </Link>
        <Link
          className="font-semibold text-gray-700 hover:text-green-500 transition-colors"
          href={"/contacto"}
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}