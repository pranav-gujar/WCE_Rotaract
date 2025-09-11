import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Footer from '../components/Footer.jsx';

const Contact = () => {
  const contactItems = [
    {
      icon: <FaPhone className="text-3xl text-yellow-400" />,
      title: 'Phone',
      content: '+91 1234567890',
      link: 'tel:+911234567890'
    },
    {
      icon: <FaEnvelope className="text-3xl text-yellow-400" />,
      title: 'Email',
      content: 'rotaract@wcesangli.ac.in',
      link: 'mailto:rotaract@wcesangli.ac.in'
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-yellow-400" />,
      title: 'Address',
      content: 'Walchand College of Engineering, Sangli, Maharashtra 416415',
      link: 'https://maps.app.goo.gl/your-google-maps-link'
    }
  ];

  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://instagram.com/rotaractwce', label: 'Instagram' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/company/rotaractwce', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/rotaractwce', label: 'Twitter' },
    { icon: <FaFacebook />, url: 'https://facebook.com/rotaractwce', label: 'Facebook' }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      <main className="container mx-auto px-4 py-16 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
            Get In Touch
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions or want to know more about our club? Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 flex flex-col items-center text-center"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.content}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-2xl text-gray-300 hover:text-yellow-400 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center text-gray-400 text-sm"
        >
          <p>© {new Date().getFullYear()} Rotaract Club WCE Sangli. All rights reserved.</p>
        </motion.div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
