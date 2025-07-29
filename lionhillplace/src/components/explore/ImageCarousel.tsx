import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: { original: string; thumbnail: string }[];
  onImageClick: (index: number) => void;
  onSlide?: (index: number) => void;
}

export default function ImageCarousel({ images, onImageClick, onSlide }: Props) {
  const [index, setIndex] = useState(0);

  const updateIndex = useCallback(
    (newIndex: number) => {
      const normalized = (newIndex + images.length) % images.length;
      setIndex(normalized);
      if (onSlide) onSlide(normalized);
    },
    [images.length, onSlide]
  );

  const next = () => updateIndex(index + 1);
  const prev = () => updateIndex(index - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(index + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [updateIndex, index]);

  return (
    <div
      className="relative h-64 md:h-72 w-full bg-gray-200 cursor-pointer group overflow-hidden"
      onClick={() => onImageClick(index)}
    >
      <img
        src={images[index].original}
        className="w-full h-full object-cover object-center transition-all duration-300"
      />

      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
