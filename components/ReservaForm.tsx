"use client";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import "react-datepicker/dist/react-datepicker.css";

export default function ReservaForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    setEndDate(startDate)
  }, [startDate])

  return (
    <div className="grid grid-cols-1 w-[350px] md:w-[500px] bg-white p-6 rounded-lg">
      <h1 className="text-black font-bold text-center text-2xl">
        Bienvenido a quinta "La Familia"
      </h1>
      <form className="">
        <div className="my-3">
          <label className="mb-1 block font-medium">¿Cual casa deseas reservar?</label>
          <RadioGroup defaultValue="option-one" className="flex justify-between">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" className="cursor-pointer" />
              <Label htmlFor="option-one" className="cursor-pointer">Casa grande</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" className="cursor-pointer"  />
              <Label htmlFor="option-two" className="cursor-pointer">Casa chica</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" className="cursor-pointer"  />
              <Label htmlFor="option-three" className="cursor-pointer">Ambas</Label>
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
            minDate={startDate}
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
          <input type="number" name="cantidad" id="cantidad" className="px-3 border border-gray-300 rounded-md py-1 w-full" placeholder="Ingresa la cantidad de personas" min={1} />
        </div>
        <button className="bg-green-600 w-full py-1 mt-3 rounded-md text-white font-semibold">
          Reservar
        </button>
      </form>
    </div>
  );
}
