import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';
import { FiArrowRight, FiUsers, FiAward, FiClock, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import posterImg from '../assets/images/poster.png';

const JoinUs = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [showNoRecruitment, setShowNoRecruitment] = useState(false);



  const handleApplyNow = () => {
    const googleFormLink = 'https://forms.gle/your-google-form-link';
    
    // Check if the link is a placeholder
    if (googleFormLink.includes
      
        //Add your google form link here
      ('your-google-form-link')) {
      setShowNoRecruitment(true);
      // Auto-hide the message after 5 seconds
      setTimeout(() => setShowNoRecruitment(false), 5000);
    } else {
      window.open(googleFormLink, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
     

      {/* Recruitment Section */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-indigo-500">
                Member Board Recruitment
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We're looking for passionate individuals to join our executive team for the upcoming term.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Recruitment Poster */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:shadow-indigo-500/30">
                <img
                  src={posterImg}
                  alt="Join Our Team"
                  className="w-full h-auto rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Become a Leader</h3>
                    <p className="text-gray-200">Shape the future of our community</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-500/20 rounded-full z-0"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Application Details */}
            <motion.div 
              className="space-y-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={item} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-500/10 p-3 rounded-lg text-indigo-400">
                    <FiUsers className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Open Positions</h3>
                    <p className="text-gray-300">We're recruiting for various roles including Marketing, Events, and Technical leads.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={item} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-500/10 p-3 rounded-lg text-indigo-400">
                    <FiAward className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Why Join Us?</h3>
                    <p className="text-gray-300">Gain leadership experience, build your network, and make a real impact.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={item} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-500/10 p-3 rounded-lg text-indigo-400">
                    <FiClock className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Time Commitment</h3>
                    <p className="text-gray-300">Flexible hours, approximately 5-10 hours per week.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={item}
                className="pt-4"
              >
                <motion.button
                  onClick={handleApplyNow}
                  className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-indigo-600 to-yellow-600 hover:from-indigo-700 hover:to-yellow-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Apply Now <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"
                    initial={{ scale: 0 }}
                  />
                </motion.button>
                <p className="mt-3 text-sm text-gray-400">Applications close on August 30, 2025</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-indigo-500">
                Frequently Asked Questions
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-indigo-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                question: "What are the requirements to join?",
                answer: "We're looking for motivated individuals who are passionate about our mission. No prior experience is required for most positions."
              },
              {
                question: "How long is the commitment?",
                answer: "The term is for one academic year, with the option to continue based on performance."
              },
              {
                question: "When will I hear back after applying?",
                answer: "We review applications on a rolling basis and will get back to you within 2 weeks of your application."
              },
              {
                question: "Can I apply for multiple positions?",
                answer: "Yes, you can apply for up to 3 positions. Please indicate your order of preference in your application."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left focus:outline-none"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {faq.question}
                    </h3>
                    <motion.span 
                      className="ml-4 text-indigo-400"
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === index ? (
                        <FiChevronUp className="w-5 h-5" />
                      ) : (
                        <FiChevronDown className="w-5 h-5" />
                      )}
                    </motion.span>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1,
                        transition: {
                          height: { duration: 0.3 },
                          opacity: { duration: 0.2, delay: 0.1 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.2 },
                          opacity: { duration: 0.1 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* No Recruitment Popup */}
      <AnimatePresence>
        {showNoRecruitment && (
          <motion.div 
            className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-yellow-500/50 text-white px-6 py-4 rounded-lg shadow-2xl z-50 max-w-sm w-full mx-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <h3 className="text-yellow-400 font-medium">Recruitment Closed</h3>
                <p className="mt-1 text-sm text-gray-300">We are not currently recruiting. Please check back later for new opportunities.</p>
              </div>
              <button 
                onClick={() => setShowNoRecruitment(false)}
                className="ml-4 text-gray-400 hover:text-white focus:outline-none"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JoinUs;
