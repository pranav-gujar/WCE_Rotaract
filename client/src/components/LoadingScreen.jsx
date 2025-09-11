import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loading screen after 0.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 500);

    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 to-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
          }}
        >
          <div className="text-center">
            {/* Animated Logo */}
            <motion.div 
              className="w-24 h-24 mx-auto mb-6 relative"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <div className="absolute inset-0 border-4 border-yellow-500 rounded-full border-t-transparent animate-spin"></div>
              <div className="absolute inset-2 border-4 border-transparent border-t-yellow-300 rounded-full animate-pulse"></div>
            </motion.div>
            
            {/* Loading Text */}
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.2 }
              }}
            >
              Rotaract WCE
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { delay: 0.4 }
              }}
            >
              Loading Experience...
            </motion.p>
            
            {/* Progress Bar */}
            <motion.div 
              className="mt-8 h-1 bg-gray-800 w-64 mx-auto rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ 
                width: '16rem',
                transition: { 
                  duration: 1, 
                  ease: [0.4, 0, 0.2, 1] 
                } 
              }}
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300"
                initial={{ width: 0 }}
                animate={{ 
                  width: '100%',
                  transition: { 
                    duration: 0.8, 
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.2
                  } 
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
