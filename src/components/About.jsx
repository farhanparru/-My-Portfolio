import React from "react";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiShield,
  FiGlobe,
  FiBookOpen,
  FiCheck,
  FiSmartphone,
} from "react-icons/fi";

const About = () => {
  const coreStrengths = [
    {
      icon: <FiCpu className="w-6 h-6 text-uaeGold" />,
      title: "Full-Stack JavaScript Architecture",
      desc: "Delivering complete end-to-end architectures across Next.js (SSR/SSG), React.js, Node.js, Express.js, PostgreSQL, MongoDB, Prisma ORM, Redis, BullMQ, and AWS.",
    },
    {
      icon: <FiSmartphone className="w-6 h-6 text-uaeGold" />,
      title: "Mobile Development (React Native & Expo)",
      desc: "Architected the Montres luxury watch app for iOS & Android with Expo Router, Virtual Watch Try-On studio, ISO ID-1 card true-to-size calibration, and 46 passing unit tests.",
    },
    {
      icon: <FiShield className="w-6 h-6 text-uaeGold" />,
      title: "Practical AI & Computer Vision",
      desc: "Integrated Google Gemini API (Gemini 2.5 Flash with fallback) for watch photo scanning and attribute extraction in TradeAuct; developing conversational shopping assistant.",
    },
    {
      icon: <FiGlobe className="w-6 h-6 text-uaeGold" />,
      title: "UAE & GCC Regional Ecosystem",
      desc: "Experienced with UAE PASS Authentication, eBay API, Stripe wallet/escrow payouts, Tabby & Tamara BNPL, DHL, Mawgood, Trend logistics, and MaxMind GeoIP.",
    },
  ];

  const languages = [
    { name: "English", level: "Professional Fluency", proficiency: 100 },
    { name: "Arabic", level: "Conversational", proficiency: 75 },
    { name: "Malayalam", level: "Native", proficiency: 100 },
    { name: "Tamil", level: "Advanced Proficiency", proficiency: 90 },
  ];

  const educationTraining = [
    {
      role: "Full-Stack / MERN Development Trainee",
      org: "Bridgeon Solutions LLP",
      period: "Sep 2023 – Jun 2024 (~10 months)",
      detail: "Hands-on full-stack training, complex database schema design, and project certifications (Certificate).",
    },
    {
      role: "Practical Software Development Experience",
      org: "Packapeer Academy (Brototype Program)",
      period: "Feb 2023 – Sep 2023 (~7 months)",
      detail: "Real-time projects, intensive programming fundamentals, C++, Java, data structures, and core software engineering.",
    },
    {
      role: "Higher Secondary Certificate (HSC)",
      org: "National Institute of Open Schooling (NIOS), India",
      period: "2023",
      detail: "Completed higher secondary curriculum.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-darkBg transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-uaeGold/10 border border-uaeGold/30 text-uaeGold text-xs font-bold uppercase tracking-wider mb-3">
            About My Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-uaeNavy dark:text-white tracking-tight">
            Engineering High-Performance <span className="text-uaeGold">Production Systems</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Full-Stack JavaScript developer specializing in <strong className="text-uaeNavy dark:text-uaeGold">React.js and Next.js</strong>, with approximately <strong className="text-uaeNavy dark:text-uaeGold">3 years of combined hands-on development experience</strong> (project-based practice, training, part-time and full-time employment), building production marketplace, e-commerce, ERP/POS, and business communication platforms for the UAE and GCC markets, and a <strong className="text-uaeNavy dark:text-uaeGold">React Native mobile app for iOS and Android</strong> (store release pending). Hands-on with UI/UX implementation from Figma designs, REST APIs, Node.js, PostgreSQL/MongoDB, and third-party integrations. Practical AI integration through Gemini-powered watch photo scanning, and currently developing a Google Gemini API shopping assistant. Works as a Full-Stack JavaScript Developer at <strong className="text-uaeNavy dark:text-white">Smart Supply Portal Est.</strong>, contributing to platforms including the TradeAuct luxury marketplace and live auction platform.
          </p>
        </motion.div>

        {/* 4 Core Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {coreStrengths.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-5 sm:p-6 rounded-2xl border border-gray-200/80 dark:border-gray-800 hover:border-uaeGold transition-all duration-300 shadow-sm hover:shadow-gold-glow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-uaeGold/10 dark:bg-uaeGold/20 flex items-center justify-center mb-5 border border-uaeGold/30">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-uaeNavy dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two Columns: Spoken Languages & Training/Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Languages & Regional Fluency */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-uaeGold/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-uaeNavy dark:bg-uaeGold text-white dark:text-uaeNavy">
                <FiGlobe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-uaeNavy dark:text-white">
                  Languages & Communication
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Enabling seamless cross-cultural UAE & Global team collaboration
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {languages.map((lang, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-sm font-semibold text-uaeNavy dark:text-gray-200">
                    <span>{lang.name}</span>
                    <span className="text-xs font-bold text-uaeGold px-2.5 py-0.5 rounded-full bg-uaeGold/10 border border-uaeGold/30">
                      {lang.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="bg-gradient-to-r from-uaeNavy to-uaeGold dark:from-uaeGoldDark dark:to-uaeGold h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* UAE Market Highlight */}
            <div className="mt-8 p-4 rounded-xl bg-uaeGold/10 border border-uaeGold/30 flex items-start gap-3">
              <FiCheck className="w-5 h-5 text-uaeGold flex-shrink-0 mt-0.5" />
              <p className="text-xs text-uaeNavy dark:text-gray-300 leading-relaxed font-medium">
                Deeply familiar with UAE & GCC business ecosystems, payment regulations (Stripe, Tamara, Tabby), and digital identification standards (UAE PASS).
              </p>
            </div>
          </motion.div>

          {/* Right: Education & Professional Training */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-uaeGold/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-uaeGold text-uaeNavy">
                <FiBookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-uaeNavy dark:text-white">
                  Professional Training & Education
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Rigorous computer science & full-stack development foundations
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {educationTraining.map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 border-l-2 border-uaeGold/40 dark:border-uaeGold/30 pb-4 last:pb-0"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-darkBg border-2 border-uaeGold" />
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <h4 className="font-display font-bold text-base text-uaeNavy dark:text-white">
                      {item.role}
                    </h4>
                    <span className="text-xs font-semibold text-uaeGold px-2 py-0.5 rounded bg-uaeGold/10">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {item.org}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
