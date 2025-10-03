import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Define multiple images per event here (filenames inside /public/assets/gallery)
  const eventImageSets = [
    {
      eventId: 'gamedev',
      title: 'GameDev Workshop',
      description: 'Highlights from our hands-on game development session.',
      altPrefix: 'GameDev workshop photo',
      files: [
        'gamedev-1.jpeg',
        'gamedev-2.jpeg',
        'gamedev-3.jpeg'
      ]
    },
    {
      eventId: 'github-session',
      title: 'GitHub Session',
      description: 'Learning Git and GitHub workflows for open-source contributions.',
      altPrefix: 'GitHub session photo',
      files: [
        'github-session-1.jpg',
        'github-session-2.jpg'
        
      ]
    },
    {
      eventId: 'hacktopia',
      title: 'Hacktopia',
      description: 'Moments from the Hacktopia meetup.',
      altPrefix: 'Hacktopia event photo',
      files: [
        'hacktopia-1.jpeg',
        'hacktopia-2.jpeg',
        'hacktopia-3.jpeg'
      ]
    },
    {
      eventId: 'linkedin',
      title: 'LinkedIn Session',
      description: 'Building standout developer profiles on LinkedIn.',
      altPrefix: 'LinkedIn session photo',
      files: [
        'linkedin-1.jpg',
        'linkedin-2.jpg',
        'linkedin-3.jpg'
      ]
    }
  ];

  // Flatten into the structure used by the grid
  const galleryImages = eventImageSets.flatMap((event) =>
    event.files.map((filename, index) => ({
      id: `${event.eventId}-${index + 1}`,
      src: `/assets/gallery/${filename}`,
      alt: `${event.altPrefix} ${index + 1}`,
      title: event.title,
      description: event.description
    }))
  );

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent  group-hover:opacity-100 transition-opacity duration-300">
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
       
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[70] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            {/* Back button */}
            <button
              aria-label="Back"
              className="absolute top-2 left-2 md:top-4 md:left-4 z-10 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black/60 border border-white/20 text-white hover:bg-black/80 hover:border-white/40 transition-colors text-sm md:text-base"
              onClick={closeModal}
            >
              ← Back
            </button>
            {/* Close button */}
            <button
              aria-label="Close"
              className="absolute top-2 right-2 md:top-4 md:right-4 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/60 border border-white/20 text-white hover:bg-black/80 hover:border-white/40 flex items-center justify-center text-2xl leading-none"
              onClick={closeModal}
            >
              ×
            </button>
            
            {/* Image container */}
            <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[55vh] object-contain"
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
