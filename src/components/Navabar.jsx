import { motion } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`py-4 px-6 md:px-12 flex justify-between items-center ${darkMode ? "bg-gray-800" : "bg-uaeSand"}`}>
      <motion.div whileHover={{ scale: 1.1 }} className="font-bold text-xl text-uaeGold">
        My Portfolio
      </motion.div>
      <div className="flex items-center space-x-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full ${darkMode ? "bg-uaeGold text-gray-900" : "bg-uaeNavy text-white"}`}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#contact"
          className={`px-4 py-2 rounded-lg ${darkMode ? "bg-uaeGold text-gray-900" : "bg-uaeNavy text-white"}`}
        >
          Contact Me
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;