import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';

// Sample events data (replace with actual data from your backend)
const events = [
  {
    id: 1,
    title: 'Professional Development Meets (PDMs)',
    date: '2023-11-15',
    location: 'Tilak Hall',
    image: 'https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866842.jpg',
    description: 'Sessions conducted to enhance members’ skills through workshops, expert talks, and interactive learning.',
    category: 'Conference'
  },
  {
    id: 2,
    title: 'Street Play',
    date: '2023-12-05',
    location: 'Campus Courtyard',
    image: 'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg',
    description: 'A creative event where participants use drama and performance to spread social awareness on pressing issues in an engaging and impactful way.',
    category: 'Social'
  },
  {
    id: 3,
    title: 'General Body Meets (GBMs)',
    date: '2024-01-10',
    location: 'Main Seminar Hall',
    image: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg',
    description: 'Regular gatherings of all members to share updates, review activities, and plan upcoming projects.',
    category: 'Workshop'
  },
  {
    id: 4,
    title: 'Global Mandate',
    date: '2024-02-20',
    location: 'Tilak Hall, Classrooms, Seminar Halls',
    image: 'https://img.freepik.com/free-vector/college-students-concept-illustration_114360-1244.jpg',
    description: 'A platform where participants discuss and simulate global issues, policies, and solutions through debate, presentations, and strategy-making.',
    category: 'Networking'
  },
  {
    id: 5,
    title: 'Blood Donation Camps',
    date: '2025-02-20',
    location: 'Community Hall',
    image: 'https://img.freepik.com/free-vector/college-students-concept-illustration_114360-1244.jpg',
    description: 'A flagship community service initiative where members organize donation drives to support hospitals and blood banks.',
    category: 'Social'
  },
];

const Events = () => {
  // Ensure the page has a dark background
  useEffect(() => {
    document.body.classList.add('bg-black');
    return () => {
      document.body.classList.remove('bg-black');
    };
  }, []);
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', ...new Set(events.map(event => event.category))];
  
  const filteredEvents = activeFilter === 'All' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-emerald-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-indigo-500"> Our Events</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Discover and participate in our exciting lineup of events, workshops, and activities.
            </motion.p>
          </div>

          {/* Category Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-indigo-500 shadow-lg shadow-yellow-500/20'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Events Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link to={`/events/${event.id}`} className="block">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div>
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-emerald-500 text-white rounded-full mb-2">
                          {event.category}
                        </span>
                        <h3 className="text-xl font-bold text-white">{event.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <svg className="w-4 h-4 mr-1.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(event.date)}
                      <span className="mx-2">•</span>
                      <svg className="w-4 h-4 mr-1.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                    <p className="text-gray-300 line-clamp-2 mb-4">{event.description}</p>
                    <div className="flex items-center text-emerald-400 font-medium text-sm">
                      Learn more
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* No Events Message */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-block p-4 bg-gray-800 rounded-full mb-4">
                <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-300">No events found</h3>
              <p className="mt-2 text-gray-500">Check back later for upcoming events in this category.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Events;
