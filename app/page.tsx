import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import ImageGallery from "@/components/sections/ImageGallery";
import Propiedades from "@/components/sections/Propiedades";
import Services from "@/components/sections/Services";

export default async function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Propiedades />
      <ImageGallery />
      <Footer />
    </>
  );
}
