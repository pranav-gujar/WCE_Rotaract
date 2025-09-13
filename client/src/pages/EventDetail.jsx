import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiArrowLeft, FiCalendar, FiMapPin, FiClock, FiUsers, FiLink } from 'react-icons/fi';

// Main Banner/Images
import PDM_Poster from '../assets/Events_IMG/PDM/poster.jpg';
import GBM_Poster from '../assets/Events_IMG/GBM/poster.jpg';
import GM_Poster from '../assets/Events_IMG/GM/poster.jpeg';
import GIM_Poster from '../assets/Events_IMG/GIM/poster.jpeg';
import SP_Poster from '../assets/Events_IMG/SP/poster.jpg';
import CSR_Poster from '../assets/Events_IMG/CSR/poster.jpg';
import BDC_March_2025_Poster from '../assets/Events_IMG/BDC/March 2025/poster.webp';
import BDC_October_2024_Poster from '../assets/Events_IMG/BDC/October 2024/poster.jpeg';

// General GM Images
import GM_one from '../assets/Events_IMG/GM/1.jpg';
import GM_two from '../assets/Events_IMG/GM/2.jpg';
import GM_three from '../assets/Events_IMG/GM/3.jpg';

// General GBM Images
import GBM_one from '../assets/Events_IMG/GBM/1.jpg';
import GBM_two from '../assets/Events_IMG/GBM/2.jpg';
import GBM_three from '../assets/Events_IMG/GBM/3.jpg';

// General GIM Images
import GIM_one from '../assets/Events_IMG/GIM/1.jpg';
import GIM_two from '../assets/Events_IMG/GIM/2.jpg';
import GIM_three from '../assets/Events_IMG/GIM/3.jpg';
import GIM_four from '../assets/Events_IMG/GIM/4.jpg';
import GIM_five from '../assets/Events_IMG/GIM/5.jpg';
import GIM_six from '../assets/Events_IMG/GIM/6.jpg';

// General CSR Images
import CSR_one from '../assets/Events_IMG/CSR/1.jpg';
import CSR_two from '../assets/Events_IMG/CSR/2.jpg';
import CSR_three from '../assets/Events_IMG/CSR/3.jpg';
import CSR_four from '../assets/Events_IMG/CSR/4.jpg';
import CSR_five from '../assets/Events_IMG/CSR/5.jpg';

// Blood Donation Camp October 2024
import BDC_Oct2024_one from '../assets/Events_IMG/BDC/October 2024/1.jpg';
import BDC_Oct2024_two from '../assets/Events_IMG/BDC/October 2024/2.jpg';
import BDC_Oct2024_three from '../assets/Events_IMG/BDC/October 2024/3.jpg';
import BDC_Oct2024_four from '../assets/Events_IMG/BDC/October 2024/4.jpg';
import BDC_Oct2024_five from '../assets/Events_IMG/BDC/October 2024/5.jpg';
import BDC_Oct2024_six from '../assets/Events_IMG/BDC/October 2024/6.jpg';
import BDC_Oct2024_seven from '../assets/Events_IMG/BDC/October 2024/7.jpg';
import BDC_Oct2024_eight from '../assets/Events_IMG/BDC/October 2024/8.jpg';
import BDC_Oct2024_nine from '../assets/Events_IMG/BDC/October 2024/9.jpg';
import BDC_Oct2024_ten from '../assets/Events_IMG/BDC/October 2024/10.jpg';
import BDC_Oct2024_eleven from '../assets/Events_IMG/BDC/October 2024/11.jpg';
import BDC_Oct2024_twelve from '../assets/Events_IMG/BDC/October 2024/12.jpg';

// Blood Donation Camp March 2025
import BDC_Mar2025_one from '../assets/Events_IMG/BDC/March 2025/1.jpg';
import BDC_Mar2025_two from '../assets/Events_IMG/BDC/March 2025/2.jpg';
import BDC_Mar2025_three from '../assets/Events_IMG/BDC/March 2025/3.jpg';
import BDC_Mar2025_four from '../assets/Events_IMG/BDC/March 2025/4.jpg';
import BDC_Mar2025_five from '../assets/Events_IMG/BDC/March 2025/5.jpg';
import BDC_Mar2025_six from '../assets/Events_IMG/BDC/March 2025/6.jpg';
import BDC_Mar2025_seven from '../assets/Events_IMG/BDC/March 2025/7.jpg';
import BDC_Mar2025_eight from '../assets/Events_IMG/BDC/March 2025/8.jpg';

// General PDM Images
import PDM_one from '../assets/Events_IMG/PDM/1.jpg';
import PDM_two from '../assets/Events_IMG/PDM/2.jpg';
import PDM_three from '../assets/Events_IMG/PDM/3.jpg';
import PDM_four from '../assets/Events_IMG/PDM/4.jpg';
import PDM_five from '../assets/Events_IMG/PDM/5.jpg';
import PDM_six from '../assets/Events_IMG/PDM/6.jpg';


// General SP Images
import SP_one from '../assets/Events_IMG/SP/1.jpg';
import SP_two from '../assets/Events_IMG/SP/2.jpg';
import SP_three from '../assets/Events_IMG/SP/3.jpg';


// Mock data - in a real app, you would fetch this from an API
const mockEvents = {
  1: {
    id: 1,
    title: 'Professional Development Meets (PDMs)',
    date: '2025-04-15',
    time: '09:00 AM - 05:00 PM',
    location: 'WCE Sangli',
    image: PDM_Poster,
    banner: PDM_Poster,
    // image: 'https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866842.jpg',
    // banner: 'https://img.freepik.com/free-vector/technology-banner-with-holographic-effect_52683-47236.jpg',
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
      PDM_one, PDM_two, PDM_three,
      // 'https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866842.jpg',
      // 'https://img.freepik.com/free-vector/college-students-concept-illustration_114360-1244.jpg',
      // 'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg'
    ],
    registrationLink: '#',
    speakers: [
      // { name: 'Mr. Pranav Gujar', role: 'CEO PGT Global Network' }
    ]
  },
  2: {
    id: 2,
    title: 'Street Play',
    date: '2025-03-29',
    time: '03:00 PM - 05:00 PM',
    location: 'Campus Courtyard',
    image: SP_Poster,
    banner: SP_Poster,
    // image: 'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg',
    // banner: 'https://img.freepik.com/free-vector/gradient-hackathon-banner_23-2149112554.jpg',
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
      SP_one, SP_two, SP_three,
      // 'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg',
      // 'https://img.freepik.com/free-vector/hand-drawn-hackathon-illustration_23-2149247796.jpg',
      // 'https://img.freepik.com/free-vector/hand-drawn-hackathon-background_23-2149247801.jpg'
    ],
    registrationLink: '#',
    speakers: [
      // { name: 'Mr. Pranav Gujar', role: 'CEO PGT Global Network' }
    ]
  },
  3: {
    id: 3,
    title: 'General Body Meets (GBMs)',
    date: '2024-01-21',
    time: '2:00 PM - 5:00 PM',
    location: 'WCE Sangli',
    image: GBM_Poster,
    banner: GBM_Poster,
    // image: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg',
    // banner: 'https://img.freepik.com/free-vector/web-development-banner-with-abstract-design_1361-2600.jpg',
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
      GBM_one, GBM_two, GBM_three,
      // 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg',
      // 'https://img.freepik.com/free-vector/web-development-isometric-concept-with-programmer-working_107791-9443.jpg',
      // 'https://img.freepik.com/free-vector/web-development-programming-abstract-concept-illustration_335657-3822.jpg'
    ],
    registrationLink: '#',
    speakers: [
      // { name: 'Mr. Pranav Gujar', role: 'CEO PGT Global Network' }
    ]
  },
  4: {
    id: 4,
    title: 'Global Mandate',
    date: '2023-10-07',
    time: '9:00 AM - 6:00 PM',
    location: 'WCE Sangli',
    image: GM_Poster,
    banner: GM_Poster,
    // image: 'https://img.freepik.com/free-vector/college-students-concept-illustration_114360-1244.jpg',
    // banner: 'https://img.freepik.com/free-vector/college-students-concept-illustration_114360-1203.jpg',
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
      GM_one, GM_two, GM_three,
      // 'https://img.freepik.com/free-vector/college-students-concept-illustration_114360-1244.jpg',
      // 'https://img.freepik.com/free-vector/business-people-networking_23-2148894001.jpg',
      // 'https://img.freepik.com/free-vector/meeting-business-people_23-2148894004.jpg'
    ],
    registrationLink: '#',
    speakers: [
      // { name: 'Mr. Pranav Gujar', role: 'CEO PGT Global Network' }
    ]
  },
  5: {
    id: 5,
    title: 'Blood Donation Camp 2024',
    date: '2024-10-22',
    time: '03:00 PM - 05:00 PM',
    location: 'WCE Sangli',
    image: BDC_October_2024_Poster,
    banner: BDC_October_2024_Poster,
    // image: 'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg',
    // banner: 'https://img.freepik.com/free-vector/gradient-hackathon-banner_23-2149112554.jpg',
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
       BDC_Oct2024_one, BDC_Oct2024_two, BDC_Oct2024_three, BDC_Oct2024_four,
       BDC_Oct2024_five, BDC_Oct2024_six, BDC_Oct2024_seven, BDC_Oct2024_eight,
       BDC_Oct2024_nine, BDC_Oct2024_ten, BDC_Oct2024_eleven, BDC_Oct2024_twelve,
      // 'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg',
      // 'https://img.freepik.com/free-vector/hand-drawn-hackathon-illustration_23-2149247796.jpg',
      // 'https://img.freepik.com/free-vector/hand-drawn-hackathon-background_23-2149247801.jpg'
    ],
    registrationLink: '#',
    speakers: [
      // { name: 'Mr. Pranav Gujar', role: 'CEO PGT Global Network' }
    ]
  },
  6: {
    id: 6,
    title: 'Blood Donation Camp 2025',
    date: '2025-04-04',
    time: '03:00 PM - 05:00 PM',
    location: 'WCE Sangli',
    image: BDC_March_2025_Poster,
    banner: BDC_March_2025_Poster,
    // image: 'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg',
    // banner: 'https://img.freepik.com/free-vector/gradient-hackathon-banner_23-2149112554.jpg',
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
      BDC_Mar2025_one, BDC_Mar2025_two, BDC_Mar2025_three, BDC_Mar2025_four,
      BDC_Mar2025_five, BDC_Mar2025_six, BDC_Mar2025_seven, BDC_Mar2025_eight,
      // 'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg',
      // 'https://img.freepik.com/free-vector/hand-drawn-hackathon-illustration_23-2149247796.jpg',
      // 'https://img.freepik.com/free-vector/hand-drawn-hackathon-background_23-2149247801.jpg'
    ],
    registrationLink: '#',
    speakers: [
      // { name: 'Mr. Pranav Gujar', role: 'CEO PGT Global Network' }
    ]
  },
  7: {
    id: 7,
    title: 'General Interest Meet(GIM) 2024',
    date: '2024-09-25',
    time: '03:00 PM - 05:00 PM',
    location: 'WCE Sangli',
    image: GIM_Poster,
    banner: GIM_Poster,
    // image: 'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg',
    // banner: 'https://img.freepik.com/free-vector/gradient-hackathon-banner_23-2149112554.jpg',
    category: 'Networking',
    description: 'An exclusive orientation and networking event designed for first-year students to explore opportunities, connect with peers, and understand the culture of the club.',
    longDescription: ' The General Interest Meet (GIM) is a flagship orientation program held annually to welcome first-year students. It serves as the very first interaction between newcomers and the senior members of the club.\n\nThe event introduces students to the club’s vision, objectives, and the wide spectrum of activities they can engage in — ranging from technical projects, management roles, social initiatives, and leadership opportunities.\n\nGIM provides a platform for first-year students to ask questions, interact with seniors, and get inspired by alumni success stories. It emphasizes inclusivity, growth, and active participation in the club’s journey throughout the academic year',
    highlights: [
      'Exclusive orientation for first-year students',
      'Introduces club structure, activities, and vision',
      'Interactive sessions with seniors and alumni',
      'Guidance on career development and opportunities',
      'Encourages networking and team-building among freshers',
      'Inspires active participation in club initiatives'
    ],
    gallery: [
      GIM_one, GIM_two, GIM_three, GIM_four, GIM_five, GIM_six,
      // 'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg',
      // 'https://img.freepik.com/free-vector/hand-drawn-hackathon-illustration_23-2149247796.jpg',
      // 'https://img.freepik.com/free-vector/hand-drawn-hackathon-background_23-2149247801.jpg'
    ],
    registrationLink: '#',
    speakers: [
      // { name: 'Mr. Pranav Gujar', role: 'CEO PGT Global Network' }
    ]
  },
  8: {
    id: 8,
    title: 'Corporate Social Responsibility (CSR) 2025',
    date: '2025-02-20',
    time: '03:00 PM - 05:00 PM',
    location: 'WCE Sangli',
    image: CSR_Poster,
    banner: CSR_Poster,
    // image: 'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg',
    // banner: 'https://img.freepik.com/free-vector/gradient-hackathon-banner_23-2149112554.jpg',
    category: 'Social',
    description: 'A social initiative where members engage with communities through awareness drives, cleanliness campaigns, and social outreach programs.',
    longDescription: 'The Corporate Social Responsibility (CSR) Drive represents our commitment to giving back to society through impactful initiatives. These drives often include activities such as cleanliness campaigns, health and hygiene awareness sessions, and support for underprivileged communities.\n\nMembers actively collaborate with NGOs, local organizations, and volunteers to address real-world social issues. Beyond service, the CSR drive fosters empathy, leadership, and a deep sense of responsibility among students, aligning with the vision of holistic development.\n\nThe program not only benefits the community but also provides members with invaluable exposure to the challenges of social work and the importance of collective action.',
    highlights: [
       'Community outreach through awareness and service',
      'Collaboration with NGOs and local organizations',
      'Encourages student leadership in social initiatives',
      'Focus on health, hygiene, and sustainability',
      'Promotes teamwork, empathy, and social responsibility'
    ],
    gallery: [
      CSR_one, CSR_two, CSR_three, CSR_four, CSR_five,
      // 'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148914456.jpg',
      // 'https://img.freepik.com/free-vector/hand-drawn-hackathon-illustration_23-2149247796.jpg',
      // 'https://img.freepik.com/free-vector/hand-drawn-hackathon-background_23-2149247801.jpg'
    ],
    registrationLink: '#',
    speakers: [
      // { name: 'Mr. Pranav Gujar', role: 'CEO PGT Global Network' }
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
