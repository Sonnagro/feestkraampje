
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="aspect-w-4 aspect-h-3">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" 
              />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Vergrote foto" 
              className="w-full h-full object-contain" 
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
