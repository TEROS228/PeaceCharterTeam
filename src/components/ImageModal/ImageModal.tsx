import React, { useState, useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{ id: string; src: string; alt: string }>;
  currentImageIndex: number;
  onImageChange: (index: number) => void;
  croppedImages?: string[];
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  currentImageIndex,
  onImageChange,
  croppedImages = []
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  // Проверяем, является ли текущее изображение обрезанным
  const currentImage = images[currentImageIndex];
  const isCurrentImageCropped = currentImage ? croppedImages.includes(currentImage.id) : false;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (currentImageIndex > 0) {
            onImageChange(currentImageIndex - 1);
          }
          break;
        case 'ArrowRight':
          if (currentImageIndex < images.length - 1) {
            onImageChange(currentImageIndex + 1);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentImageIndex, images.length, onClose, onImageChange]);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isZoomed) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
    if (!isZoomed) {
      setZoomPosition({ x: 50, y: 50 });
    }
  };

  const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      onImageChange(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      onImageChange(currentImageIndex - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="image-modal-header">
          <div className="image-counter">
            {currentImageIndex + 1} / {images.length}
          </div>
          <div className="image-modal-actions">
            <button 
              className="modal-action-btn" 
              onClick={toggleZoom}
              title={isZoomed ? "Уменьшить" : "Увеличить"}
            >
              <i className={`bi ${isZoomed ? 'bi-zoom-out' : 'bi-zoom-in'}`}></i>
            </button>
            <button className="modal-action-btn" onClick={onClose} title="Закрыть">
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>

        {/* Main Image */}
        <div className="image-modal-main">
          <button 
            className="nav-btn nav-btn-left" 
            onClick={prevImage}
            disabled={currentImageIndex === 0}
            title="Предыдущее изображение"
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          <div className={`image-container ${isCurrentImageCropped ? 'cropped-container' : ''}`}>
            <img
              src={images[currentImageIndex]?.src}
              alt={images[currentImageIndex]?.alt}
              className={`modal-image ${isZoomed ? 'zoomed' : ''} ${isCurrentImageCropped ? 'cropped' : ''}`}
              onClick={toggleZoom}
              onMouseMove={handleMouseMove}
              style={{
                transform: isZoomed 
                  ? `scale(2) translate(${50 - zoomPosition.x}%, ${50 - zoomPosition.y}%)`
                  : 'scale(1)',
                objectFit: isCurrentImageCropped ? 'contain' : 'cover'
              }}
            />
          </div>

          <button 
            className="nav-btn nav-btn-right" 
            onClick={nextImage}
            disabled={currentImageIndex === images.length - 1}
            title="Следующее изображение"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        {/* Thumbnails */}
        <div className="image-modal-thumbnails">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => onImageChange(index)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
