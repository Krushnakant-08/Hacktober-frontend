import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  // Custom arrows for react-slick
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        type="button"
        aria-label="Previous image"
        className={`${className || ''} !left-3 !z-20`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <span className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/30 flex items-center justify-center text-white hover:bg-black/80 transition-colors">
          {/* Left chevron */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        type="button"
        aria-label="Next image"
        className={`${className || ''} !right-3 !z-20`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <span className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/30 flex items-center justify-center text-white hover:bg-black/80 transition-colors">
          {/* Right chevron */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    );
  };

  // Carousel settings for react-slick
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    accessibility: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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

        {/* Per-Event Cards with Carousels */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {eventImageSets && eventImageSets.length > 0 ? (
            eventImageSets.map((event) => {
              const images = event.files.map((filename, index) => ({
                id: `${event.eventId}-${index + 1}`,
                src: `/assets/gallery/${filename}`,
                alt: `${event.altPrefix} ${index + 1}`,
                title: event.title,
                description: event.description
              }));
              return (
                <section
                  key={event.eventId}
                  className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-colors"
                  aria-label={`${event.title} gallery`}
                >
                  <header className="px-5 pt-5">
                    <h2 className="text-2xl font-bold text-purple-300 mb-1">{event.title}</h2>
                    <p className="text-purple-200/90 text-sm mb-4">{event.description}</p>
                  </header>
                  <div className="relative">
                    <Slider {...sliderSettings}>
                      {images.map((image) => (
                        <div key={image.id} className="px-5 pb-6">
                          <button
                            type="button"
                            className="block group relative w-full overflow-hidden rounded-xl border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            onClick={() => openModal(image)}
                            aria-label={`Open ${image.title} image in fullscreen`}
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full aspect-[16/9] object-cover"
                            />
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </button>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </section>
              );
            })
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
