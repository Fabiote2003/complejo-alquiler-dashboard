"use client";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import "react-datepicker/dist/react-datepicker.css";

export default function ReservaForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [cantidad, setCantidad] = useState('1');
  const [casa, setCasa] = useState("casa-grande");

  useEffect(() => {
    setEndDate(startDate)
  }, [startDate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Formatear las fechas
    const formatDate = (date: Date) => {
      return date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    };

    // Determinar qué casa se seleccionó
    const getCasaText = () => {
      switch(casa) {
        case "casa-grande":
          return "la casa grande";
        case "casa-chica":
          return "la casa chica";
        case "ambas":
          return "ambas casas";
        default:
          return "la casa grande";
      }
    };

    // Construir el mensaje
    const message = `Hola, deseo alquilar ${getCasaText()} de la quinta "La Familia" desde el ${formatDate(startDate)} al ${formatDate(endDate)}. Somos ${parseInt(cantidad)} personas.`;

    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);

    // Número de WhatsApp (reemplaza con el número correcto)
    const phoneNumber = "5493794801183";

    // Abrir WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 w-[350px] md:w-[500px] bg-white p-6 rounded-lg">
      <h1 className="text-black font-bold text-center text-2xl">
        Bienvenido a quinta "La Familia"
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label className="mb-1 block font-medium">¿Cual casa deseas reservar?</label>
          <RadioGroup 
            defaultValue="casa-grande" 
            className="flex justify-between"
            onValueChange={(value) => setCasa(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="casa-grande" id="casa-grande" className="cursor-pointer" />
              <Label htmlFor="casa-grande" className="cursor-pointer">Casa grande</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="casa-chica" id="casa-chica" className="cursor-pointer" />
              <Label htmlFor="casa-chica" className="cursor-pointer">Casa chica</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ambas" id="ambas" className="cursor-pointer" />
              <Label htmlFor="ambas" className="cursor-pointer">Ambas</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="" className="font-medium">
            Fecha de entrada
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => date && setStartDate(date)}
            selectsStart
            dateFormat={'dd/MM/yyyy'}
            startDate={startDate}
            minDate={new Date()}
            endDate={endDate}
            className="px-3 border border-gray-300 rounded-md py-1 w-full"
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="" className="font-medium">Fecha de salida</label>
          <DatePicker
            selected={endDate}
            onChange={(date: Date | null) => date && setEndDate(date)}
            selectsEnd
            startDate={startDate}
            dateFormat={'dd/MM/yyyy'}
            endDate={endDate}
            minDate={startDate}
            className="px-3 border border-gray-300 rounded-md py-1 w-full"
          />
        </div>
        <div className="my-2">
          <label htmlFor="cantidad" className="font-medium">Cantidad de personas {'(adultos y niños)'}</label>
          <input 
            type="number" 
            name="cantidad" 
            id="cantidad" 
            className="px-3 border border-gray-300 rounded-md py-1 w-full" 
            placeholder="Ingresa la cantidad de personas" 
            min={1}
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        <button 
          type="submit"
          className="bg-green-600 w-full py-1 mt-3 rounded-md text-white font-semibold hover:bg-green-700 transition-colors"
        >
          Reservar
        </button>
      </form>
    </div>
  );
}