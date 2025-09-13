import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLoader } from 'react-icons/fi';

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.loop = true;
    video.muted = false; // we want sound
    video.playsInline = true;

    const playWithSound = async () => {
      try {
        video.muted = false;
        await video.play();
        console.log("Video playing with sound");
      } catch (err) {
        console.error("Autoplay with sound blocked:", err);
      }
    };

    const pauseVideo = () => {
      video.pause();
      console.log("Video paused");
    };

    // IntersectionObserver → play only if visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playWithSound();
          } else {
            pauseVideo();
          }
        });
      },
      { threshold: 0.5 } // at least 50% visible
    );
    observer.observe(video);

    // Handle tab switching
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseVideo();
      } else {
        // check if still visible before resuming
        const rect = video.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          playWithSound();
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Loading animation
  const LoadingSpinner = () => (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-black/90 z-10"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="mx-auto w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full mb-4"
        />
        <p className="text-yellow-500 text-lg font-medium">Loading Experience</p>
      </div>
    </motion.div>
  );

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && !error && <LoadingSpinner />}
      </AnimatePresence>

      {error ? (
        <div className="w-full h-full flex items-center justify-center text-red-400 p-8 text-center">
          <div>
            <p className="text-xl mb-4">⚠️ {error}</p>
            <p className="text-gray-400 text-sm">
              Please ensure the video file exists at: <code className="bg-gray-800 p-1 rounded">/public/videos/video.mp4</code>
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-90"
            playsInline
            autoPlay
            loop
            preload="auto"
            controls
            onError={(e) => {
              console.error('Video error event:', e);
              setError('Failed to load video. Check console for details.');
            }}
            onLoadStart={() => setIsLoading(true)}
            onLoadedData={() => setIsLoading(false)}
          >
            <source 
              src="/videos/video.mp4" 
              type="video/mp4" 
              onError={(e) => {
                console.error('Source error:', e);
                setIsLoading(false);
                setError('Video source not found. Check the file path.');
              }}
            />
            Your browser does not support the video tag.
          </video>
        </>
      )}

      {/* Overlay for text */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <motion.div 
          className="text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join the <span className="text-yellow-400">Rotaract</span> Experience
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Be part of something bigger. Create memories, build skills, and make a difference in our community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
