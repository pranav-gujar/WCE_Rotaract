import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useScroll, AnimatePresence, useMotionTemplate, useSpring } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import Tag from '../components/Tag';
import PillarDetail from '../components/PillarDetail';
import StaffAdvisor from '../components/StaffAdvisor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';
import { FaUsers, FaHandsHelping, FaGlobe, FaLaptopCode, FaRocket, FaLightbulb, FaUsersCog } from 'react-icons/fa';

const text = `Established on February 23, 1975, the Rotaract Club of WCE Sangli is among the oldest and most dynamic clubs of the college, proudly celebrating its 50th charter year. Guided by the spirit of “Service Above Self” and our motto “Learning Is Our Precept,” we bring together passionate individuals dedicated to community service, personal growth, and leadership development. Through diverse projects and creative initiatives, our members strive to make a meaningful impact on society while nurturing themselves into the leaders of tomorrow.`;
const words = text.split(' ');

const TiltCard = ({ children, className = '' }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSmooth = useSpring(x, { damping: 30, stiffness: 300 });
  const ySmooth = useSpring(y, { damping: 30, stiffness: 300 });
  const rotateX = useSpring(0, { damping: 30, stiffness: 300 });
  const rotateY = useSpring(0, { damping: 30, stiffness: 300 });
  const z = useMotionValue(0);
  const zSmooth = useSpring(z, { damping: 30, stiffness: 300 });

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const posX = (e.clientX - centerX) / 20;
    const posY = (e.clientY - centerY) / 20;
    
    x.set(posX);
    y.set(-posY);
    rotateX.set(-posY / 4);
    rotateY.set(posX / 4);
    z.set(20);
  }, [x, y, rotateX, rotateY, z]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
    z.set(0);
  }, [x, y, rotateX, rotateY, z]);

  const transform = useMotionTemplate`
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateZ(${zSmooth}px)
  `;

  return (
    <motion.div
      ref={ref}
      className={`relative h-full transition-transform duration-300 ease-out ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transform,
        x: xSmooth,
        y: ySmooth,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

export default function About({ scrollToAbout = false }) {
  const scrollTarget = useRef(null);
  const aboutRotaractRef = useRef(null);
  const [currentWord, setCurrentWord] = useState(0);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);
  
  useEffect(() => {
    if (scrollToAbout && aboutRotaractRef.current) {
      aboutRotaractRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [scrollToAbout]);

  // State for selected pillar
  const [selectedPillar, setSelectedPillar] = useState(null);

  // Avenues data
  const avenues = [
    {
      id: 'club-service',
      title: 'Club Service',
      icon: <FaUsers className="w-8 h-8" />,
      description: 'Strengthens fellowship among members through enjoyable, engaging, and collaborative activities that build lasting bonds and teamwork.',
      color: 'from-blue-500 to-cyan-500',
      about: 'Club Service nurtures unity and camaraderie among members through interactive, fun-filled team building, engaging events, and consistent support systems that strengthen relationships and club culture.',
      vision: 'Fostering lifelong bonds through shared experiences and teamwork.'
    },
    {
      id: 'community-service',
      title: 'Community Service',
      icon: <FaHandsHelping className="w-8 h-8" />,
      description: 'Drives impactful initiatives that uplift society, promote sustainability, and address community needs for positive, lasting change.',
      color: 'from-green-500 to-emerald-500',
      about: 'Community Service engages members in meaningful projects addressing social welfare and environment, delivering tangible improvements in local lives, promoting empathy, sustainability, and communal responsibility across society.',
      vision: 'Creating positive impact for communities through dedicated service.'
    },
    {
      id: 'international-service',
      title: 'International Service',
      icon: <FaGlobe className="w-8 h-8" />,
      description: 'Encourages global connections, cultural exchange, and international collaborations that foster unity, friendship, and mutual understanding.',
      color: 'from-purple-500 to-indigo-500',
      about: 'International Service builds global awareness and collaboration through cultural exchange, partnered projects, and cross-border friendships, fostering understanding, diversity, and international impact beyond local boundaries.',
      vision: 'Bridging cultures with global friendship and shared purpose.'
    },
    {
      id: 'professional-development',
      title: 'Professional Development',
      icon: <FaLaptopCode className="w-8 h-8" />,
      description: 'Provides workshops, training, and opportunities to develop leadership, communication, and career skills for personal and professional growth.',
      color: 'from-amber-500 to-yellow-500',
      about: 'Professional Development offers skill-enhancing workshops, training sessions, mentorship, and opportunities to grow leadership, communication, and career readiness to empower members in personal and workplace success.',
      vision: 'Empowering individuals to lead confidently and grow professionally.'
    }
  ];

  // TechOps data
  const techOpsData = {
    id: 'techops',
    title: 'TechOps Rotaract',
    icon: <FaRocket className="w-8 h-8" />,
    description: 'The technical wing that powers our digital presence and innovative solutions.',
    color: 'from-red-500 to-pink-500',
    shortIntro: 'TechOps Rotaract – The engine that drives our club into the digital future. From websites to innovations, we build, we code, we create.'
  };

  const handlePillarClick = (pillar) => {
    setSelectedPillar(pillar);
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedPillar(null);
    // Re-enable body scroll when modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-black">
      {/* About Rotaract WCE Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div ref={aboutRotaractRef} className="sticky top-28 md:top-32">
            <div className="flex justify-center mb-6">
              <Tag>About Rotaract WCE</Tag>
            </div>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-10 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-yellow-400/20 via-yellow-600/10 to-transparent opacity-70"></div>
              
              <div className="relative z-10">
                <div className="text-2xl md:text-3xl lg:text-4xl text-center font-medium text-white">
                  <span>Our Story & Mission</span>
                </div>
                
                <div className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed text-center">
                  <span className="text-white/15">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className={twMerge(
                          "transition duration-500 text-white/15",
                          index < currentWord && "text-white"
                        )}
                      >{`${word} `}</span>
                    ))}
                  </span>
                </div>
                
                <div className="flex justify-center mt-8">
                  <span className="text-yellow-400 text-2xl animate-bounce">
                    ⇓
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div ref={scrollTarget} className="h-[100vh]"></div>
        </div>
      </section>

      {/* Our Pillars Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
            viewport={{ once: true, margin: "-50px 0px -100px 0px" }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ 
                scale: 1, 
                opacity: 1,
                transition: { 
                  delay: 0.2,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
              viewport={{ once: true }}
            >
            <Tag>Our Pillars</Tag>
             
            </motion.div>
            <motion.p 
              className="text-gray-400 mt-5 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.3,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
              viewport={{ once: true }}
            >
              The club's mission is founded upon four main pillars, known as our four avenues. Each avenue focuses on specific aspects of development and contributes to the growth of both our members and society.
            </motion.p>
          </motion.div>

          {/* Four Avenues Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            <AnimatePresence>
              {avenues.map((avenue, index) => {
                // Create a URL-friendly ID for each avenue
                const avenueId = avenue.title.toLowerCase().replace(/\s+/g, '-');
                return (
                <motion.div
                  id={avenueId}
                  key={avenue.id}
                  className="h-full scroll-mt-24 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px 0px -100px 0px" }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  style={{ perspective: '1000px' }}
                >
                  <TiltCard>
                    <div 
                      className="h-full min-h-[320px] bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group relative overflow-hidden cursor-pointer flex flex-col"
                      onClick={() => handlePillarClick(avenue)}
                      style={{
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      {/* Glass overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                      
                      {/* Animated gradient border */}
                      <motion.div 
                        className="absolute inset-0 rounded-2xl p-0.5 -z-10"
                        initial={{ opacity: 0.5 }}
                        animate={{
                          background: [
                            'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1))',
                            'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1)) 0% 0% / 200% 200%',
                          ],
                          backgroundPosition: ['0% 0%', '200% 200%'],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      
                      {/* Moving reflection */}
                      <motion.div 
                        className="absolute inset-0 overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div 
                          className="absolute -inset-y-full -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-12"
                          animate={{
                            x: ['0%', '300%'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                      </motion.div>
                      
                      {/* Subtle corner highlights */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-2xl" />
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-2xl" />
                      
                      {/* Inner glow */}
                      <motion.div 
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                          boxShadow: 'inset 0 0 15px rgba(255, 255, 255, 0.03)',
                        }}
                        whileHover={{
                          boxShadow: [
                            'inset 0 0 15px rgba(255, 255, 255, 0.05)',
                            'inset 0 0 20px rgba(255, 255, 255, 0.08)',
                            'inset 0 0 15px rgba(255, 255, 255, 0.05)',
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        }}
                      />
                      
                     
                      
                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-white text-xl">
                            {avenue.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white ml-4">{avenue.title}</h3>
                        </div>
                        <p className="text-gray-300 mt-2 mb-6 flex-grow">
                          {avenue.description}
                        </p>
                        <div className="mt-auto pt-4 border-t border-gray-700/50">
                          <button 
                            className="group relative inline-flex items-center text-yellow-400 hover:text-white font-medium transition-colors duration-300"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePillarClick(avenue);
                            }}
                          >
                            <span className="relative">
                              Read More
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                            </span>
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      <div className="absolute -inset-y-full -left-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent transform rotate-45 group-hover:animate-shine"></div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* TechOps Section */}
          <motion.div 
            id="techops"
            className="text-center mt-24 mb-12 scroll-mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
            transition={{ duration: 0.6 }}
          >
            <Tag>TechOps</Tag>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 mt-5">
              Our technical wing that combines technology with social impact through innovative solutions and community projects.
            </p>
          </motion.div>

          {/* Enhanced TechOps Card */}
          <motion.div 
            className="max-w-2xl mx-auto mt-12 cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => handlePillarClick(techOpsData)}
            style={{ perspective: '1000px' }}
          >
            <TiltCard>
              <div 
                className="h-full min-h-[320px] bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300 group relative overflow-hidden flex flex-col"
                style={{
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                
                {/* Animated gradient border */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl p-0.5 -z-10"
                  initial={{ opacity: 0.5 }}
                  animate={{
                    background: [
                      'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1))',
                      'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1)) 0% 0% / 200% 200%',
                    ],
                    backgroundPosition: ['0% 0%', '200% 200%'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 rounded-2xl" />
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center text-white text-xl">
                      {techOpsData.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">{techOpsData.title}</h3>
                  </div>
                  <p className="text-gray-300 mt-2 mb-6 flex-grow">
                    {techOpsData.shortIntro}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-700/50">
                    <button 
                      className="group relative inline-flex items-center text-pink-400 hover:text-white font-medium transition-colors duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePillarClick(techOpsData);
                      }}
                    >
                      <span className="relative">
                        Read More
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Moving reflection */}
                <motion.div 
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div 
                    className="absolute -inset-y-full -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-12"
                    animate={{
                      x: ['0%', '300%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
                
                {/* Subtle corner highlights */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-2xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-tr-2xl" />
                
                {/* Inner glow */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 15px rgba(255, 255, 255, 0.03)',
                  }}
                  whileHover={{
                    boxShadow: [
                      'inset 0 0 15px rgba(255, 196, 87, 0.1)',
                      'inset 0 0 20px rgba(255, 196, 87, 0.15)',
                      'inset 0 0 15px rgba(255, 196, 87, 0.1)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
                  {/* Enhanced Icon with floating animation */}
                  <motion.div 
                    className="w-24 h-24 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-amber-500 text-white relative z-10 overflow-hidden"
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                      transition: { 
                        y: { duration: 0.3, type: 'spring', stiffness: 500, damping: 15 },
                        scale: { duration: 0.2 }
                      }
                    }}
                  >
                    <FaRocket className="w-10 h-10" />
                    {/* Animated shine effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                      initial={{ x: '-100%' }}
                      whileHover={{
                        x: '200%',
                        transition: { duration: 0.8, ease: 'easeInOut' }
                      }}
                    />
                    {/* Glow effect */}
                    <motion.div 
                      className="absolute inset-0 rounded-xl"
                      animate={{
                        boxShadow: [
                          '0 0 15px rgba(245, 158, 11, 0.2)',
                          '0 0 30px rgba(245, 158, 11, 0.3)',
                          '0 0 15px rgba(245, 158, 11, 0.2)',
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                      }}
                    />
                  </motion.div>

                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4 text-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    TechOps Rotaract Community
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 mb-6 text-center leading-relaxed"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Our specialized technical wing that bridges the gap between technology and social service. 
                    TechOps works on innovative solutions to amplify our impact through technology.
                  </motion.p>
                  
                  {/* Animated tags */}
                  <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {['Technical Projects', 'Workshops', 'Innovation'].map((tag, index) => (
                      <motion.span 
                        key={tag}
                        className="px-4 py-2 bg-amber-500/10 text-amber-400 text-sm rounded-full border border-amber-500/20 backdrop-blur-sm"
                        initial={{ scale: 0.9, opacity: 0.8 }}
                        whileInView={{ 
                          scale: 1, 
                          opacity: 1,
                          transition: { 
                            delay: 0.1 * index,
                            type: 'spring',
                            stiffness: 300
                          }
                        }}
                        whileHover={{
                          y: -3,
                          backgroundColor: 'rgba(245, 158, 11, 0.2)',
                          boxShadow: '0 10px 15px -3px rgba(245, 158, 11, 0.1)',
                          transition: { duration: 0.2 }
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Subtle background elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl"></div>
                
                {/* Click indicator */}
             
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* Pillar Detail Modal */}
      <AnimatePresence>
        {selectedPillar && (
          <PillarDetail 
            pillar={selectedPillar} 
            onClose={handleCloseModal} 
          />
        )}
      </AnimatePresence>

      {/* Staff Advisor Section */}
      <StaffAdvisor />

      {/* Footer */}
      <Footer />
    </div>
  );
}
