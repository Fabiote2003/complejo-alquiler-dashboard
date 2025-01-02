import Hero from "@/components/sections/Hero";
import Propiedades from "@/components/sections/Propiedades";
import Services from "@/components/sections/Services";

export default async function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Propiedades />
    </>
  );
}
