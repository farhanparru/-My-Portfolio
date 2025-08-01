import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../assets/new my pic.jpg'; // Replace with your image path
import { FaDownload } from "react-icons/fa";
import cvPDF from '../assets/Muhammad-Shamin-Farhan-Full Stack Developer.pdf'

const Hero = ({ darkMode }) => {
  return (
    <section className={`relative py-20 px-4 md:px-10 lg:px-20 overflow-hidden ${darkMode ? "bg-gray-900" : "bg-uaeSand"}`}>
      {/* Animated Background Elements (UAE-inspired) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
      </motion.div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left mb-12 md:mb-0 md:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-uaeGold block">Hello Everyone,</span>
            <span className={`block mt-2 ${darkMode ? "text-white" : "text-uaeNavy"}`}>
              I'm <span className="text-uaeGold">Muhammad Shamin Farhan</span>
            </span>
          </h1>

          <div className={`text-2xl md:text-3xl h-12 mb-6 ${darkMode ? "text-gray-300" : "text-uaeNavy"}`}>
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                2000,
                'Frontend Specialist',
                2000,
                'React.js Expert',
                2000,
                'Full Stack Engineer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-semibold"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
           <motion.a
      href={cvPDF}
      download="Muhammad_Shamin_Farhan_CV.pdf"
      aria-label="Download CV as PDF"
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 8px 15px rgba(212, 175, 55, 0.4)",
        transition: { duration: 0.3 }
      }}
      whileTap={{ 
        scale: 0.95,
        boxShadow: "0 2px 5px rgba(212, 175, 55, 0.2)"
      }}
      className="flex items-center justify-center bg-uaeGold text-uaeNavy px-6 py-3 rounded-lg font-semibold shadow-lg transition-all hover:bg-opacity-90"
    >
      <FaDownload className="mr-2" />
      Download CV (PDF)
    </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold border-2 ${darkMode ? "border-uaeGold text-white hover:bg-uaeGold hover:text-uaeNavy" : "border-uaeNavy text-uaeNavy hover:bg-uaeNavy hover:text-white"}`}
            >
              Hire Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Image with Floating Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative md:w-1/2 flex justify-center"
        >
          <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${darkMode ? "border-uaeGold" : "border-uaeNavy"} relative`}>
            <img 
              src={profileImage}
              alt="Muhammad Shamin Farhan" 
              className="w-full h-full object-cover"
            />
            {/* Floating animation container */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Decorative Arabic calligraphy element */}
              <div className="absolute -bottom-10 -right-10 text-uaeGold opacity-20 text-9xl font-arabic">
                &#xFD3E;
              </div>
            </motion.div>
          </div>
          
          {/* Floating tech badges around image */}
          <motion.div 
            className="absolute -bottom-5 left-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
            animate={{
              y: [-5, 5, -5],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          >
            <span className="text-xs font-bold text-uaeNavy dark:text-uaeGold">React.js</span>
          </motion.div>
          
          <motion.div 
            className="absolute -top-5 right-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
            animate={{
              y: [5, -5, 5],
              rotate: [0, -10, 10, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <span className="text-xs font-bold text-uaeNavy dark:text-uaeGold">Node.js</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;