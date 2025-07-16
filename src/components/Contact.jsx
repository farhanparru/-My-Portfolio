import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTelegramPlane } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 lg:px-16 bg-uaeSand dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-uaeNavy dark:text-white mb-4">
            Get In <span className="text-uaeGold">Touch</span>
          </h2>
          <p className="text-lg text-uaeNavy dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Reach out through any channel below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-start space-x-4"
            >
              <div className="bg-uaeGold bg-opacity-20 p-3 rounded-full">
                <FaPhoneAlt className="text-uaeGold text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-uaeNavy dark:text-white">Phone</h3>
                <a 
                  href="tel:+971501234567" 
                  className="text-gray-600 dark:text-gray-300 hover:text-uaeGold transition-colors"
                >
                 +971 55 638 4774
                </a>
              </div>
            </motion.div>

            {/* Contact Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-start space-x-4"
            >
              <div className="bg-uaeGold bg-opacity-20 p-3 rounded-full">
                <FaEnvelope className="text-uaeGold text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-uaeNavy dark:text-white">Email</h3>
                <a 
                  href="mailto:farhan.dev24@gmail.com" 
                  className="text-gray-600 dark:text-gray-300 hover:text-uaeGold transition-colors"
                >
                  farhan.dev24@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Contact Card 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-start space-x-4"
            >
              <div className="bg-uaeGold bg-opacity-20 p-3 rounded-full">
                <FaMapMarkerAlt className="text-uaeGold text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-uaeNavy dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dubai, United Arab Emirates
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/97556384774"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-3 rounded-full shadow-md"
              >
                <SiWhatsapp className="text-xl" />
              </motion.a>
              
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://t.me/MuhammadShaminFarhan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white p-3 rounded-full shadow-md"
              >
                <FaTelegramPlane className="text-xl" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-uaeNavy dark:text-white mb-6">Send Me a Message</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-uaeGold focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-uaeGold focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="farhan.dev24@gmail.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-uaeGold focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-uaeGold focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(212, 175, 55, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-uaeGold text-uaeNavy font-semibold py-3 px-6 rounded-lg transition-all"
              >
                Send Message
                <FaTelegramPlane className="inline ml-2" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;