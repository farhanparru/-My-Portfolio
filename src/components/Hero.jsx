import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../assets/new my pic.jpg";
import cvPDF from "../assets/Muhammad-Shamin-Farhan-Full Stack Developer.pdf";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCode,
  FaAws,
  FaRobot,
} from "react-icons/fa";
import { SiPostgresql, SiNextdotjs } from "react-icons/si";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

const Hero = ({ darkMode }) => {
  const stats = [
    { label: "Hands-On JS Experience", value: "~3 Yrs", detail: "React, Next.js & Node.js" },
    { label: "Production Platforms", value: "10+", detail: "UAE & GCC Enterprise" },
    { label: "AI & Innovation", value: "Gemini AI", detail: "Shopping Assistant & Vision" },
    { label: "FTTH Infrastructure", value: "5,000+", detail: "Dubai & Sharjah Units" },
  ];

  const floatingBadges = [
    { name: "Next.js (SSR/SSG)", icon: <SiNextdotjs className="text-black dark:text-white" />, pos: "-top-3 -left-2 sm:-left-4" },
    { name: "Gemini AI & Vision", icon: <FaRobot className="text-purple-400" />, pos: "-top-3 -right-2 sm:-right-4" },
    { name: "PostgreSQL & Prisma", icon: <SiPostgresql className="text-sky-500" />, pos: "bottom-8 sm:bottom-12 -left-2 sm:-left-8" },
    { name: "AWS EC2/S3/RDS", icon: <FaAws className="text-amber-500" />, pos: "bottom-8 sm:bottom-12 -right-2 sm:-right-8" },
  ];

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern transition-colors duration-300"
    >
      {/* UAE-inspired ambient glow orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-uaeGold/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-uaeNavy/15 dark:bg-uaeGold/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text & Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* UAE Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-uaeGold/15 border border-uaeGold/30 text-uaeNavy dark:text-uaeGold text-xs font-bold tracking-wide mb-6">
              <FaMapMarkerAlt className="text-uaeRed" />
              <span>Sharjah & Dubai, United Arab Emirates</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-uaeNavy dark:text-white tracking-tight leading-[1.15] mb-4">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-uaeNavy via-uaeGold to-uaeGoldDark dark:from-white dark:via-uaeGoldLight dark:to-uaeGold">
                Muhammad Shamin Farhan
              </span>
            </h1>

            {/* Sub-heading & Dynamic Typing */}
            <div className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-gray-300 h-10 mb-6 flex items-center justify-center lg:justify-start gap-2">
              <span className="text-uaeGold">▸</span>
              <TypeAnimation
                sequence={[
                  "Full-Stack JavaScript Developer",
                  2200,
                  "React.js & Next.js Specialist",
                  2200,
                  "AI Integration & Google Gemini API",
                  2200,
                  "Node.js, Express & PostgreSQL Engineer",
                  2200,
                  "Luxury E-Commerce & Live Auctions",
                  2200,
                  "AWS Cloud & Production Deployment",
                  2200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-display font-bold text-uaeNavy dark:text-white border-b-2 border-uaeGold"
              />
            </div>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Full-Stack JavaScript developer specializing in <strong className="text-uaeNavy dark:text-uaeGold">React.js, Next.js & AI Integration</strong> with approximately <strong className="text-uaeNavy dark:text-uaeGold">3 years</strong> of combined hands-on experience building production marketplace, e-commerce, ERP/POS, and business communication platforms for the UAE and GCC markets.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-uaeNavy dark:bg-uaeGold text-white dark:text-uaeNavy font-bold text-sm shadow-navy-glow dark:shadow-gold-glow hover:opacity-95 transition-all"
              >
                <span>Explore Featured Projects</span>
                <FiArrowUpRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href={cvPDF}
                download="Muhammad_Farhan_Resume_UAE.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-uaeGold text-uaeNavy dark:text-white font-bold text-sm bg-uaeGold/10 hover:bg-uaeGold hover:text-uaeNavy dark:hover:text-uaeNavy transition-all"
              >
                <FaDownload className="w-3.5 h-3.5 text-uaeGold group-hover:text-uaeNavy" />
                <span>Download Resume (PDF)</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-gray-700 dark:text-gray-300 font-semibold text-sm hover:text-uaeGold transition-colors"
              >
                <span>Let's Talk</span>
                <span className="text-xs">💬</span>
              </motion.a>
            </div>

            {/* Social Links & LeetCode */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Connect:</span>
              {[
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/shaminfarhan", label: "LinkedIn" },
                { icon: <FaGithub />, href: "https://github.com/farhanparru", label: "GitHub" },
                { icon: <FaCode />, href: "https://leetcode.com/u/shaminmuhammad116", label: "LeetCode" },
                { icon: <FaEnvelope />, href: "mailto:farhan.dev24@gmail.com", label: "Email" },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-uaeGold hover:border-uaeGold dark:hover:text-uaeGold dark:hover:border-uaeGold transition-all shadow-sm"
                  title={item.label}
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Avatar & Floating Tech Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-64 sm:w-80 md:w-96 aspect-square">
              {/* Outer Golden Aura Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-uaeNavy via-uaeGold to-amber-200 animate-spin" style={{ animationDuration: '20s' }} />
              
              {/* Inner Frame */}
              <div className="absolute inset-[4px] rounded-full bg-uaeSand dark:bg-darkBg overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Muhammad Shamin Farhan"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Technology Badges */}
              {floatingBadges.map((badge, idx) => (
                <motion.div
                  key={idx}
                  className={`absolute ${badge.pos} glass-card px-2.5 sm:px-3.5 py-1 sm:py-2 rounded-xl shadow-lg flex items-center gap-1.5 sm:gap-2 border border-white/40 dark:border-gray-700 text-[10px] sm:text-xs font-bold text-uaeNavy dark:text-white`}
                  animate={{
                    y: idx % 2 === 0 ? [-6, 6, -6] : [6, -6, 6],
                  }}
                  transition={{
                    duration: 4 + idx,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-sm sm:text-base">{badge.icon}</span>
                  <span>{badge.name}</span>
                </motion.div>
              ))}

              {/* Bottom Developer Role Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-uaeNavy dark:bg-darkCard text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-xl border border-uaeGold/40 flex items-center gap-1.5 sm:gap-2 max-w-[92vw] justify-center"
              >
                <FiCheckCircle className="text-uaeGold w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wide truncate">
                  Full-Stack Developer @ Smart Supply Portal Est.
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Highlight Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-3.5 sm:p-5 rounded-2xl border border-uaeGold/20 text-center hover:border-uaeGold transition-all duration-300 group"
            >
              <div className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-uaeNavy dark:text-uaeGold group-hover:scale-105 transition-transform mb-1">
                {stat.value}
              </div>
              <div className="font-bold text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1">
                {stat.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;