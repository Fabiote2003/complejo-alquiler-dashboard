import Link from 'next/link'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer id='contacto' className="bg-gray-100 text-sage-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl mb-4">La Familia</h3>
            <p className="text-sm">Ofrecemos lugares de alojamiento tranquilos para que disfrutes con tu familia de momentos de paz y conexión con la naturaleza.</p>
          </div>
          <div>
            <h3 className="text-xl mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/alojamientos" className="hover:text-sage-800">Alojamientos</Link></li>
              <li><Link href="/actividades" className="hover:text-sage-800">Gran espacio al aire libre</Link></li>
              <li><Link href="/gastronomia" className="hover:text-sage-800">Piscina</Link></li>
              <li><Link href="/reservas" className="hover:text-sage-800">Eventos</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl mb-4">Contáctanos</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+54 9 3794 80-1183</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:fabiote2003@gmail.com" className="hover:text-sage-800">fabiote2003@gmail.com</a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
             
            </div>
          </div>
        </div>
        <div className="mt-8 py-4 bg-green-500 rounded-lg text-white text-center">
          <p className="text-lg">Descubre la tranquilidad en La Familia</p>
        </div>
        <div className="mt-4 pt-4 border-t border-sage-200 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} La Familia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
