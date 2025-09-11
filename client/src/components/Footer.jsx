import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  
  // Function to handle smooth scrolling to sections
  const scrollToSection = (id, e) => {
    if (!id) return;
    
    // If the link is clicked (not just programmatic navigation)
    if (e) {
      e.preventDefault();
    }
    
    // Remove the '#' from the hash if present
    const elementId = id.startsWith('#') ? id.substring(1) : id;
    const element = document.getElementById(elementId);
    
    if (element) {
      // Add a small delay to ensure the page has loaded
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Add a highlight effect
        element.classList.add('ring-2', 'ring-yellow-400');
        setTimeout(() => {
          element.classList.remove('ring-2', 'ring-yellow-400');
        }, 2000);
      }, 100);
    }
  };

  // Handle hash changes when the component mounts or updates
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Add a small delay to ensure the component is mounted
      const timer = setTimeout(() => {
        scrollToSection(hash);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const socialIconVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: { 
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-12 md:pt-16 pb-6 md:pb-8 relative">
      {/* Golden top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8 mb-8 md:mb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px 0px -100px 0px" }}
          variants={footerVariants}
        >
          {/* About Section */}
          <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
              <span className="w-1 h-6 bg-yellow-500 mr-2"></span>
              About Us
            </h3>
            <p className="mb-4 text-sm leading-relaxed">
              Rotaract Club of WCE Sangli is one of the oldest clubs in WCE, established on February 23rd, 1975. 
              We are committed to community service, professional development, and international understanding.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                // { 
                //   icon: <FaFacebook className="w-5 h-5" />, 
                //   bg: "hover:bg-blue-600",
                //   text: "hover:text-white"
                // },
                // { 
                //   icon: <FaTwitter className="w-5 h-5" />, 
                //   bg: "hover:bg-cyan-500",
                //   text: "hover:text-white"
                // },
                { 
                  icon: <FaInstagram className="w-5 h-5" />, 
                  bg: "hover:bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500",
                  url: "https://www.instagram.com/wcerotaract?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
                  text: "hover:text-white"
                },
                { 
                  icon: <FaLinkedin className="w-5 h-5" />,
                  url: "https://www.linkedin.com/company/rotaract-club-of-wce-sangli/",
                  bg: "hover:bg-blue-700",
                  text: "hover:text-white"
                },
                { 
                  icon: <FaYoutube className="w-5 h-5" />,
                  url: "https://www.youtube.com/@rotaractclubofwcesangli7003/featured",
                  bg: "hover:bg-red-600",
                  text: "hover:text-white"
                }
              ].map((social, index) => (
                <motion.a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 text-gray-300 ${social.bg} ${social.text} transition-all duration-300`}
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  aria-label={`${social.icon.type.name} link`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
              <span className="w-1 h-6 bg-yellow-500 mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { name: 'Home', url: '/' },
                { name: 'About Us', url: '/about' },
                { name: 'Events', url: '/events' },
                { name: 'Gallery', url: '/gallery' },
                { name: 'Join Us', url: '/join-us' }
              ].map((link, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants} 
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <Link 
                    to={link.url}
                    className="text-sm sm:text-[0.9rem] text-gray-400 hover:text-yellow-500 transition-colors duration-300 flex items-center py-1 sm:py-0.5"
                    onClick={(e) => {
                      // If we're already on the same page, prevent default and scroll to top
                      if (location.pathname === link.url) {
                        e.preventDefault();
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Avenues */}
          <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
              <span className="w-1 h-6 bg-yellow-500 mr-2"></span>
              Our Avenues
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { name: 'Club Service', id: 'club-service' },
                { name: 'Community Service', id: 'community-service' },
                { name: 'International Service', id: 'international-service' },
                { name: 'Professional Development', id: 'professional-development' },
                { name: 'TechOps', id: 'techops' }
              ].map((avenue, index) => (
                <motion.li key={index} variants={itemVariants} whileHover={{ x: 5 }}>
                  <Link 
                    to={`/about#${avenue.id}`}
                    onClick={(e) => {
                      if (location.pathname === '/about') {
                        e.preventDefault();
                        scrollToSection(`#${avenue.id}`, e);
                      }
                    }}
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {avenue.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
              <span className="w-1 h-6 bg-yellow-500 mr-2"></span>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <motion.li className="flex items-start" variants={itemVariants}>
                <FaMapMarkerAlt className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-sm">
                  Walchand College of Engineering,<br />
                  Vishrambag, Sangli,<br />
                  Maharashtra 416415, India
                </span>
              </motion.li>
              <motion.li className="flex items-center" variants={itemVariants}>
                <FaPhone className="text-yellow-500 mr-3" />
                <a href="tel:+91XXXXXXXXXX" className="text-sm hover:text-yellow-500 transition-colors duration-300">+91 96651 36330</a>
              </motion.li>
              <motion.li className="flex items-center" variants={itemVariants}>
                <FaEnvelope className="text-yellow-500 mr-3" />
                <a href="mailto:contact@rotaractwce.org" className="text-sm hover:text-yellow-500 transition-colors duration-300">rotaractclubofwcesangli@gmail.com</a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-8 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            &copy; {currentYear} Rotaract Club of WCE. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="text-xs sm:text-sm text-gray-500 hover:text-yellow-500 transition-colors whitespace-nowrap">Privacy Policy</Link>
            <Link to="/terms" className="text-xs sm:text-sm text-gray-500 hover:text-yellow-500 transition-colors whitespace-nowrap">Terms of Service</Link>
          </div>
          <span className="text-yellow-400 text-sm font-medium tracking-wider">
            Learning Is Our Precept
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
