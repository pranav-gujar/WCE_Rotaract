import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component prefetches all pages when the app loads
const PrefetchLinks = () => {
  const location = useLocation();

  useEffect(() => {
    // Prefetch all route components
    const prefetchAll = async () => {
      const modules = [
        import('../pages/Gallery'),
        import('../pages/Events'),
        import('../pages/EventDetail'),
        import('../pages/Team'),
        import('../pages/JoinUs'),
        import('../pages/About')
      ];
      
      // Start prefetching all components
      await Promise.all(modules.map(module => module.catch(e => {
        console.warn('Prefetch failed for module:', e);
        return null;
      })));
    };

    // Start prefetching after initial render
    const prefetchTimer = setTimeout(prefetchAll, 1000);
    
    return () => clearTimeout(prefetchTimer);
  }, []);

  return null;
};

export default PrefetchLinks;
