import React from 'react';
import { motion } from 'framer-motion';
import Tag from './Tag';
import StaffPhoto from '../assets/images/staff-advisor.png';


const StaffAdvisor = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
        >
          <Tag>From Staff Advisor</Tag>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-indigo-500">
              Words of Guidance
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Insights and encouragement from our esteemed staff advisor
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-700/50 shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/5 rounded-full -ml-24 mb-8"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              {/* Staff Photo */}
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-yellow-500/30 shadow-lg mb-6 md:mb-0 md:mr-10">
                <img 
                  src={StaffPhoto} 
                  alt="Staff Advisor"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmYzEwNyI+PHBhdGggZD0iTTEyIDEyYzQuNDE4IDAgOCAzLjM1OCA4IDcuNSAwIC41NTItLjQ0OCAxLTEgMXMtMS0uNDQ4LTEtMWMwLTMuMDMyLTIuNjktNS41LTYtNS41cy02IDIuNDY4LTYgNS41YzAgLjU1Mi0uNDQ4IDEtMSAxcy0xLS40NDgtMS0xYzAtNC4xNDIgMy41ODItNy41IDgtNy41em0wLTEwYy0yLjIwOSAwLTQgMS43OTEtNCA0czEuNzkxIDQgNCA0IDQtMS43OTEgNC00LTEuNzkxLTQtNC00eiIvPjwvc3ZnPg==';
                  }}
                />
              </div>
              
              {/* Staff Info */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-1">Mr. A.N. Inamdar</h3>
                <p className="text-yellow-400 mb-4">Staff Advisor, Assistant Professor in Electrical Department</p>
                <div className="relative">
                  <svg 
                    className="absolute -left-2 -top-2 w-6 h-6 text-yellow-400 opacity-20" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609.393 2.019.33 4.3-1.012 6.372-1.225 1.917-3.15 3.428-5.287 4.026l-.75 2.602zm-10.01-18c5.811.457 10.005 5.32 10.005 11.23 0 1.68-.338 3.281-.938 4.741-.22.492-.66.863-1.205.977l-2.061.403c-1.15.225-2.269-.5-2.423-1.65l-.125-.939c-.14-1.048-.998-1.868-2.05-2.031l-3.646-.583c-1.2-.192-2.1-1.25-1.931-2.45l.384-2.356c.14-.859.67-1.602 1.442-2.017 1.4-.824 2.576-1.942 3.423-3.27.77-1.209 1.25-2.5 1.25-3.95z" />
                  </svg>
                  <p className="text-gray-300 italic relative z-10">
                    "I am truly inspired by the dedication and innovation shown by the Rotaract WCE team. Their commitment to community service through technology is commendable. I encourage all members to continue pushing boundaries and making a positive impact in society."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StaffAdvisor;
