"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

export default function ProductImages({ imageUrls, name }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);

  function handleImageChange(image: string) {
    setSelectedImage(image);
  }
  return (
    <div className="flex flex-col md:w-1/2">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={selectedImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-1 px-5 md:px-0">
        {imageUrls.map((image) => (
          <button
            key={image}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent ${
              image === selectedImage &&
              "border-[1px] border-solid border-primary"
            }`}
            onClick={() => handleImageChange(image)}
          >
            <Image
              src={image}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
