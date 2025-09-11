import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { id: 1, label: 'Home', href: '/', isHome: true },
  { id: 2, label: 'Events', href: '/events' },
  { id: 3, label: 'Gallery', href: '/gallery' },
  { id: 4, label: 'Team', href: '/team' },
  { id: 5, label: 'Join Us', href: '/join-us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Track the active link in state
  const [activeLink, setActiveLink] = useState(() => {
    // If we're on a page like /gallery or /events
    if (location.pathname !== '/') {
      return location.pathname;
    }
    // If we're on the home page with a hash
    if (location.hash) {
      return location.hash;
    }
    // Default to home
    return '/';
  });

  // Update active link when location changes
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setActiveLink(location.hash);
    } else if (location.pathname !== '/') {
      setActiveLink(location.pathname);
    } else {
      setActiveLink('/');
    }
  }, [location]);

  const isLinkActive = useCallback((linkHref, isHome = false) => {
    if (isHome) {
      return activeLink === '/' || activeLink === '#home';
    }
    // For hash links on home page
    if (linkHref.startsWith('/#')) {
      return activeLink === linkHref.substring(1); // Remove the leading /
    }
    // For route links
    return activeLink === linkHref;
  }, [activeLink]);

  const createRipple = useCallback((event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    const existingRipple = button.querySelector('.ripple-effect');
    if (existingRipple) {
      existingRipple.remove();
    }
    
    button.appendChild(ripple);
    
    // Remove ripple after animation completes
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }, []);

  const handleNavClick = useCallback((e, href, isHome = false) => {
    // Create ripple effect
    createRipple(e);
    
    // Close mobile menu if open
    setIsOpen(false);
    
    // If it's a hash link on the home page
    if (href.startsWith('/#')) {
      e.preventDefault();
      // If we're already on the home page, just scroll
      if (location.pathname === '/') {
        const targetId = href.substring(2); // Remove the /#
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          // Update URL without causing a reload
          window.history.pushState({}, '', `/#${targetId}`);
          setActiveLink(`#${targetId}`);
        }
      } else {
        // Navigate to home with hash
        navigate(href);
      }
    } 
    // For regular routes like /gallery or /events
    else if (href.startsWith('/')) {
      // Let the default Link behavior handle it
      // We still need to update the active link
      setActiveLink(href);
    }
    // For home link
    else if (isHome) {
      e.preventDefault();
      navigate('/');
      setActiveLink('/');
    }
  }, [createRipple, location.pathname, navigate]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close menu when clicking outside
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <section className="fixed left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:px-6 top-4 sm:top-6">
        <div className="w-full max-w-7xl mx-auto">
          <div className="border border-white/15 rounded-2xl lg:rounded-full bg-neutral-950/70 backdrop-blur overflow-hidden">
            <div className="flex justify-between items-center py-3 px-4 sm:px-6">
              {/* Logo */}
              <a 
                href="/#coins"
                onClick={(e) => {
                  e.preventDefault();
                  
                  // If we're not on the home page, navigate there first
                  if (location.pathname !== '/') {
                    navigate('/#coins');
                    return;
                  }
                  
                  // If we're already on the home page, just scroll to the coins section
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  
                  setTimeout(() => {
                    const coinsSection = document.getElementById('coins');
                    if (coinsSection) {
                      coinsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 0);
                }}
                className="text-lg sm:text-xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors duration-300 relative overflow-hidden px-3 py-1.5 rounded-lg"
              >
                ROTARACT WCE
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => {
                  const isActive = isLinkActive(link.href, link.isHome);
                  return (
                    <Link
                      key={link.id}
                      to={link.href}
                      onClick={(e) => handleNavClick(e, link.href, link.isHome)}
                      className={`px-3 sm:px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 relative overflow-hidden ${
                        isActive
                          ? 'text-yellow-400 bg-white/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>


            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden lg:hidden"
                >
                  <div className="flex flex-col gap-2 p-4 border-t border-white/10">
                    {navLinks.map((link) => (
                      <Link
                        key={link.id}
                        to={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium relative overflow-hidden ${
                          isLinkActive(link.href)
                            ? 'bg-yellow-600/20 text-yellow-400'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        } transition-colors`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      
      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      <div className="h-[72px] lg:h-[88px]"></div> {/* Spacer for fixed navbar */}
      <style jsx="true" global="true">
        {`
          .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
          }
          
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
}
