"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

export const Banner = () => {
  const [carouselAPI, setCarouselAPI] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!carouselAPI) return;

    setSelectedIndex(carouselAPI.selectedScrollSnap());
  }, [carouselAPI]);

  const scrollTo = (index: number) => {
    if (!carouselAPI) return;

    carouselAPI.scrollTo(index);
  };

  useEffect(() => {
    if (!carouselAPI) return;

    onSelect();

    setScrollSnaps(carouselAPI.scrollSnapList());

    carouselAPI.on("select", onSelect);
  }, [carouselAPI, onSelect]);

  return (
    <div>
      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        opts={{ loop: true, align: "center" }}
        setApi={setCarouselAPI}
      >
        <CarouselContent>
          {[...Array(3)].map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <picture>
                <img
                  src={`/banner${index + 1}.jpeg`}
                  alt="Banner"
                  width={500}
                  height={500}
                  className="w-full aspect-video object-cover h-[15rem] lg:h-[20rem]"
                />
              </picture>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-4 space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full ${
              selectedIndex === index ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
