import { BsFillHousesFill } from "react-icons/bs";
import { FaSwimmingPool } from "react-icons/fa";
import { FaTree } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { GiSofa } from "react-icons/gi";
import { FaSun } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import { PiSoccerBallFill } from "react-icons/pi";
import { GiPartyPopper } from "react-icons/gi";
import { FaParking } from "react-icons/fa";


export default function Services() {
    return (
        <section className="mx-auto max-w-6xl pt-16 pb-16">
            <h2 className="text-3xl text-center font-extrabold">¡Mirá nuestros Servicios!</h2>
            <div className="px-4 grid grid-cols-3 gap-6 mt-4">
                <div className="py-6 px-4 rounded-lg bg-gray-50 shadow-lg">
                    <BsFillHousesFill className="text-green-500 text-4xl" />
                    <h3 className="font-bold text-lg mt-2">2 casas equipadas</h3>
                    <p className="mt-2">Disfruta de dos casas completamente equipadas con todas las comodidades para tu estancia perfecta.</p>
                    <div className="mt-2 text-gray-600">
                        <p className="flex items-center gap-2 text-sm">
                            <FaBed />
                            <span>Dormitorios confortables</span>
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <FaKitchenSet />
                            <span>Coscina equipada</span>
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <GiSofa />
                            <span>Sala de estar</span>
                        </p>
                    </div>
                </div>
                <div className="py-6 px-4 rounded-lg bg-gray-50 shadow-lg">
                    <FaSwimmingPool className="text-green-500 text-4xl" />
                    <h3 className="font-bold text-lg mt-2">Piscina</h3>
                    <p className="mt-2">Refréscate en nuestra piscina privada, perfecta para días soleados y momentos de diversión.</p>
                    <div className="mt-2 text-gray-600">
                        <p className="flex items-center gap-2 text-sm">
                            <FaUmbrellaBeach />
                            <span>Área de descanso</span>
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <FaSun />
                            <span>Zona de bronceado</span>
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <FaShower />
                            <span>Duchas exteriores</span>
                        </p>
                    </div>
                </div>
                <div className="py-6 px-4 rounded-lg bg-gray-50 shadow-lg">
                    <FaTree className="text-green-500 text-4xl" />
                    <h3 className="font-bold text-lg mt-2">
                        Amplio Terreno
                    </h3>
                    <p className="mt-2">Espacio exclusivo de 42x42 metros para todas tus actividades al aire libre.</p>
                    <div className="mt-2 text-gray-600">
                        <p className="flex items-center gap-2 text-sm">
                            <PiSoccerBallFill />
                            <span>Área recreativa</span>
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <GiPartyPopper />
                            <span>Espacio para eventos</span>
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <FaParking />
                            <span>Estacionamiento amplio</span>
                        </p>
                    </div>
                </div>
               
            </div>
        </section>
    )
}