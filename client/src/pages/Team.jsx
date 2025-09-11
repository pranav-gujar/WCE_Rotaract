import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';
import { FiInstagram, FiLinkedin, FiMail, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import { Link } from "react-router-dom";

import aryanImg from '../assets/Team/aryan.jpg';
import atharvImg from '../assets/Team/atharv.jpg';
import ayushImg from '../assets/Team/ayush.jpg';
import digvijayImg from '../assets/Team/digvijay.jpg';
import krushnaImg from '../assets/Team/krushna.jpg';
import madhuraImg from '../assets/Team/madhura.jpg';
import nikhilImg from '../assets/Team/nikhil.jpg';
import parthImg from '../assets/Team/parth.jpg';
import pranavImg from '../assets/Team/pranav.jpg';


// Sample team data (replace with actual team data)
const teamMembers = [
  {
    id: 1,
    name: 'Nikhil Nakat',
    position: 'President',
    image: nikhilImg,
    social: {
      instagram: 'https://www.instagram.com/nikhil_nakat/',
      linkedin: 'https://linkedin.com',
      email: 'mailto:nikhilrnakat02@gmail.com'
    }
  },
  {
    id: 2,
    name: 'Digvijay Shinde',
    position: 'Vice President',
    image: digvijayImg,
    social: {
      instagram: 'https://www.instagram.com/iamdigu1443/',
      linkedin: 'https://www.linkedin.com/in/digvijay-shinde-b91b0a2a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      email: 'mailto:digvijayshinde1443@gmail.com'
    }
  },
  {
    id: 3,
    name: 'Aryan Mehta',
    position: 'Secretary',
    image: aryanImg,
    social: {
      instagram: 'https://www.instagram.com/the_aryan_mehta?igsh=emQ3dm54Yzk1dXBn',
      linkedin: 'https://www.linkedin.com/in/aryan-mehta-8b9386259/',
      email: 'mailto:mehtaaryan835@gmail.com'
    }
  },
  {
    id: 4,
    name: 'Krushna Chavan',
    position: 'Treasurer',
    image:krushnaImg,
    social: {
      instagram: 'https://www.instagram.com/krushnaa_5500/',
      linkedin: 'https://linkedin.com',
      email: 'mailto:krushnapatil5500@gmail.com'
    }
  },
  {
    id: 5,
    name: 'Ayush Raval',
    position: 'PDSA Director',
    image: ayushImg,
    social: {
      instagram: 'https://www.instagram.com/ayush_raval_09/',
      linkedin: 'https://www.linkedin.com/in/ayush-raval-63a84427b/',
      email: 'mailto:ayushraval7007@gmail.com'
    }
  },
  {
    id: 6,
    name: 'Parth Natve',
    position: 'ISA Director',
    image: parthImg,
    social: {
      instagram: 'https://www.instagram.com/parthnatve/',
      linkedin: 'https://linkedin.com',
      email: 'mailto:parth.natve@walchandsangli.ac.in'
    }
  },
  {
    id: 7,
    name: 'Madhura Kaikade',
    position: 'Club Service Director',
    image: madhuraImg,
    social: {
      instagram: 'https://instagram.com',
      linkedin: 'https://www.linkedin.com/in/madhura-kaikadi-17a22a2b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      email: 'mailto:madhurakaikadi009@gmail.com'
    }
  },
  {
    id: 8,
    name: 'Atharva Patil',
    position: 'Community Service Director',
    image: atharvImg,
    social: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:atharva.patil@walchandsangli.ac.in'
    }
  },
  {
    id: 9,
    name: 'Pranav Gujar',
    position: 'Technical Operations Director',
    image: pranavImg,
    social: {
      instagram: 'https://www.instagram.com/mr.pranav_gujar_official_?igshid=MzNlNGNkZWQ4Mg%3D%3D',
      linkedin: 'https://www.linkedin.com/in/pranav-gujar-54551b226/',
      email: 'mailto:pranavgujar974@gmail.com'
    }
  }
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  
  // Ensure the page has a dark background and proper overflow control
  useEffect(() => {
    document.body.classList.add('bg-gray-900', 'overflow-x-hidden');
    return () => {
      document.body.classList.remove('bg-gray-900', 'overflow-x-hidden');
    };
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 300
      }
    },
    hover: {
      y: -10,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 400
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  const goToNext = () => {
    const currentIndex = teamMembers.findIndex(member => member.id === selectedMember.id);
    const nextIndex = (currentIndex + 1) % teamMembers.length;
    setSelectedMember(teamMembers[nextIndex]);
  };

  const goToPrev = () => {
    const currentIndex = teamMembers.findIndex(member => member.id === selectedMember.id);
    const prevIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
    setSelectedMember(teamMembers[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="relative z-10">
        <Navbar />
      </div>
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-yellow-500 to-indigo-600 rounded-full mb-6"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-indigo-400 to-indigo-500">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-indigo-500">Meet Our Dream Team</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The brilliant minds and passionate hearts behind Rotaract WCE, working together to create meaningful impact through technology and service.
            </p>
          </motion.div>

          {/* Team Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {teamMembers.map((member) => (
              <motion.div 
                key={member.id}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl cursor-pointer w-full max-w-md mx-auto"
                variants={item}
                whileHover="hover"
                onClick={() => handleMemberClick(member)}
                initial="hidden"
                animate="show"
              >
                <div className="relative h-96 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="flex items-center mb-3">
                        <div className="h-1 w-10 bg-yellow-500 mr-3 transform group-hover:scale-x-125 origin-left transition-transform duration-500" />
                        <span className="text-sm font-medium text-yellow-400 tracking-wider">Rotaractor</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-indigo-300 font-medium">{member.position}</p>
                      
                      {/* Social Icons */}
                      <div className="flex space-x-3 mt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <motion.a 
                          href={member.social.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-pink-500 hover:text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`${member.name}'s Instagram`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiInstagram className="w-4 h-4" />
                        </motion.a>
                        <motion.a 
                          href={member.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-600 hover:text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`${member.name}'s LinkedIn`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiLinkedin className="w-4 h-4" />
                        </motion.a>
                        <motion.a 
                          href={member.social.email}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-red-500 hover:text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`Email ${member.name}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiMail className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-yellow-500/10 blur-xl group-hover:bg-indigo-500/20 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-indigo-500/10 blur-xl group-hover:bg-yellow-500/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Team Member Modal */}
          <AnimatePresence>
            {selectedMember && (
              <>
                <motion.div
                  className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={overlayVariants}
                  onClick={closeModal}
                >
                  <motion.div 
                    className="relative w-full max-w-4xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                    variants={modalVariants}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button 
                      onClick={closeModal}
                      className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/80 text-gray-300 hover:bg-gray-700/90 hover:text-white transition-colors duration-300"
                      aria-label="Close modal"
                    >
                      <FiX className="w-5 h-5" />
                    </button>
                    
                    <div className="grid md:grid-cols-2">
                      {/* Left Column - Image */}
                      <div className="relative h-80 md:h-full">
                        <img
                          src={selectedMember.image}
                          alt={selectedMember.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        
                        {/* Navigation Arrows */}
                        <div className="absolute inset-0 flex items-center justify-between p-4">
                          <button 
                            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                            aria-label="Previous member"
                          >
                            <FiChevronLeft className="w-6 h-6" />
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); goToNext(); }}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                            aria-label="Next member"
                          >
                            <FiChevronRight className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Right Column - Content */}
                      <div className="p-8 md:p-10">
                        <div className="flex items-center mb-6">
                          <div className="h-1 w-10 bg-yellow-500 mr-3" />
                          <span className="text-sm font-medium text-yellow-400 tracking-wider">ROTARACT WCE</span>
                        </div>
                        
                        <h2 className="text-3xl font-bold text-white mb-2">{selectedMember.name}</h2>
                        <p className="text-xl text-indigo-300 font-medium mb-6">{selectedMember.position}</p>
                        
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                            About
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {selectedMember.bio || `Passionate about making a difference through technology and community service. ${selectedMember.name} brings expertise and dedication to the Rotaract WCE team.`}
                          </p>
                        </div>
                        
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                            Quote
                          </h4>
                          <div className="relative bg-gray-800/50 rounded-xl p-6">
                            <FaQuoteLeft className="text-yellow-500/30 text-4xl absolute -top-4 -left-2" />
                            <p className="text-gray-200 italic relative z-10">
                              {selectedMember.quote || "Empowering communities through innovation and service."}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex space-x-4">
                          <a 
                            href={selectedMember.social.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-600 hover:text-white transition-colors duration-300"
                            aria-label={`Connect with ${selectedMember.name} on LinkedIn`}
                          >
                            <FiLinkedin className="w-5 h-5" />
                          </a>
                          <a 
                            href={selectedMember.social.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-pink-600 hover:text-white transition-colors duration-300"
                            aria-label={`Follow ${selectedMember.name} on Instagram`}
                          >
                            <FiInstagram className="w-5 h-5" />
                          </a>
                          <a 
                            href={selectedMember.social.email}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-red-500 hover:text-white transition-colors duration-300"
                            aria-label={`Email ${selectedMember.name}`}
                          >
                            <FiMail className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Join Team CTA */}
          <motion.div 
            className="mt-24 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-indigo-400">
                  Join Our Mission
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Ready to make an impact? Join our team of innovators, creators, and change-makers. Together, we can build a better future through technology and service.
              </p>
              <Link to="/join-us">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 flex items-center mx-auto group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                 >
                  <span>Apply Now</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
              
                </motion.button>
              </Link>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-yellow-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl" />
          </motion.div>
        </div>
      </main>
      
      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Team;
