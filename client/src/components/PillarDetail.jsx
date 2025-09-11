import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaLinkedin, FaInstagram, FaTwitter, FaGlobe, FaYoutube, FaFacebook } from 'react-icons/fa';
import founderImg from "../assets/images/pranav.jpg";


const PillarDetail = ({ pillar, onClose }) => {
  // Default content for each pillar type
  const pillarContent = {
    'techops': {
      title: 'TechOps Rotaract',
      shortIntro: 'TechOps Rotaract – The engine that drives our club into the digital future. From websites to innovations, we build, we code, we create.',
      about: 'TechOps Rotaract is the technical heartbeat of Rotaract Club of WCE Sangli. We focus on bringing technology, design, and innovation together to strengthen the impact of our initiatives. From crafting our official website to building digital solutions for events and campaigns, TechOps is where creativity meets execution.',
      foundersNote: 'As the first Chief Technical Operations Director, Rtr. Pranav Gujar, envisioned TechOps as more than just a technical wing. It\'s a platform where skills grow, ideas turn into reality, and technology empowers community service. A foundation for everything that comes next.',
      vision: 'The future of TechOps Rotaract is not just coding, but creating meaningful impact through technology. We invite every member with curiosity, creativity, or technical skills to join hands in building digital solutions that serve people, planet, and progress.',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/pranav-gujar-54551b226/?originalSubdomain=in',
        instagram: 'https://www.instagram.com/mr.pranav_gujar_official_/',
        youtube: 'https://www.youtube.com/channel/UCDNZe2puEVadKJnZ_PL3dCg',
        website: 'https://pranavgujar.netlify.app/'
      }
    },
    'default': {
      title: pillar?.title || 'Pillar',
      about: 'This is a detailed description of the ' + (pillar?.title || 'pillar') + '. It highlights the key initiatives, goals, and impact of this important aspect of our club. More information will be added soon.',
      vision: 'Our vision is to continue growing and making a positive impact through our initiatives in this area.'
    }
  };

  const content = pillar?.id === 'techops' ? pillarContent.techops : { ...pillarContent.default, ...pillar };

  return (
    <motion.div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div 
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700/50 max-w-4xl mx-auto my-16 p-8 relative overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Back button */}
        <button 
          onClick={onClose}
          className="flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to Pillars
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">{content.title}</h2>
          {content.shortIntro && (
            <p className="text-gray-300 text-lg mb-6">{content.shortIntro}</p>
          )}
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full"></div>
        </div>

        {/* Main content */}
        <div className="space-y-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">📌 About {content.title}</h3>
            <p className="text-gray-300 leading-relaxed">{content.about}</p>
          </div>

          {/* Founder's Note (TechOps only) */}
          {content.foundersNote && (
            <div className="bg-gray-800/50 rounded-xl p-6 border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold text-white mb-3">👨‍💻 Founder's Note</h3>
              <p className="text-gray-300 italic mb-4">"{content.foundersNote}"</p>
              <div className="flex items-center">
                <div className="w-24 h-24 rounded-full bg-gray-700 overflow-hidden border-2 border-yellow-500/50 mr-4">
                  <img 
                    src={founderImg} 
                    alt="Founder"
                    className="w-full h-full object-cover rounded-full"
                    // className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIe2QyYzVhY30iPjxwYXRoIGQ9Ik0xMiAxMmM0LjQxOCAwIDggMy4zNTggOCA3LjUgMCAuNTUyLS40NDggMS0xIDFzLTEtLjQ0OC0xLTFjMC0zLjAzMi0yLjY5LTUuNS02LTUuNXMtNiAyLjQ2OC02IDUuNWMwIC41NTItLjQ0OCAxLTEgMXMtMS0uNDQ4LTEtMWMwLTQuMTQyIDMuNTgyLTcuNSA4LTcuNXptMC0xMGMtMi4yMDkgMC00IDEuNzkxLTQgNHMxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNC0xLjc5MS00LTQtNHoiLz48L3N2Zz4=';
                    }}
                  />
                </div>
                <div>
                  <p className="text-white font-medium">Rtr. Pranav Gujar</p>
                  <p className="text-sm text-gray-400">Chief Technical Operations Director</p>
                </div>
              </div>
            </div>
          )}

          {/* Social Links (TechOps only) */}
          {content.socialLinks && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">🔗 Connect</h3>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={content.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/40 transition-colors"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
                <a 
                  href={content.socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-pink-600/20 text-pink-400 rounded-lg hover:bg-pink-600/40 transition-colors"
                >
                  <FaInstagram className="mr-2" /> Instagram
                </a>
                <a 
                  href={content.socialLinks.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/40 transition-colors"
                >
                  <FaYoutube className="mr-2" /> YouTube
                </a>
                <a 
                  href={content.socialLinks.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/40 transition-colors"
                >
                  <FaGlobe className="mr-2" /> Website
                </a>
              </div>
            </div>
          )}

          {/* Vision */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-transparent p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-3">✨ Vision Ahead</h3>
            <p className="text-gray-300">"{content.vision || pillarContent.default.vision}"</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PillarDetail;
