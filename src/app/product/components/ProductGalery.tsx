"use client";
import { useState } from "react";

const MAX_IMAGES_TO_SHOW = 8;
export function ProductGalery({
  images,
}: {
  images: { src: string; description: string }[];
}) {
  const [product, setPrudct] = useState(images[0]);
  const imagesToShow = images.slice(0, MAX_IMAGES_TO_SHOW);
  const hiddenImages = images.slice(MAX_IMAGES_TO_SHOW, -1);

  if (images.length === 0) return null;

  return (
    <div className="flex ">
      <div className="flex flex-col gap-3">
        {imagesToShow.map((image, index) =>
          index < MAX_IMAGES_TO_SHOW - 1 ? (
            <button
              key={image.src}
              className="max-w-[44px] max-h-[44px] w-full h-full border  border-gray-300"
              onMouseOver={() => setPrudct(image)}
            >
              <img
                src={image.src}
                alt={image.description}
                width={44}
                height={44}
                className="max-w-[44px] max-h-[44px] object-contain w-full h-full"
              />
            </button>
          ) : (
            <button key={image.src} className="relative" onMouseOver={() => setPrudct(image)}>
              <img
                src={image.src}
                alt={image.description}
                width={44}
                height={44}
                className="max-w-[44px] max-h-[44px] object-contain 
                 border-gray-300 border opacity-25 absolute"
              />
              <span className="absolute text-3xl text-[#3483fa] inset-0 top-1 h-full">
                +{hiddenImages.length}
              </span>
            </button>
          ),
        )}
      </div>
      <div className="w-full m-auto h-full">
        <img
          className="aspect-square object-contain mx-auto"
          src={product.src}
          width={378}
          height={448}
          alt={product.description}
        />
      </div>
    </div>
  );
}
