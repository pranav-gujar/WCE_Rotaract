import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300">
      <Navbar />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-5"></div>
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-gray-700/30"
        >
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-amber-900/30 via-yellow-800/20 to-gray-900 p-6 border-b border-amber-900/20">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-amber-900/20 border border-amber-500/20 mr-4">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Service</h1>
                <p className="text-amber-200 mt-1">Last updated: August 24, 2025</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row">
            {/* Main Content */}
            <div className="flex-1 p-6 md:p-8">
              <div className="prose prose-invert max-w-none">
          
                <div className="mb-8 p-6 bg-amber-900/10 rounded-xl border-l-4 border-amber-500">
                  <p className="text-amber-200 text-sm font-medium">Last updated: August 24, 2025</p>
                  <p className="text-amber-100 mt-2">Please read these terms carefully before using our services.</p>
                </div>

                <section id="introduction" className="mb-12 scroll-mt-20">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-2 h-6 bg-amber-500 mr-3 rounded-full"></span>
                    Introduction
                  </h2>
                  <div className="pl-5">
                    <p className="text-gray-300 mb-4">
                      Welcome to the Rotaract Club of WCE website. These Terms of Service ("Terms") govern your access to and use of our website, services, and content. By accessing or using our services, you agree to be bound by these Terms.
                    </p>
                  </div>
                </section>

                <section id="use-of-services" className="mb-12 scroll-mt-20">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-2 h-6 bg-amber-500 mr-3 rounded-full"></span>
                    Use of Our Services
                  </h2>
                  <div className="pl-5">
                    <p className="text-gray-300 mb-4">
                      You may use our services only if you can form a binding contract with Rotaract Club of WCE, and only in compliance with these Terms and all applicable laws.
                    </p>
                    <div className="bg-amber-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-medium text-amber-300 mb-2">You agree not to:</h4>
                      <div className="space-y-2">
                        {[
                          'Use our services for any illegal purpose or in violation of any laws',
                          'Violate these Terms or any applicable policies',
                          'Post harmful, abusive, or otherwise objectionable content',
                          'Interfere with or disrupt the integrity or performance of our services',
                          'Attempt to gain unauthorized access to our systems or networks'
                        ].map((item, index) => (
                          <div key={index} className="flex items-start">
                            <span className="text-amber-400 mr-3 mt-1">•</span>
                            <p className="text-gray-300">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section id="intellectual-property" className="mb-12 scroll-mt-20">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-2 h-6 bg-amber-500 mr-3 rounded-full"></span>
                    Intellectual Property
                  </h2>
                  <div className="pl-5">
                    <div className="p-6 bg-gradient-to-r from-amber-900/20 to-yellow-900/10 rounded-xl border border-amber-800/30">
                      <div className="flex items-start">
                        <div className="p-2 bg-amber-900/40 rounded-lg mr-4">
                          <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                        </div>
                        <p className="text-gray-300">
                          The content on our website, including text, graphics, images, and logos, is owned by or licensed to Rotaract Club of WCE and is protected by copyright and other intellectual property laws.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="limitation-of-liability" className="mb-12 scroll-mt-20">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-2 h-6 bg-amber-500 mr-3 rounded-full"></span>
                    Limitation of Liability
                  </h2>
                  <div className="pl-5">
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                      <p className="text-gray-300">
                        To the maximum extent permitted by law, Rotaract Club of WCE shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="changes" className="mb-12 scroll-mt-20">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-2 h-6 bg-amber-500 mr-3 rounded-full"></span>
                    Changes to These Terms
                  </h2>
                  <div className="pl-5">
                    <p className="text-gray-300 mb-4">
                      We reserve the right to modify these Terms at any time. We will provide notice of any changes by updating the date at the top of these Terms. Your continued use of our services after any changes constitutes your acceptance of the new Terms.
                    </p>
                  </div>
                </section>

                <section id="contact-us" className="scroll-mt-20">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-2 h-6 bg-amber-500 mr-3 rounded-full"></span>
                    Contact Us
                  </h2>
                  <div className="pl-5">
                    <p className="text-gray-300 mb-6">
                      If you have any questions about these Terms, please contact us:
                    </p>
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 max-w-lg">
                      <div className="flex items-start mb-4">
                        <div className="p-2 bg-amber-900/40 rounded-lg mr-4">
                          <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-amber-300">Email</h4>
                          <a href="mailto:info@rotaractwce.org" className="text-white hover:text-amber-300 transition-colors">rotaractclubofwcesangli@gmail.com</a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-2 bg-amber-900/40 rounded-lg mr-4">
                          <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-amber-300">Address</h4>
                          <p className="text-white">Walchand College of Engineering,<br />Sangli, Maharashtra, India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Sidebar Navigation */}
            <div className="w-full lg:w-64 bg-gray-800/50 p-6 border-t lg:border-t-0 lg:border-l border-gray-700/30">
              <nav className="space-y-2">
                <h3 className="text-sm font-semibold text-amber-300 mb-2">Table of Contents</h3>
                {[
                  'Introduction',
                  'Use of Services',
                  'Intellectual Property',
                  'Limitation of Liability',
                  'Changes to Terms',
                  'Contact Us'
                ].map((item, index) => (
                  <a 
                    key={index}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-3 py-2 text-sm rounded-lg hover:bg-amber-900/20 hover:text-amber-300 transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </nav>
              <div className="mt-8 p-4 bg-amber-900/10 rounded-lg border border-amber-800/30">
                <h3 className="text-sm font-semibold text-amber-300 mb-2">Related</h3>
                <a href="/privacy-policy" className="text-xs text-amber-200 hover:text-white transition-colors flex items-center">
                  <span>Privacy Policy</span>
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
