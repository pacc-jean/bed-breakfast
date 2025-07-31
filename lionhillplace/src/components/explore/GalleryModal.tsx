import { useEffect, useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Props {
  images: { original: string; thumbnail: string }[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export default function GalleryModal({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    },
    [next, prev, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKey]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) next();
      else if (diff < -50) prev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/50 flex flex-col justify-center items-center px-4">
      {/* Header */}
      <div className="absolute top-4 right-4 z-20">
        <button onClick={onClose} className="text-white p-2">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Image View */}
      <div
        className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center rounded-md"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={prev}
          className="absolute left-2 md:left-4 z-20 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={images[currentIndex].original}
          className="max-h-full max-w-full object-contain rounded"
        />

        <button
          onClick={next}
          className="absolute right-2 md:right-4 z-20 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-6 flex space-x-2 overflow-x-auto px-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-20 h-14 border-2 rounded overflow-hidden ${
              idx === currentIndex ? "border-white" : "border-transparent"
            }`}
          >
            <img src={img.thumbnail} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
