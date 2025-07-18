import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import sevensc from "../assets/image sevenss.png";
import technomagic from "../assets/technomagix.png";
import emirates from "../assets/emiratesGold.png";
import cloud from "../assets/cloudQlobeuu.png";
import zealTours from '../assets/zealTourisamAGne.png'
import everestTraders from '../assets/everset.png'
import aliyaSchool from '../assets/school.png'
// Project data
const projectsData = [
{
  id: 1,
  title: "Sevenscape General Contracting and Facility Management Services L.L.C",
  shortTitle: "Sevenscape", // For mobile view
  description:
    "Facility management company website with service showcase and contact system",
  tags: ["React.js", "Tailwind CSS", "Responsive","Node.js","MongoDB","Express.js","Vercel"],
  image: sevensc, // Direct image reference
  github: {
    frontend: "https://github.com/farhanparru/SevenscapeGeneralContracting-LLC.git",
    backend: "https://github.com/farhanparru/SevenscapeGeneralContracting-Backend.git"
  },
  live: "https://www.sevenscape.ae/"
},

  {
    id: 2,
    title: "TECHNOMAGIC SOLUTIONS INDIA PRIVATE LIMITED",
    description:
      "Official corporate website for IT solutions provider featuring service showcases, client portals, and interactive tech demonstrations. Implemented smooth animations and responsive layouts to enhance user engagement.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Responsive Design",
    ],
    image: technomagic,
    github: "https://github.com/cloudqlobe/Technofrontend.git", // (or company private repo if applicable)
    live: "https://www.technomagicsolutions.info/",
  },
  {
    id: 3,
    title: "Emirates Gold DMCC",
    description:
      "A premium gold trading platform featuring real-time market data visualization, secure user authentication, and responsive trading dashboards. Designed to enhance customer engagement with intuitive navigation and seamless cross-device experience.",
    tags: ["React.js", "Framer Motion", "Tailwind CSS", "Firebase", "Chart.js","Vercel"],
    image: emirates,
    github: "https://github.com/farhanparru/EmiratesGoldKSD.git",
    live: "https://emirates-gold-ksd-aflw.vercel.app/",
  },

  {
    id: 4,
    title: "Cloud Qlobe Telecom",
    description:
      "Enterprise-grade telecommunications platform offering real-time network monitoring, customer management, and billing solutions. Features AI-powered analytics dashboard, secure API integrations, and multi-carrier support.",
    tags: [
      "React.js",
      "Node.js",
      "MongoDB Atlas",
      "WebSockets",
      "Tailwind CSS",
      "AWS",
    ],
    image: cloud, // Make sure to add this image to your assets
     github: {
    frontend: "https://github.com/cloudqlobe/CloudQlobe-Frondent.git",
    backend: "https://github.com/cloudqlobe/CloudQlobe-Backend.git"
  },
    live: "https://www.cloudqlobe.com/",
    features: [
      "Real-time network topology visualization",
      "Carrier-grade API integrations",
      "AI-driven traffic analytics",
      "Multi-tenant SaaS architecture",
      "End-to-end encrypted communications",
    ],
  },

  {
    id: 5,
    title: "Zeal Tours and Travels",
    shortTitle: "Zeal Tours",
    description:
      "Comprehensive travel agency platform with tour packages, booking system, and complete admin panel for managing bookings, customers, and inventory. Features secure payment integration and real-time availability updates.",
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Admin Panel",
      "Payment Gateway",
      "Responsive Design"
    ],
    image: zealTours,
    github: {
      frontend: "https://github.com/Sanjay9745/Zeal-Tourism.git",
      backend: "https://github.com/farhanparru/ZealTourisam-Backend.git",
      admin: "https://github.com/farhanparru/ZealTourisamAdmin.git"
    },
    live: "https://admin-gules-five.vercel.app/",
    features: [
      "Complete booking management system",
      "Role-based admin dashboard",
      "Real-time package availability",
      "Multi-payment gateway integration",
      "Customer relationship management",
      "Automated email notifications",
      "Analytics and reporting"
    ]
  },

  {
  id: 6,
  title: "Everest Traders Inc",
  shortTitle: "Everest Traders",
  description: "Comprehensive e-commerce platform for international trading company featuring product catalogs, inquiry system, and multi-language support. Implemented secure authentication and responsive design for global clients.",
  tags: [
    "React.js",
    "Tailwind CSS",
    "Vercel",
    "Responsive Design"
  ],
  image: everestTraders, // Make sure to add this image to your assets
  github: {
    frontend: "https://github.com/farhanparru/EVERESTTRADERS.git",

  },
  live: "https://everesttraders.vercel.app/",
  features: [
    "Multi-language support (English, Arabic, Chinese)",
    "Product catalog with advanced filtering",
    "Secure client inquiry system",
    "Role-based user authentication",
    "Responsive design for all devices",
    "Interactive product showcase",
    "Admin dashboard for content management"
  ]
},

{
  id: 7,
  title: "Aliya Senior Secondary School",
  shortTitle: "Aliya School",
  description: "Official website for Aliya Senior Secondary School featuring academic programs, admission information, school activities, and parent portal. Implemented with UAE-inspired design elements and responsive layouts for all devices.",
  tags: [
    "React.js",
    "Tailwind CSS",
    "Responsive Design",
    "UAE Theme",
    "Interactive Gallery",
    "Vercel"
  ],
  image: aliyaSchool, // Make sure to import this image
  github: {
    frontend: "https://github.com/farhanparru/Aliya-Senior-Secondary-School.git",
    // Add backend if applicable
  },
  live: "https://shcool-project.vercel.app/", // Update with actual live URL
  features: [
    "UAE-inspired color scheme and design",
    "Interactive photo gallery",
    "Admission form with validation",
    "Responsive mobile-first design",
    "Academic program showcase",
    "School management section",
    "Principal's message section",
    "Chatbot support system",
    "Event calendar integration",
    "Parent portal (if implemented)"
  ],
  specialNotes: "This project incorporates cultural elements from the UAE while serving an Indian educational institution, creating a unique fusion design approach. The implementation includes a custom chatbot for student/parent inquiries."
}
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const filters = ["All", "React.js", "Node.js", "Full Stack"];

  const handleFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
    }, 500);
  };

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.tags.includes(activeFilter));

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-uaeNavy dark:text-white mb-4">
            My <span className="text-uaeGold">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my selected works. Each project reflects
            problem-solving skills and technical expertise.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((item) => (
            <motion.button
              key={item}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleFilter(item)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === item
                  ? "bg-uaeGold text-uaeNavy"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-uaeNavy bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="bg-white p-3 rounded-full text-uaeNavy hover:bg-uaeGold transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="bg-white p-3 rounded-full text-uaeNavy hover:bg-uaeGold transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-uaeNavy dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-uaeGold bg-opacity-20 text-uaeGold dark:text-uaeGold text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12"
        >
          <button className="px-6 py-3 bg-uaeGold text-uaeNavy font-medium rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2 mx-auto">
            View More Projects
            <FiExternalLink />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
