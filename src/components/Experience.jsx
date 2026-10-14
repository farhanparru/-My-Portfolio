import React from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiMapPin,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      role: "Full-Stack JavaScript Developer",
      company: "Smart Supply Portal Est.",
      location: "Sharjah, UAE",
      type: "Full-Time",
      period: "Oct 2025 – Present",
      isCurrent: true,
      description:
        "Develop full-stack features for a UAE-focused business discovery and B2B sourcing platform across frontend, backend, and database layers.",
      highlights: [
        "Build and deploy client-facing production platforms, including TradeAuct's marketplace ecosystem and luxury e-commerce brand platforms.",
        "Designed backend APIs, database architecture, authentication, and admin tooling for platform data management; debugged and resolved backend and database issues through root-cause analysis to maintain reliability.",
        "Debug production issues, support deployment, and maintain live platforms across AWS EC2, S3, RDS PostgreSQL, and Redis/BullMQ.",
      ],
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Prisma ORM",
        "Redis",
        "BullMQ",
        "Stripe",
        "AWS EC2/S3/RDS",
        "UAE PASS",
        "AI Vision Scanner",
      ],
    },
    {
      role: "Software Developer",
      company: "TechnoMagic Solutions (Cloud Qlobe)",
      location: "Telecom / VoIP",
      type: "Part-Time",
      period: "Jan 2025 – Jun 2025",
      isCurrent: false,
      description:
        "Developed and maintained full-stack features for Cloud Qlobe, a cloud telephony and business communication platform for corporate clients.",
      highlights: [
        "Built full-stack features using React.js, TypeScript, Node.js, and MongoDB.",
        "Implemented WebRTC-based real-time voice/video communication functionality and integrated third-party APIs.",
        "Troubleshot platform reliability issues, resolving API failures and backend errors reported in production.",
      ],
      skills: ["React.js", "TypeScript", "Node.js", "MongoDB", "WebRTC", "WebSockets", "VoIP APIs"],
    },
    {
      role: "Full-Stack Developer",
      company: "TYEM Ventures Pvt Ltd",
      location: "Full-Time",
      type: "Full-Time",
      period: "Jul 2024 – Dec 2024",
      isCurrent: false,
      description:
        "Developed a cross-platform Electron.js ERP/POS billing application with online/offline operation and real-time processing.",
      highlights: [
        "Developed a cross-platform Electron.js ERP/POS billing application with online/offline operation.",
        "Integrated receipt-printer hardware, WhatsApp Catalog, and webhook-based order processing.",
        "Built custom XpressBot integration to process online orders in real time, along with order and delivery assignment workflows.",
      ],
      skills: ["Electron.js", "Node.js", "WebSockets", "Hardware POS", "WhatsApp Catalog", "Webhooks", "MongoDB"],
    },
    {
      role: "Freelance Infrastructure Project",
      company: "Sevenscape",
      location: "Dubai & Sharjah, UAE",
      type: "Infrastructure Delivery",
      period: "Infrastructure Delivery",
      isCurrent: false,
      description:
        "Delivered an FTTH fiber deployment across Dubai and Sharjah, enabling high-speed connectivity for residential and commercial complexes.",
      highlights: [
        "Enabled high-speed internet for 5,000+ units across Dubai and Sharjah.",
        "Coordinated 10+ vendor/client relationships, delivering the project 15% under budget.",
      ],
      skills: ["FTTH Infrastructure", "Vendor Coordination", "Project Delivery", "Budget Optimization"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-darkBg/60 transition-colors duration-300">
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
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-uaeNavy dark:text-white tracking-tight">
            Professional <span className="text-uaeGold">Experience</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Proven track record in full-stack JavaScript development, building production marketplaces, luxury e-commerce, ERP/POS, and business communication platforms across the UAE & GCC.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-uaeGold/30 dark:border-uaeGold/20 ml-2 sm:ml-4 md:ml-8 pl-4 sm:pl-6 md:pl-10 space-y-8 sm:space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div
                className={`absolute -left-[27px] sm:-left-[35px] md:-left-[51px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-4 ${
                  exp.isCurrent
                    ? "bg-uaeGold border-uaeNavy dark:border-white shadow-gold-glow animate-pulse"
                    : "bg-white dark:bg-gray-800 border-uaeGold"
                } flex items-center justify-center`}
              />

              {/* Main Card */}
              <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-200/80 dark:border-gray-800 hover:border-uaeGold transition-all duration-300 shadow-sm hover:shadow-gold-glow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display font-bold text-xl md:text-2xl text-uaeNavy dark:text-white">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                          Present Role
                        </span>
                      )}
                    </div>
                    <div className="text-base font-semibold text-uaeGold mt-0.5 flex items-center gap-2">
                      <FiBriefcase className="w-4 h-4 text-uaeGold" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                      <FiCalendar className="text-uaeGold" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                      <FiMapPin className="text-uaeRed" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <FiCheckCircle className="w-4 h-4 text-uaeGold flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 bg-uaeGold/10 dark:bg-uaeGold/15 text-uaeNavy dark:text-uaeGold font-semibold text-xs rounded-lg border border-uaeGold/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
