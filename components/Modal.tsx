import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"
import Image from "next/image";

interface ModalProps {
    images: string[],
    title: string,
}

const Modal = ({images, title}: ModalProps) => {
  console.log(images);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"} className="w-full mx-auto bg-green-600 hover:bg-green-700 mt-2 mb-3">Ver imagenes</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[320px] sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px] rounded-md">
        <DialogHeader>
          <DialogTitle>Imagenes de la {title}</DialogTitle>
          <DialogDescription>
            Aquí puedes ver la propiedad en detalle.
          </DialogDescription>
        </DialogHeader>
        <Carousel>
          <CarouselPrevious />
          <CarouselContent className="mx-auto">
            {images.map((image, index) => (
              <CarouselItem key={index} className="relative h-[400px]">
                <Image fill className="max-w-full object-contain"  src={image}  alt={`Image ${index + 1}`} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
        <DialogFooter>
          <Button type="submit" className="w-full mx-auto max-w-full bg-green-600 hover:bg-green-700 rounded-sm">Reservar esta casa</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Modal