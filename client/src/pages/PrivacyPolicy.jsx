import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <Navbar />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50"
        >
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-gray-900 p-6 border-b border-gray-700/50">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-indigo-900/20 border border-indigo-500/20 mr-4">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
                <p className="text-indigo-200 mt-1">How we protect and manage your data</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 bg-gray-800/50 p-6 border-b md:border-b-0 md:border-r border-gray-700/50">
              <nav className="space-y-2">
                {['Introduction', 'Information We Collect', 'How We Use Your Data', 'Data Security', 'Your Rights', 'Contact Us'].map((item, index) => (
                  <a 
                    key={index} 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2 text-sm rounded-lg hover:bg-gray-700/50 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </nav>
              <div className="mt-8 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                <h3 className="text-sm font-semibold text-indigo-300 mb-2">Quick Links</h3>
                <a href="/terms" className="text-xs text-gray-400 hover:text-white transition-colors">Terms of Service →</a>
              </div>
            </div>
          
            {/* Main Content */}
            <div className="flex-1 p-6 md:p-8">
              <div className="prose prose-invert max-w-none">
                <div className="mb-8 p-6 bg-indigo-900/10 rounded-xl border-l-4 border-indigo-500">
                  <p className="text-indigo-200 text-sm font-medium">Last updated: August 24, 2025</p>
                  <p className="text-indigo-100 mt-2">This policy describes how we handle your personal information when you use our services.</p>
                </div>

                <section id="introduction" className="mb-12 scroll-mt-20">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-2 h-6 bg-indigo-500 mr-3 rounded-full"></span>
                    Introduction
                  </h2>
                  <div className="pl-5">
                    <p className="text-gray-300 mb-4">
                      Welcome to Rotaract Club of WCE. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
                    </p>
                  </div>
                </section>

                <section id="information-we-collect" className="mb-12 scroll-mt-20">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-2 h-6 bg-indigo-500 mr-3 rounded-full"></span>
                    Information We Collect
                  </h2>
                  <div className="pl-5">
                    <p className="text-gray-300 mb-4">
                      We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                        <h4 className="font-medium text-indigo-300 mb-2">Identity Data</h4>
                        <p className="text-sm text-gray-400">Name, username, or similar identifier</p>
                      </div>
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                        <h4 className="font-medium text-indigo-300 mb-2">Contact Data</h4>
                        <p className="text-sm text-gray-400">Email address, phone number</p>
                      </div>
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                        <h4 className="font-medium text-indigo-300 mb-2">Technical Data</h4>
                        <p className="text-sm text-gray-400">IP address, browser type, location, etc.</p>
                      </div>
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                        <h4 className="font-medium text-indigo-300 mb-2">Usage Data</h4>
                        <p className="text-sm text-gray-400">How you use our website and services</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="how-we-use-your-data" className="mb-12 scroll-mt-20">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-2 h-6 bg-indigo-500 mr-3 rounded-full"></span>
                    How We Use Your Data
                  </h2>
                  <div className="pl-5">
                    <p className="text-gray-300 mb-4">
                      We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <div className="space-y-3 mb-4">
                      {[
                        'To provide and maintain our service',
                        'To notify you about changes to our service',
                        'To allow you to participate in interactive features',
                        'To provide customer support',
                        'To gather analysis to improve our service'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <span className="text-indigo-400 mr-3 mt-1">•</span>
                          <p className="text-gray-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="data-security" className="mb-12 scroll-mt-20">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-2 h-6 bg-indigo-500 mr-3 rounded-full"></span>
                    Data Security
                  </h2>
                  <div className="pl-5">
                    <div className="p-6 bg-gradient-to-r from-indigo-900/30 to-purple-900/20 rounded-xl border border-indigo-800/30">
                      <div className="flex items-start">
                        <div className="p-2 bg-indigo-900/50 rounded-lg mr-4">
                          <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <p className="text-gray-300">
                          We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="your-rights" className="mb-12 scroll-mt-20">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-2 h-6 bg-indigo-500 mr-3 rounded-full"></span>
                    Your Legal Rights
                  </h2>
                  <div className="pl-5">
                    <p className="text-gray-300 mb-4">
                      Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      {[
                        'Right to access your data',
                        'Right to rectification',
                        'Right to erasure',
                        'Right to restrict processing',
                        'Right to data portability',
                        'Right to object',
                        'Rights related to automated decision making'
                      ].map((right, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{right}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="contact-us" className="scroll-mt-20">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-2 h-6 bg-indigo-500 mr-3 rounded-full"></span>
                    Contact Us
                  </h2>
                  <div className="pl-5">
                    <p className="text-gray-300 mb-6">
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 max-w-lg">
                      <div className="flex items-start mb-4">
                        <div className="p-2 bg-indigo-900/30 rounded-lg mr-4">
                          <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-indigo-300">Email</h4>
                          <a href="mailto:privacy@rotaractwce.org" className="text-white hover:text-indigo-300 transition-colors">rotaractclubofwcesangli@gmail.com</a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-2 bg-indigo-900/30 rounded-lg mr-4">
                          <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-indigo-300">Address</h4>
                          <p className="text-white">Walchand College of Engineering,<br />Sangli, Maharashtra, India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
