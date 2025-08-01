import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaFigma,
  FaMobileAlt,
  FaApple,
  FaAndroid, // Fixed Figma import
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiJquery,
  SiExpress,
} from "react-icons/si";

const Skill = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React.js",
          level: 95,
          icon: <FaReact className="text-blue-500" />,
        },
        {
          name: "TypeScript",
          level: 85,
          icon: <SiTypescript className="text-blue-600" />,
        },
        { name: "HTML5/CSS3", level: 98 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vue.js", level: 75 },
        { name: "JavaScript", level: 95 },
        { name: "Bootstrap", level: 85 },
        { name: "Sass", level: 80 },
        { name: "SEO", level: 80 },
      ],
      color: "bg-blue-100",
      textColor: "text-blue-800",
    },

    {
      title: "Mobile & Cross-platform",
      skills: [
        {
          name: "Capacitor.js",
          level: 80,
          icon: <FaMobileAlt className="text-blue-500" />,
        },
        {
          name: "iOS Application Development",
          level: 75,
          icon: <FaApple className="text-gray-800" />,
        },
        {
          name: "Android Application Development",
          level: 80,
          icon: <FaAndroid className="text-green-500" />,
        },
        { name: "Android Studio", level: 78 },
      ],
      color: "bg-pink-100",
      textColor: "text-pink-800",
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          level: 92,
          icon: <FaNodeJs className="text-green-500" />,
        },
        { name: "Express.js", level: 88, icon: <SiExpress /> },
        { name: "REST APIs", level: 90 },
        { name: "MVC Architecture", level: 85 },
      ],
      color: "bg-green-100",
      textColor: "text-green-800",
    },
    {
      title: "State Management",
      skills: [
        {
          name: "Redux Toolkit",
          level: 88,
          icon: <SiRedux className="text-purple-500" />,
        },
        { name: "Context API", level: 85 },
      ],
      color: "bg-purple-100",
      textColor: "text-purple-800",
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MongoDB",
          level: 85,
          icon: <SiMongodb className="text-green-600" />,
        },
        { name: "MySQL", level: 80 },
        { name: "MongoDB Atlas", level: 83 },
      ],
      color: "bg-amber-100",
      textColor: "text-amber-800",
    },
    {
      title: "DevOps & Cloud",
      skills: [
        {
          name: "AWS (EC2/S3)",
          level: 75,
          icon: <FaAws className="text-yellow-600" />,
        },
        {
          name: "Firebase",
          level: 80,
          icon: <SiFirebase className="text-orange-500" />,
        },
        { name: "Vercel", level: 85 },
        { name: "Nginx", level: 70 },
        { name: "DigitalOcean", level: 78 },
        { name: "Hostinger", level: 75 },
        { name: "Firewall Configuration", level: 80 },
      ],
      color: "bg-red-100",
      textColor: "text-red-800",
    },
    {
      title: "Tools & Utilities",
      skills: [
        {
          name: "Git/GitHub",
          level: 90,
          icon: <FaGitAlt className="text-gray-800" />,
        },
        {
          name: "Postman",
          level: 88,
          icon: <SiPostman className="text-orange-500" />,
        },
        {
          name: "Figma",
          level: 75,
          icon: <FaFigma className="text-pink-500" />,
        },
        {
          name: "jQuery",
          level: 65,
          icon: <SiJquery className="text-blue-400" />,
        },
      ],
      color: "bg-indigo-100",
      textColor: "text-indigo-800",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-uaeGold">Technical Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical capabilities across
            different domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl p-6 shadow-lg ${category.color} dark:bg-gray-800`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${category.textColor} dark:text-white`}
              >
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        {skill.icon || (
                          <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                        )}
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${category.textColor.replace(
                          "text",
                          "bg"
                        )}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Familiar With Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-uaeGold bg-opacity-10 dark:bg-opacity-20 p-6 rounded-xl"
        >
          <h3 className="text-2xl font-semibold text-uaeNavy dark:text-uaeGold mb-4">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Figma",
              "Nodemailer",
              "Multer",
              "Material UI",
              "AOS Animate",
              "React Three Fiber",
              "Framer Motion",
              "GSAP",
              "Stripe",
              "Twilio API",
              "JWT",
              "Cloudinary",
              "Sentry",
              "Playwright",
              "Canva",
              "Electron.js",
              "WebSocket",
              "WebRTC",
              "PWA",
              "Clean Architecture",
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm text-sm font-medium text-uaeNavy dark:text-gray-200 flex items-center"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
