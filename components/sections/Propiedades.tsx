import data from "@/lib/data.json";
import { renderizarEmoji } from "@/components/renderizarEmoji";
import { formatCurrency } from "@/lib/utils/formatCurrency";
import Modal from "../Modal";

export default function Propiedades() {
    console.log(data);
    return(
        <section id="propiedades" className="py-8 bg-gray-100">
            <h2 className="text-3xl text-center font-extrabold">Nuestras casas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 py-6 px-4 lg:px-0 gap-5 lg:gap-0 place-items-center max-w-6xl mx-auto">
                {data.map((propiedad) => (
                    <div key={propiedad.id} className="shadow-lg w-full max-w-[450px] rounded-lg">
                        <div  className="h-[250px] w-full bg-cover bg-center rounded-tl-lg rounded-tr-lg" style={{ backgroundImage: `url(${propiedad.imagen_principal})` }}>
                        </div>
                        <div className="px-6 py-2 bg-white rounded-bl-lg rounded-br-lg">
                            <h3 className="font-bold text-lg my-2">{propiedad.name}</h3>
                            <p className="text-md text-gray-600 my-2">{propiedad.description}</p>
                            <h4 className="font-bold">Servicios:</h4>
                            <ul className="grid grid-cols-2 font-light gap-2">
                                {propiedad.services.map((service, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        {renderizarEmoji(service)}
                                        {service}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between my-2 lg:my-0">
                                <p className="font-bold text-lg lg:my-2">$ {formatCurrency(propiedad.precio.toString())}</p>
                                <p className="text-gray-500">¡A partir de 4 noches {formatCurrency((propiedad.precio - propiedad.descuento).toString())}!</p>
                            </div>
                            <Modal images={propiedad.images} title={propiedad.name} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
} 