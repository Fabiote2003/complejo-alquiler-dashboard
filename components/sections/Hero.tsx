import ReservaForm from "../ReservaForm";

export default function Hero() {
  return (
    <section
      id="inicio"
      className={`flex flex-col gap-20 items-center h-[calc(100vh-64px)] w-full bg-no-repeat bg-cover bg-center bg-[url('/images/background-image-hero.webp')] overflow-hidden justify-center`}
    >
      <ReservaForm />
    </section>
  );
}
