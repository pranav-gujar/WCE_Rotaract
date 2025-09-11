import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLoader } from 'react-icons/fi';

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Auto-play and loop the video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Log video source for debugging
    console.log('Video source:', video.querySelector('source')?.src);
    
    // Set video to loop and mute
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    
    // Try to play the video
    const playVideo = async () => {
      try {
        await video.play();
        console.log('Video is playing');
      } catch (err) {
        console.error('Error playing video:', err);
        setError('Error loading video. Please ensure the video file exists at /public/videos/video.mp4');
      }
    };

    // Handle when video is loaded
    const handleLoaded = () => {
      console.log('Video metadata loaded');
      setIsLoading(false);
      playVideo();
    };

    // Handle errors
    const handleError = (e) => {
      console.error('Video error:', e);
      setError('Error loading video. Please check the console for details.');
    };

    // Add event listeners
    video.addEventListener('loadedmetadata', handleLoaded);
    video.addEventListener('error', handleError);
    
    // Initial play attempt
    playVideo();
    
    // Cleanup
    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded);
      video.removeEventListener('error', handleError);
    };
  }, []);

  // Loading animation component
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
            muted
            loop
            preload="auto"
            onError={(e) => {
              console.error('Video error event:', e);
              setError('Failed to load video. Check console for details.');
            }}
          >
            <source 
              src="/videos/video.mp4" 
              type="video/mp4" 
              onError={(e) => {
                console.error('Source error:', e);
                setIsLoading(false);
                setError('Video source not found. Check the file path.');
              }}
              onLoadStart={() => setIsLoading(true)}
              onLoadedData={() => setIsLoading(false)}
            />
            Your browser does not support the video tag.
          </video>
        </>
      )}

      {/* Overlay for better text visibility */}
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
