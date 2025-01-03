import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"
import Link from "next/link"
import { IoMenu } from "react-icons/io5";

function ResponsiveMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IoMenu  className="text-green-600 text-3xl lg:hidden" width={'2rem'} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-green-600">Menú</SheetTitle>
        </SheetHeader>
        <div className="grid grid-cols-1 gap-4 py-4">
        <SheetClose asChild>
            <Link
              className="font-semibold text-gray-700 hover:text-green-500 transition-colors"
              href={"/"}
            >
              Inicio
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              className="font-semibold text-gray-700 hover:text-green-500 transition-colors"
              href={"/alquileres"}
            >
              Servicios
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              className="font-semibold text-gray-700 hover:text-green-500 transition-colors"
              href={"/alquileres"}
            >
              Galería
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              className="font-semibold text-gray-700 hover:text-green-500 transition-colors"
              href={"#propiedades"}
            >
              Propiedades
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              className="font-semibold text-gray-700 hover:text-green-500 transition-colors"
              href={"/contacto"}
            >
              Contacto
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default ResponsiveMenu