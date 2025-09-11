import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiArrowLeft, FiCalendar, FiMapPin, FiClock, FiUsers, FiLink } from 'react-icons/fi';

// Mock data - in a real app, you would fetch this from an API
const mockEvents = {
  1: {
    id: 1,
    title: 'Professional Development Meets (PDMs)',
    date: '2023-11-15',
    time: '09:00 AM - 05:00 PM',
    location: 'Tilak Hall',
    image: 'https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866842.jpg',
    banner: 'https://img.freepik.com/free-vector/technology-banner-with-holographic-effect_52683-47236.jpg',
    category: 'Conference',
    description: 'Sessions conducted to enhance members’ skills through workshops, expert talks, and interactive learning.',
    longDescription: 'Professional Development Meets (PDMs) are designed to build confidence, sharpen essential professional skills, and prepare members for future career opportunities. These sessions include hands-on workshops, expert-led talks, and interactive learning activities that focus on both technical and soft skills. The initiative ensures that members gain practical knowledge while building a strong professional network.\n\nWhether it\'s resume building, interview preparation, leadership skills, or exposure to cutting-edge technologies, PDMs aim to holistically develop members for academic and career success.',
    highlights: [
      'Workshops on leadership, communication, and teamwork',
      'Expert talks from industry professionals',
      'Interactive sessions to sharpen problem-solving skills',
      'Resume and interview preparation guidance',
      'Exposure to emerging technologies and tools',
      'Networking opportunities with peers and mentors'
    ],
    gallery: [
      'https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866842.jpg',
      'https://img.freepik.com/free-vector/college-students-concept-illustration_114360-1244.jpg',
      'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg'
    ],
    registrationLink: '#',
    speakers: [
      { name: 'Mr. Pranav Gujar', role: 'CEO PGT Global Network' }
    ]
  },
  2: {
    id: 2,
    title: 'Street Play',
    date: '2023-12-05',
    time: '03:00 PM - 05:00 PM',
    location: 'Campus Courtyard',
    image: 'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg',
    banner: 'https://img.freepik.com/free-vector/gradient-hackathon-banner_23-2149112554.jpg',
    category: 'Social',
    description: 'A creative event where participants use drama and performance to spread social awareness on pressing issues in an engaging and impactful way.',
    longDescription: 'Street Play is one of the most dynamic and impactful cultural initiatives of our club. Performed in open public spaces, these plays address socially relevant topics such as gender equality, environmental conservation, mental health, and civic responsibility. With powerful dialogues, expressive performances, and audience interaction, the plays aim to spark conversations and drive change.\n\nThis platform not only gives participants an opportunity to showcase their acting and storytelling skills but also instills a sense of responsibility to use art as a medium for awareness. It is entertainment with a purpose — engaging audiences while delivering meaningful messages.',
    highlights: [
      'Engaging performances on pressing social issues',
      'Creative use of drama to connect with audiences',
      'Interactive and impactful storytelling',
      'Platform for youth to express opinions through art',
      'Raises awareness and inspires community action',
      'Encourages social responsibility among participants'
    ],
    gallery: [
      'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg',
      'https://img.freepik.com/free-vector/hand-drawn-hackathon-illustration_23-2149247796.jpg',
      'https://img.freepik.com/free-vector/hand-drawn-hackathon-background_23-2149247801.jpg'
    ],
    registrationLink: '#',
    speakers: [
      { name: 'Mr. Pranav Gujar', role: 'CEO PGT Global Network' }
    ]
  },
  3: {
    id: 3,
    title: 'General Body Meets (GBMs)',
    date: '2024-01-10',
    time: '2:00 PM - 5:00 PM',
    location: 'Main Seminar Hall',
    image: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg',
    banner: 'https://img.freepik.com/free-vector/web-development-banner-with-abstract-design_1361-2600.jpg',
    category: 'Workshop',
    description: 'Regular gatherings of all members to share updates, review activities, and plan upcoming projects.',
    longDescription: 'General Body Meets (GBMs) serve as the backbone of our club\'s operations. These regular sessions bring together all members to ensure everyone stays updated on current activities, upcoming events, and organizational goals. GBMs are also a platform for open discussions, feedback exchange, and collaborative planning of new initiatives.\n\nBy fostering transparency and inclusivity, GBMs help align members with the club’s mission, strengthen relationships among peers, and encourage active participation in decision-making. They also provide opportunities to recognize achievements and motivate members toward future goals.',
    highlights: [
      'Club-wide updates and announcements',
      'Review of past and ongoing activities',
      'Planning and brainstorming for upcoming projects',
      'Open discussion and feedback opportunities',
      'Recognition of member contributions',
      'Strengthening bonding and collaboration among members'
    ],
    gallery: [
      'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg',
      'https://img.freepik.com/free-vector/web-development-isometric-concept-with-programmer-working_107791-9443.jpg',
      'https://img.freepik.com/free-vector/web-development-programming-abstract-concept-illustration_335657-3822.jpg'
    ],
    registrationLink: '#',
    speakers: [
      { name: 'Mr. Pranav Gujar', role: 'CEO PGT Global Network' }
    ]
  },
  4: {
    id: 4,
    title: 'Global Mandate',
    date: '2024-02-20',
    time: '6:00 PM - 9:00 PM',
    location: 'Tilak Hall, Classrooms, Seminar Halls',
    image: 'https://img.freepik.com/free-vector/college-students-concept-illustration_114360-1244.jpg',
    banner: 'https://img.freepik.com/free-vector/college-students-concept-illustration_114360-1203.jpg',
    category: 'Networking',
    description: 'A platform where participants discuss and simulate global issues, policies, and solutions through debate, presentations, and strategy-making.',
    longDescription: 'Global Mandate is a flagship event designed to engage participants in meaningful discussions and simulations of pressing international issues. Through structured debates, policy presentations, and collaborative strategy-making, participants gain a deeper understanding of global challenges and the complexities of decision-making at an international level.\n\nThe event not only nurtures awareness of international affairs but also sharpens analytical and problem-solving skills. By simulating real-world scenarios, Global Mandate builds confidence in diplomatic communication, negotiation, and teamwork. It provides a unique opportunity for youth to step into the shoes of global leaders and contribute ideas for a better world.',
    highlights: [
      'Simulates real-world international challenges and policy-making',
      'Encourages awareness of global issues and international affairs',
      'Strengthens problem-solving, negotiation, and critical thinking',
      'Develops diplomatic communication and teamwork skills',
      'Provides a platform for youth to showcase leadership potential',
      'Brings diverse perspectives together for collaborative solutions'
    ],
    gallery: [
      'https://img.freepik.com/free-vector/college-students-concept-illustration_114360-1244.jpg',
      'https://img.freepik.com/free-vector/business-people-networking_23-2148894001.jpg',
      'https://img.freepik.com/free-vector/meeting-business-people_23-2148894004.jpg'
    ],
    registrationLink: '#',
    speakers: [
      { name: 'Mr. Pranav Gujar', role: 'CEO PGT Global Network' }
    ]
  },
  5: {
    id: 5,
    title: 'Blood Donation Camps',
    date: '2025-02-20',
    time: '03:00 PM - 05:00 PM',
    location: 'Community Hall',
    image: 'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg',
    banner: 'https://img.freepik.com/free-vector/gradient-hackathon-banner_23-2149112554.jpg',
    category: 'Social',
    description: 'A flagship community service initiative where members organize donation drives to support hospitals and blood banks.',
    longDescription: ' Blood Donation Camps are one of the most impactful social initiatives organized by our club. These camps bring together volunteers and community members to donate blood, directly supporting hospitals, patients in need, and local blood banks. \n\nThe initiative not only helps save countless lives but also spreads awareness about the importance of regular blood donation. Through collaboration with medical professionals and healthcare organizations, the camps ensure a safe, organized, and meaningful experience for both donors and recipients. \n\nThis event reflects our commitment to social responsibility and community welfare — creating an environment of compassion, health awareness, and unity.',
    highlights: [
      'Directly supports hospitals and patients in need',
      'Encourages community participation in life-saving activities',
      'Safe and organized donation process with medical supervision',
      'Raises awareness about the importance of regular blood donation',
      'Builds a culture of compassion and social responsibility',
      'Strengthens partnerships with healthcare organizations'
    ],
    gallery: [
      'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg',
      'https://img.freepik.com/free-vector/hand-drawn-hackathon-illustration_23-2149247796.jpg',
      'https://img.freepik.com/free-vector/hand-drawn-hackathon-background_23-2149247801.jpg'
    ],
    registrationLink: '#',
    speakers: [
      { name: 'Mr. Pranav Gujar', role: 'CEO PGT Global Network' }
    ]
  },
  
};

const EventDetail = () => {
  // Ensure the page has a dark background
  useEffect(() => {
    document.body.classList.add('bg-gray-900');
    return () => {
      document.body.classList.remove('bg-gray-900');
    };
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    // In a real app, you would fetch the event data based on the ID
    const eventData = mockEvents[id];
    if (eventData) {
      setEvent(eventData);
    } else {
      // Redirect to 404 or events page if event not found
      navigate('/events');
    }
  }, [id, navigate]);

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-pulse">Loading event details...</div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-300 hover:text-white transition-colors mb-6 group"
          whileHover={{ x: -4 }}
        >
          <FiArrowLeft className="mr-2 group-hover:text-emerald-500 transition-colors" />
          Back to Events
        </motion.button>
      </div>

      {/* Event Banner */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={event.banner || event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 text-sm font-semibold bg-emerald-500 text-white rounded-full mb-3">
              {event.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{event.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center">
                <FiCalendar className="mr-1.5 text-emerald-500" />
                {formatDate(event.date)}
              </div>
              <div className="flex items-center">
                <FiClock className="mr-1.5 text-emerald-500" />
                {event.time}
              </div>
              <div className="flex items-center">
                <FiMapPin className="mr-1.5 text-emerald-500" />
                {event.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                <p className="text-gray-300 mb-6 whitespace-pre-line">{event.longDescription || event.description}</p>
                
                <h3 className="text-xl font-semibold mb-4 mt-8">Event Highlights</h3>
                <ul className="space-y-2 mb-8">
                  {event.highlights?.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2.5 mr-2 flex-shrink-0"></span>
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  )) || (
                    <li className="text-gray-400">No highlights available for this event.</li>
                  )}
                </ul>

                {/* Speakers Section */}
                {event.speakers?.length > 0 && (
                  <>
                    <h3 className="text-xl font-semibold mb-4">Featured Speakers</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {event.speakers.map((speaker, index) => (
                        <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                          <div className="w-16 h-16 rounded-full bg-gray-700 mb-3 flex items-center justify-center text-2xl font-bold text-emerald-400">
                            {speaker.name.charAt(0)}
                          </div>
                          <h4 className="font-medium">{speaker.name}</h4>
                          <p className="text-sm text-gray-400">{speaker.role}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 sticky top-6">
                <h3 className="text-xl font-semibold mb-4">Event Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Date & Time</p>
                    <p className="font-medium">
                      {formatDate(event.date)}<br />
                      <span className="text-gray-300">{event.time}</span>
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="font-medium">{event.location}</p>
                    <button className="text-emerald-400 text-sm mt-1 flex items-center hover:underline">
                      <FiMapPin className="mr-1" size={14} /> View on map
                    </button>
                  </div>
                  
                  {event.speakers?.length > 0 && (
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Speakers</p>
                      <p className="font-medium">{event.speakers.length} speakers</p>
                    </div>
                  )}
                  
                  <div className="pt-4">
                    <a
                      href={event.registrationLink || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-emerald-500 to-yellow-600 hover:from-emerald-600 hover:to-yellow-700 text-white font-medium py-3 px-6 rounded-lg text-center transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
                    >
                      Register Now
                    </a>
                    <p className="text-xs text-gray-400 text-center mt-2">
                      Limited seats available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          {event.gallery?.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Event Gallery</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {event.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative aspect-square overflow-hidden rounded-lg transition-all duration-300 ${
                      activeImage === index ? 'ring-2 ring-emerald-500' : 'opacity-80 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${event.title} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                ))}
              </div>
              
              {/* Large Preview */}
              <div className="mt-6 rounded-xl overflow-hidden">
                <img
                  src={event.gallery[activeImage]}
                  alt={`${event.title} preview`}
                  className="w-full h-64 sm:h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Back to Top Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center text-emerald-400 hover:text-white transition-colors"
            >
              Back to top
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventDetail;
