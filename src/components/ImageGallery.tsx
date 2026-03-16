import { useState } from "react";
import { cn } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryItem {
  src: string;
  title: string;
  subtitle?: string;
}

interface ImageGalleryProps {
  items: GalleryItem[];
  columns?: 2 | 3 | 4 | 5 | 6;
}

const colsClass = {
  2: "grid-cols-2",
  3: "grid-cols-2 md:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  6: "grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
};

const ImageGallery = ({ items, columns = 4 }: ImageGalleryProps) => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i !== null && i > 0 ? i - 1 : items.length - 1));
  const next = () => setLightbox((i) => (i !== null && i < items.length - 1 ? i + 1 : 0));

  return (
    <>
      <div className={cn("grid gap-3", colsClass[columns])}>
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className={cn(
              "group block overflow-hidden rounded-sm border border-border bg-card",
              "hover:shadow-lg hover:border-accent transition-all duration-300 text-left",
              "opacity-0 animate-fade-in"
            )}
            style={{ animationDelay: `${100 + i * 50}ms` }}
          >
            <div className="aspect-[3/4] bg-muted overflow-hidden">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-1.5">
              <p className="text-[11px] font-heading text-card-foreground truncate">{item.title}</p>
              {item.subtitle && (
                <p className="text-[10px] text-muted-foreground truncate">{item.subtitle}</p>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 text-background hover:text-accent transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-background hover:text-accent transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-background hover:text-accent transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="max-w-3xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[lightbox].src}
              alt={items[lightbox].title}
              className="max-h-[75vh] max-w-full object-contain rounded"
            />
            <p className="text-background text-sm font-heading mt-3 text-center">
              {items[lightbox].title}
              {items[lightbox].subtitle && ` — ${items[lightbox].subtitle}`}
            </p>
            <p className="text-background/50 text-xs mt-1">
              {lightbox + 1} / {items.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
