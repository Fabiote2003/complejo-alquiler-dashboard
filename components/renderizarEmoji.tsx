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
import { FaToilet } from "react-icons/fa";
import { ReactNode } from 'react';
import { GiBarbecue } from "react-icons/gi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaWifi } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { TbAirConditioning } from "react-icons/tb";


export const renderizarEmoji = (service: string): ReactNode => {
    switch(service) {
        case "Cocina":
            return <FaKitchenSet />;
        case "1 Baño":
            return <FaToilet />;
        case "Aire acondicionado":
            return <TbAirConditioning />;
        case "1 habitación":
            return <FaBed />;
        case "2 habitaciones":
            return <FaBed />;
        case "Parrilla":
            return <GiBarbecue />
        case "Comedor":
            return <TbToolsKitchen3 />;
        case "Sofa cama":
            return <GiSofa />;
        case "Piscina":
            return <FaSwimmingPool />;
        case "Wifi":
            return <FaWifi />;
        case "Heladera":
            return <CgSmartHomeRefrigerator />;
        case "Freezer":
            return <CgSmartHomeRefrigerator />;
        default:
            return "❓";
    }
}