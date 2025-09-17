import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';
import VideoSection from '../components/VideoSection';
import CustomCursor from '../components/CustomCursor';
import { FiArrowRight, FiChevronDown, FiPlay, FiPause } from 'react-icons/fi';
// import ClubLogo from '../assets/images/Logo.png';
// import WCElogo from '../assets/images/WCE.png';
import RTR50 from '../assets/images/RTR50.png';
import RTRLogo from '../assets/images/RTRLogo.png';


const Coin = ({ logo, alt, className, delay }) => {
  return (
    <motion.div 
      className={`absolute ${className} flex flex-col items-center z-20`}
      style={{ aspectRatio: '1' }}
      initial={{ opacity: 0, scale: 0.5, rotateY: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotateY: 360,
        transition: {
          delay: delay * 0.3,
          duration: 1.5,
          ease: 'easeOut',
          rotateY: {
            delay: delay * 0.3 + 1.5, // Initial delay before first flip
            duration: 1.2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1.5, // 1.5 second delay between flips
            repeatType: 'loop'
          }
        }
      }}
      whileHover={{
        y: -10,
        rotateY: 15,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
    >
      {/* Rope */}
      <div className="absolute -top-32 sm:-top-36 md:-top-40 left-1/2 -translate-x-1/2">
        <div className="rope relative w-1 h-32 sm:h-36 md:h-40 bg-amber-900 z-30">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="absolute left-0 w-full h-0.5 bg-amber-700"
                style={{ top: `${i * 25}%` }}
              />
            ))}
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-800 rounded-full"></div>
        </div>
      </div>
      
      {/* Coin */}
      <div className="w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
        <div className="relative w-full h-full" style={{ aspectRatio: '1' }}>
          {/* Coin outer ring */}
          <div className="absolute inset-0 bg-black border-4 border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-full">
            {/* Coin inner design */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-70 rounded-full"></div>
            {/* Coin edge */}
            <div className="absolute inset-0 border-2 border-gray-600 opacity-30 rounded-full"></div>
            {/* Inner circle */}
            <div className="absolute inset-4 border border-gray-700 opacity-50 rounded-full"></div>
          </div>
          {/* Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={logo}
              alt={alt}
              className="relative z-10 w-3/4 h-3/4 object-contain"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Landing() {

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Main Content */}
      <section className="pt-40 pb-24 overflow-x-clip relative z-0">
        {/* Fixed Position Coins Container */}
        <div className="absolute top-0 left-0 w-full h-screen pointer-events-none z-20">
          <div className="relative w-full h-full">
            {/* RTR Logo Coin */}
            <Coin 
              logo={RTRLogo}
              alt="WCE Logo"
              className="left-2 sm:left-4 md:left-0 top-20 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48"
              delay={0}
            />

            {/* RTR 50 Years Coin */}
            <Coin 
              logo={RTR50}
              alt="PGT Logo"
              className="right-2 sm:right-4 md:right-0 top-20 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48"
              delay={1}
            />
          </div>
        </div>

        <div className="container relative max-w-6xl mx-auto px-4 mt-24">
          {/* Middle Rope */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-32 bg-amber-900 -z-10">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-4 bg-amber-800 rounded-full"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-amber-900">
              {/* Rope texture */}
              <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute left-0 w-full h-0.5 bg-amber-700"
                    style={{ top: `${i * 16}px` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 w-full max-w-4xl mx-auto">
            {/* Coin-style content container */}
            <div className="relative w-full p-8 sm:p-12 rounded-2xl overflow-hidden">
              {/* Coin outer ring */}
              <div className="absolute inset-0 bg-black border-4 border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.7)] rounded-2xl">
                {/* Coin inner design */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-70 rounded-xl"></div>
                {/* Coin edge */}
                <div className="absolute inset-0 border-2 border-gray-600 opacity-30 rounded-xl"></div>
                {/* Inner content area */}
                <div className="absolute inset-4 border border-gray-700 opacity-50 rounded-lg"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Badge */}
                <div 
                  id="badge"
                  className="inline-flex py-1 px-3 bg-gradient-to-r from-yellow-400 to-emerald-500 rounded-full text-neutral-950 font-semibold mb-6 opacity-0"
                >
                  ✨ Service Above Self
                </div>
                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Rotaract Club Of
                  <span className="block mt-2 text-yellow-400">WCE Sangli</span>
                </h1>
                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                  Empowering young leaders to serve, innovate, and inspire change.
                </p>
                <br />
                "Learning Is Our Precept"
              </div>
              
              {/* Coin shine effect */}
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-white/10 to-transparent rounded-full transform rotate-45 opacity-30"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Auto-playing Video Section */}
      <VideoSection />
      
    </div>
  );
}
