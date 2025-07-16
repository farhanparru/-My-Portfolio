import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import { SiGmail } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-uaeNavy dark:bg-gray-900 text-white pt-16 pb-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold flex items-center">
              <span className="text-uaeGold">Muhammad</span>&nbsp;Shamin Farhan
            </h3>

            <p className="text-gray-300">
              Full Stack Developer based in Dubai, creating modern web
              experiences with cutting-edge technologies.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                {
                  icon: <FaLinkedin className="text-xl" />,
                  url: "https://www.linkedin.com/in/shaminfarhan/",
                },
                {
                  icon: <FaGithub className="text-xl" />,
                  url: "https://github.com/farhanparru",
                },
                {
                  icon: <FaTwitter className="text-xl" />,
                  url: "https://twitter.com",
                },
                {
                  icon: <SiGmail className="text-xl" />,
                  url: "mailto:farhan.dev24@gmail.com",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-uaeGold bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-uaeGold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", url: "#home" },
                { name: "About", url: "#about" },
                { name: "Skills", url: "#skills" },
                { name: "Projects", url: "#projects" },
                { name: "Contact", url: "#contact" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-uaeGold transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-uaeGold">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Applications",
                "UI/UX Design",
                "API Development",
                "Cloud Solutions",
              ].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-300"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-uaeGold">Contact</h4>
            <address className="not-italic space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-uaeGold mt-1" />
                <p>Dubai, United Arab Emirates</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-uaeGold" />
                <a
                  href="mailto:shamin@example.com"
                  className="hover:text-uaeGold transition-colors"
                >
                  farhan.dev24@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-uaeGold" />
                <a
                  href="tel:+971501234567"
                  className="hover:text-uaeGold transition-colors"
                >
                  +971 55 638 4774
                </a>
              </div>
            </address>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-px bg-uaeGold bg-opacity-30 my-8"
        />

        {/* Copyright & Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-4 md:mb-0"
          >
            &copy; 2025 Muhammad Shamin Farhan. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <a
              href="#"
              className="text-gray-400 hover:text-uaeGold transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-uaeGold transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-uaeGold transition-colors text-sm"
            >
              Cookies
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
