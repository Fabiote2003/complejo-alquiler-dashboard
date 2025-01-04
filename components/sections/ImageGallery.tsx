'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const images = [
    { src: '/images/imagenes-galeria/imagen-5.jpg', alt: 'Foto de piscina y arboleda', className: 'col-span-1 row-span-1  md:col-span-2 md:row-span-2' },
    { src: '/images/imagenes-galeria/imagen-1.jpg', alt: 'Foto de espacio verde', className: 'col-span-1 row-span-1' },
    { src: '/images/imagenes-galeria/imagen-6.jpg', alt: 'Foto de piscina', className: 'col-span-1 row-span-1' },
    { src: '/images/imagenes-galeria/imagen-4.jpg', alt: 'Foto de piscina de cerca', className: 'col-span-1 row-span-1 md:col-span-2' },
    { src: '/images/imagenes-galeria/imagen-2.jpg', alt: 'Foto de pérgola', className: 'col-span-1 row-span-1' },
    { src: '/images/imagenes-galeria/imagen-3.jpg', alt: 'Foto de casa grande y pileta', className: 'col-span-1 row-span-1' },
  ]

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

   return (
        <section id='nuestroEspacio' className='max-w-6xl mx-auto py-8'>
            <h2 className='font-extrabold text-3xl mb-4 text-center'>¡Este es nuestro espacio al aire libre!</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px] px-3">
                {images.map((image, index) => (
                    <div 
                        key={index}
                        className={`relative overflow-hidden rounded-xl cursor-pointer px-3 group ${image.className}`}
                        onClick={() => setSelectedImage(image.src)}
                    >
                        <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-all duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-white text-sm font-medium truncate">
                                {image.alt}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                <div className="relative max-w-4xl w-full h-full max-h-[90vh] rounded-lg">
                    <Image
                        src={selectedImage}
                        alt="Selected image"
                        layout="fill"
                        objectFit="contain"
                        className='px-3 rounded-lg'
                    />
                    <button
                        className="absolute top-2 right-2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
                        onClick={() => setSelectedImage(null)}
                        title='Cerrar'
                    >
                    <X size={24} />
                    </button>
                </div>
                </div>
            )}
        </section>
    )
}

export default ImageGallery