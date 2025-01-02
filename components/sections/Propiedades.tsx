import data from "@/lib/data.json";
import { renderizarEmoji } from "@/components/renderizarEmoji";
import { formatCurrency } from "@/lib/utils/formatCurrency";
import { Button } from "@/components/ui/button";

export default function Propiedades() {
    console.log(data);
    return(
        <section className="py-8 bg-gray-100">
            <h2 className="text-3xl text-center font-extrabold">Nuestras casas</h2>
            <div className="grid grid-cols-2 py-6 place-items-center max-w-6xl mx-auto">
                {data.map((propiedad) => (
                    <div key={propiedad.id} className="shadow-lg w-full max-w-[450px] cursor-pointer rounded-lg">
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
                            <div className="flex items-center justify-between">
                                <p className="font-bold text-lg my-2">$ {formatCurrency(propiedad.precio.toString())}</p>
                                <p className="text-gray-500">¡A partir de 4 noches {formatCurrency((propiedad.precio - propiedad.descuento).toString())}!</p>
                            </div>
                            <Button className="bg-green-600 w-full hover:bg-green-700 transition-colors my-2">Ver imagenes</Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
} 