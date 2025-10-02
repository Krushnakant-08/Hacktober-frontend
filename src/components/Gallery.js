import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Gallery images array - add your images here
  const galleryImages = [];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-[#0D0C1D] pt-32 pb-16 px-4 relative z-10">
      <div className="relative max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-7xl font-mono font-bold text-purple-400 mb-6"
            style={{
              textShadow: "0 0 8px rgba(180,0,255,0.6), 0 0 15px rgba(180,0,255,0.4)"
            }}
          >
            Gallery
          </h1>
          <p className="text-xl text-purple-200 font-mono mb-4">
            Relive the memories from Hacktoberfest 2024
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/50"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.length > 0 ? (
            galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                onClick={() => openModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full aspect-[4/3] object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-purple-200 text-sm">{image.description}</p>
                  </div>
                </div>
                
                {/* View Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-purple-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    <span className="text-lg">👁️</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20">
              <div className="text-8xl mb-6 text-purple-400/60">📷</div>
              <h3 className="text-3xl font-bold text-purple-400 mb-4">No Images Yet</h3>
              <p className="text-purple-200 text-center max-w-md font-mono">
                Gallery is ready for your Hacktoberfest 2024 memories! Add images to the gallery folder to get started.
              </p>
            </div>
          )}
        </div>

        {/* Upload Instructions */}
        <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-4">
            Add Your Images
          </h3>
          <p className="text-purple-200 mb-6 font-mono">
            To add your Hacktoberfest 2024 images, place them in the <code className="bg-purple-500/20 px-2 py-1 rounded">/public/assets/gallery/</code> folder 
            and update the gallery data.
          </p>
          <div className="text-purple-300 text-sm font-mono">
            <p>📁 Supported formats: JPG, PNG, WebP</p>
            <p>📐 Recommended size: 800x600px or 4:3 aspect ratio</p>
          </div>
        </div>
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close button */}
            <button
              className="absolute -top-12 right-0 text-white text-4xl hover:text-purple-400 transition-colors z-10"
              onClick={closeModal}
            >
              ×
            </button>
            
            {/* Image container */}
            <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[70vh] object-contain"
              />
              
              {/* Image info */}
              <div className="p-6 bg-black/40">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">{selectedImage.title}</h3>
                <p className="text-purple-200">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
