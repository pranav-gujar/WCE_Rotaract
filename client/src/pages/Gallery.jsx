import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';
import { FiZoomIn, FiX, FiChevronLeft, FiChevronRight, FiExternalLink, FiCalendar, FiMapPin } from 'react-icons/fi';

import img1 from '../assets/gallery/1.jpg';
import img2 from '../assets/gallery/2.jpg';
import img3 from '../assets/gallery/3.png';
import img4 from '../assets/gallery/4.jpg';

gsap.registerPlugin(ScrollTrigger);

// Sample gallery images with enhanced metadata
const galleryImages = [
  { 
    id: 1, 
    src: img1,
    title: 'Community Service', 
    description: 'Our team organized a community service event to support local shelters with essential supplies.',
    date: '15 Jan 2023',
    category: 'Events',
    aspect: 'aspect-square',
    featured: true,
    location: 'Local Community Center'
  },
  { 
    id: 2, 
    src: img2,
    title: 'Campus Event', 
    description: 'Annual campus festival with various cultural and technical events.',
    date: '22 Feb 2023',
    category: 'Events',
    aspect: 'aspect-video',
    featured: false,
    location: 'College Campus'
  },
  { 
    id: 3, 
    src: img3,
    title: 'Workshop', 
    description: 'Interactive workshop on modern web development technologies.',
    date: '5 Mar 2023',
    category: 'Workshops',
    aspect: 'aspect-square',
    featured: true,
    location: 'Tech Lab 3'
  },
  { 
    id: 4, 
    src: img4,
    title: 'Social Gathering', 
    description: 'End of semester social gathering to celebrate achievements.',
    date: '18 Apr 2023',
    category: 'Social',
    aspect: 'aspect-video',
    featured: false,
    location: 'Student Center'
  },
  { 
    id: 5, 
    src: img1,
    title: 'Award Ceremony', 
    description: 'Annual award ceremony recognizing outstanding achievements.',
    date: '30 May 2023',
    category: 'Awards',
    aspect: 'aspect-square',
    featured: true,
    location: 'Main Auditorium'
  },
  { 
    id: 6,
    src: img2,
    title: 'Team Building', 
    description: 'Team building activities to strengthen collaboration and communication.',
    date: '12 Jun 2023',
    aspect: 'aspect-video'
  },
  { 
    id: 7, 
    src: img3,
    title: 'Career Fair', 
    description: 'Annual career fair connecting students with top employers.',
    date: '8 Jul 2023',
    aspect: 'aspect-video'
  },
  { 
    id: 8, 
    src: img4,
    title: 'Orientation Day', 
    description: 'Welcome event for new students joining our community.',
    date: '25 Aug 2023',
    aspect: 'aspect-square'
  },
];

const Gallery = () => {
  // State
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleImages, setVisibleImages] = useState(6);
  const containerRef = useRef(null);
  
  // Categories
  const categories = ['All', 'Events', 'Workshops', 'Social', 'Awards'];
  
  // Filter images based on active category
  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);
  
  // Load more images
  const loadMore = () => {
    setVisibleImages(prev => Math.min(prev + 6, filteredImages.length));
  };
  
  // Open image in full view
  const openFullImage = (image, index, e) => {
    e.preventDefault();
    openLightbox(image, index);
  };

  // Open lightbox with smooth animation
  const openLightbox = (image, index) => {
    document.body.style.overflow = 'hidden';
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  // Close lightbox with animation
  const closeLightbox = () => {
    const lightbox = document.querySelector('.lightbox-content');
    if (lightbox) {
      lightbox.style.animation = 'fadeOut 0.3s ease-out forwards';
      setTimeout(() => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
      }, 250);
    } else {
      setSelectedImage(null);
      document.body.style.overflow = 'auto';
    }
  };

  // Navigate to next/previous image with smooth transition
  const navigate = (direction) => {
    const newIndex = direction === 'prev' 
      ? (currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1)
      : (currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1);
    
    // Add fade out animation
    const lightbox = document.querySelector('.lightbox-content');
    if (lightbox) {
      lightbox.style.animation = 'fadeOut 0.2s ease-out forwards';
      
      // After fade out, update image and fade in
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setSelectedImage(filteredImages[newIndex]);
        
        // Force reflow to ensure the new image is rendered before fading in
        setTimeout(() => {
          if (lightbox) {
            lightbox.style.animation = 'fadeIn 0.3s ease-out forwards';
          }
        }, 10);
      }, 200);
    } else {
      setCurrentIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigate('prev');
          break;
        case 'ArrowRight':
          navigate('next');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, filteredImages]);

  // Close lightbox when clicking outside the image
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Animation variants for the gallery grid
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <div className="pt-24 md:pt-28 px-3 sm:px-4 md:px-6 lg:px-8 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Animated Background */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-yellow-500/5 to-emerald-500/5"
                style={{
                  width: `${Math.random() * 300 + 100}px`,
                  height: `${Math.random() * 300 + 100}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 200 - 100],
                  y: [0, Math.random() * 200 - 100],
                  rotate: [0, Math.random() * 360],
                }}
                transition={{
                  duration: Math.random() * 20 + 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Header */}
          <motion.div 
            className="text-center mb-16 relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r to-yellow-400 from-indigo-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Memories & Moments
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-emerald-400 to-cyan-400 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-indigo-500">Our Gallery</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Capturing the moments that define our journey together. Relive the memories of our events and activities.
            </motion.p>
          </motion.div>

          {/* Category Filters with horizontal scroll on mobile */}
          <div className="relative mb-8 md:mb-12">
            <motion.div 
              className="flex pb-2 overflow-x-auto scrollbar-hide relative z-10 px-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex space-x-2 px-1">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => {
                      setActiveFilter(category);
                      setVisibleImages(6); // Reset visible images when filter changes
                      // Smooth scroll to top of gallery when filter changes
                      window.scrollTo({
                        top: 500,
                        behavior: 'smooth'
                      });
                    }}
                    className={`whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                      activeFilter === category
                        ? 'bg-gradient-to-r from-yellow-500 to-emerald-500 text-white shadow-md shadow-yellow-500/20'
                        : 'bg-gray-800/70 text-gray-300 hover:bg-gray-800/90 hover:text-white backdrop-blur-sm'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>
            {/* Fade effect for horizontal scroll on mobile */}
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-20"></div>
          </div>

          {/* Responsive Masonry Grid Layout */}
          <motion.div 
            ref={containerRef}
            className="relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 md:gap-6 space-y-4 sm:space-y-5 md:space-y-6">
              {filteredImages.slice(0, visibleImages).map((image, index) => (
                <motion.div 
                  key={image.id}
                  className={`gallery-item relative group mb-6 break-inside-avoid rounded-2xl overflow-hidden shadow-xl cursor-zoom-in transform transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 ${
                    image.featured ? 'sm:col-span-2' : ''
                  }`}
                  variants={itemVariants}
                  layout
                  onClick={(e) => openFullImage(image, filteredImages.findIndex(img => img.id === image.id), e)}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    {/* Image with shine effect */}
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3]">
                      <motion.img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.05 }}
                        loading="lazy"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Hover Overlay - Visible on hover or touch devices */}
                    <div className="absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:duration-500 bg-black/30 backdrop-blur-sm">
                      <div className="px-2 sm:px-3 py-0.5 sm:py-1 bg-black/60 backdrop-blur-sm text-[10px] xs:text-xs font-medium text-white rounded-full border border-white/10 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full text-center">
                        {image.category}
                      </div>
                      <div className="text-center">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1">{image.title}</h3>
                        <p className="text-gray-200 text-[10px] xs:text-xs sm:text-sm">{image.date}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Load More Button */}
          {visibleImages < filteredImages.length && (
            <motion.div 
              className="text-center mt-12 md:mt-16 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '100px' }}
              transition={{ delay: 0.4 }}
            >
              <motion.button 
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-yellow-500 to-emerald-600 rounded-full text-sm sm:text-base text-white font-medium hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 flex items-center justify-center mx-auto group relative overflow-hidden"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 25px -5px rgba(234, 179, 8, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                onClick={loadMore}
              >
                <span className="relative z-10">Load More Memories</span>
                <motion.span 
                  className="ml-2 inline-block relative z-10"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    ease: 'easeInOut'
                  }}
                >
                  ↓
                </motion.span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>
              <p className="text-xs text-gray-500 mt-3">
                Showing {Math.min(visibleImages, filteredImages.length)} of {filteredImages.length} memories
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox with enhanced UI and animations */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={closeLightbox}
          >
            <style jsx global>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
              }
              @keyframes fadeOut {
                from { opacity: 1; transform: scale(1); }
                to { opacity: 0; transform: scale(0.95); }
              }
              .lightbox-content {
                animation: fadeIn 0.3s ease-out forwards;
              }
            `}</style>

            <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
              {/* Header with close button */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                <button 
                  className="p-2 text-gray-300 hover:text-white transition-colors"
                  onClick={closeLightbox}
                  aria-label="Close lightbox"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              
              {/* Main image container */}
              <div className="relative flex-1 flex items-center justify-center bg-black/30 rounded-xl overflow-hidden">
                {/* Navigation arrows */}
                <button 
                  className="absolute left-4 z-10 p-3 bg-black/60 text-white rounded-full hover:bg-emerald-600 transition-all transform hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('prev');
                  }}
                  aria-label="Previous image"
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="lightbox-content w-full h-full flex items-center justify-center p-2">
                  <motion.img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    loading="eager"
                    key={`image-${currentIndex}`}
                  />
                </div>
                
                <button 
                  className="absolute right-4 z-10 p-3 bg-black/60 text-white rounded-full hover:bg-emerald-600 transition-all transform hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('next');
                  }}
                  aria-label="Next image"
                >
                  <FiChevronRight className="w-6 h-6" />
                </button>
                
                {/* Loading indicator (shown during image transition) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300" id="loading-indicator">
                  <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
              
              {/* Image info */}
              <div className="mt-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{selectedImage.title}</h3>
                    <p className="text-gray-300 text-sm">{selectedImage.description}</p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <FiCalendar className="w-4 h-4 mr-2" />
                      <span>{selectedImage.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FiMapPin className="w-4 h-4 mr-2" />
                      <span>{selectedImage.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Image navigation dots */}
                <div className="flex justify-center mt-4 space-x-2">
                  {filteredImages.slice(0, 10).map((_, i) => (
                    <button
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        i === currentIndex % filteredImages.length 
                          ? 'bg-emerald-500 w-6' 
                          : 'bg-gray-600 w-2 hover:bg-gray-500'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        const targetIndex = i + (Math.floor(currentIndex / filteredImages.length) * filteredImages.length);
                        setCurrentIndex(targetIndex % filteredImages.length);
                        setSelectedImage(filteredImages[targetIndex % filteredImages.length]);
                      }}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                  {filteredImages.length > 10 && (
                    <span className="text-xs text-gray-500 ml-2 self-center">
                      +{filteredImages.length - 10} more
                    </span>
                  )}
                </div>
              </div>
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                {currentIndex + 1} / {filteredImages.length}
              </div>
              
              {/* Open in new tab button */}
              <div className="absolute bottom-4 right-4">
                <a 
                  href={selectedImage.src} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-black/60 text-white rounded-full hover:bg-emerald-600 transition-colors inline-flex items-center justify-center"
                  onClick={e => e.stopPropagation()}
                  aria-label="Open image in new tab"
                  title="Open in new tab"
                >
                  <FiExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;
