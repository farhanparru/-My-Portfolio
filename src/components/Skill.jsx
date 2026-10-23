import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaFigma,
  FaStripe,
  FaBootstrap,
  FaRobot,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiRedis,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiElectron,
  SiNginx,
  SiDigitalocean,
  SiSentry,
  SiGoogleanalytics,
  SiGraphql,
  SiExpo,
} from "react-icons/si";
import { FiCheck, FiCpu, FiServer, FiDatabase, FiCloud, FiCreditCard, FiTool, FiGlobe, FiSmartphone } from "react-icons/fi";

const Skill = () => {
  const [activeTab, setActiveTab] = useState("all");

  const skillGroups = [
    {
      id: "ai",
      title: "AI & Machine Vision",
      icon: <FaRobot className="text-purple-400" />,
      description: "Google Gemini API integrations, photo scanning, and image-based data extraction.",
      skills: [
        { name: "Google Gemini 2.5 Flash", icon: <FiCpu className="text-purple-400" />, level: "Production", desc: "Watch photo scanning in TradeAuct with automatic fallback" },
        { name: "Gemini AI Shopping Assistant", icon: <FiCpu className="text-pink-400" />, level: "In Progress", desc: "Conversational shopping guidance & catalog grounding" },
        { name: "Image-Based Data Extraction", icon: <FiCheck className="text-emerald-400" />, level: "Production", desc: "Extract brand, model, reference, dial, condition, accessories" },
        { name: "Virtual Watch Try-On Studio", icon: <FiTool className="text-uaeGold" />, level: "Built", desc: "ISO ID-1 card pixels-per-mm calibration & sizing engine" },
      ],
    },
    {
      id: "mobile",
      title: "Mobile Development",
      icon: <FiSmartphone className="text-sky-400" />,
      description: "Production cross-platform mobile apps for iOS and Android with Expo and TypeScript.",
      skills: [
        { name: "React Native", icon: <FaReact className="text-sky-400" />, level: "Production", desc: "Montres luxury watch mobile app for iOS & Android" },
        { name: "Expo & Expo Router", icon: <SiExpo className="text-white" />, level: "Production", desc: "File-based routing, deep linking, native modules" },
        { name: "Gestures & Animations", icon: <FiTool className="text-amber-400" />, level: "Advanced", desc: "PanResponder, Animated API for true-to-size try-on" },
        { name: "Expo getPendingResultAsync", icon: <FiCheck className="text-emerald-400" />, level: "Advanced", desc: "Android lifecycle crash recovery during high-res capture" },
        { name: "Find My Watch Sizing Engine", icon: <FiCpu className="text-purple-400" />, level: "Built", desc: "Case-to-wrist coverage: Compact, Balanced, Bold" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: <FiCpu className="text-uaeGold" />,
      description: "Modern declarative UI, reactive state architectures, and responsive web systems.",
      skills: [
        { name: "React.js", icon: <FaReact className="text-sky-400" />, level: "Expert", desc: "Hooks, Virtual DOM, Component Architecture" },
        { name: "Next.js (SSR / SSG)", icon: <SiNextdotjs className="text-black dark:text-white" />, level: "Expert", desc: "SSR, SSG, Server Actions, Dynamic Routing" },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: "Advanced", desc: "Type safety, Generics, Interfaces, Strict Mode" },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-amber-400" />, level: "Expert", desc: "Async/Await, Closures, Event Loop, High Performance" },
        { name: "Redux Toolkit & PWA", icon: <SiRedux className="text-purple-500" />, level: "Advanced", desc: "Global state, RTK Query, Offline Service Workers" },
        { name: "Tailwind CSS & CSS3", icon: <SiTailwindcss className="text-teal-400" />, level: "Expert", desc: "Custom design systems, Responsive layouts, Flexbox/Grid" },
        { name: "Bootstrap & Responsive UI", icon: <FaBootstrap className="text-indigo-500" />, level: "Advanced", desc: "Figma-to-code pixel-perfect implementation" },
      ],
    },
    {
      id: "backend",
      title: "Backend & Systems Design",
      icon: <FiServer className="text-emerald-500" />,
      description: "Robust RESTful APIs, high-throughput microservices, and secure authentication.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-emerald-500" />, level: "Expert", desc: "Event-driven runtime, Streams, Concurrency" },
        { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" />, level: "Expert", desc: "Routing, Middleware pipelines, Error normalization" },
        { name: "REST API Design", icon: <SiPostman className="text-orange-500" />, level: "Expert", desc: "Scalable endpoint design, Versioning, Swagger / Postman" },
        { name: "Prisma ORM", icon: <SiPrisma className="text-teal-500" />, level: "Advanced", desc: "Schema modeling, Migrations, Type-safe database queries" },
        { name: "Auth & OAuth 2.0", icon: <FiServer className="text-yellow-500" />, level: "Expert", desc: "JWT, Google OAuth 2.0, Session Security" },
        { name: "UAE PASS Authentication", icon: <FiCheck className="text-emerald-400" />, level: "Production", desc: "UAE National Digital ID & KYC integration" },
        { name: "WebSockets & WebRTC", icon: <FiCpu className="text-purple-400" />, level: "Advanced", desc: "Real-time bidirectional telecom & live auction bidding" },
      ],
    },
    {
      id: "database",
      title: "Databases & Background Queues",
      icon: <FiDatabase className="text-sky-500" />,
      description: "Relational and document storage schemas with distributed caching and message queues.",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" />, level: "Expert", desc: "ACID transactions, Schema design, RDS Managed Instances" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: "Expert", desc: "Aggregation Framework, Document modeling, Atlas" },
        { name: "Redis", icon: <SiRedis className="text-red-500" />, level: "Advanced", desc: "In-memory caching, Pub/Sub, Session store" },
        { name: "BullMQ (Background Jobs)", icon: <SiRedis className="text-amber-500" />, level: "Advanced", desc: "Asynchronous background job queues & workers" },
        { name: "Prisma Schema Design", icon: <SiPrisma className="text-teal-400" />, level: "Advanced", desc: "Relational schema architecture & migrations" },
      ],
    },
    {
      id: "cloud",
      title: "Cloud Infrastructure & Deployment",
      icon: <FiCloud className="text-amber-500" />,
      description: "Cloud hosting, continuous delivery, reverse proxies, and server maintenance.",
      skills: [
        { name: "AWS EC2", icon: <FaAws className="text-amber-500" />, level: "Production", desc: "Linux compute instances, Nginx reverse proxy, Security Groups" },
        { name: "AWS S3", icon: <FaAws className="text-amber-500" />, level: "Production", desc: "Cloud object storage, Media bucket policies & CDN" },
        { name: "AWS RDS PostgreSQL", icon: <FaAws className="text-amber-500" />, level: "Production", desc: "Managed cloud databases, Automated backups & replicas" },
        { name: "Nginx Reverse Proxy", icon: <SiNginx className="text-emerald-500" />, level: "Advanced", desc: "SSL termination, Load balancing, Reverse proxy routing" },
        { name: "DigitalOcean & Vercel", icon: <SiDigitalocean className="text-blue-400" />, level: "Production", desc: "Droplets, DNS management, Edge serverless deployments" },
      ],
    },
    {
      id: "integrations",
      title: "Payments, Logistics & APIs",
      icon: <FiCreditCard className="text-uaeGold" />,
      description: "Enterprise payment gateways, GCC courier APIs, and marketplace integrations.",
      skills: [
        { name: "Stripe Payment Architecture", icon: <FaStripe className="text-indigo-400" />, level: "Expert", desc: "Checkout, Escrow holding/release, Seller payouts, Wallets" },
        { name: "Tamara & Tabby (BNPL)", icon: <FiCreditCard className="text-pink-500" />, level: "Production", desc: "GCC Buy-Now-Pay-Later payment gateway integrations" },
        { name: "DHL Courier API", icon: <FiTool className="text-yellow-500" />, level: "Production", desc: "Worldwide automated label generation & tracking" },
        { name: "Mawgood & Trend Delivery", icon: <FiTool className="text-blue-500" />, level: "Production", desc: "UAE & GCC regional delivery network APIs" },
        { name: "eBay API Integration", icon: <FiTool className="text-blue-400" />, level: "Production", desc: "Automated seller product data retrieval & catalog sync" },
        { name: "MaxMind GeoIP", icon: <FiGlobe className="text-blue-400" />, level: "Production", desc: "Country detection & location-aware checkout defaults" },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-500" />, level: "Basic Hands-On", desc: "Basic hands-on querying & data retrieval" },
      ],
    },
    {
      id: "tools",
      title: "Testing, Analytics & Modern Tools",
      icon: <FiTool className="text-purple-400" />,
      description: "Testing frameworks, production telemetry, analytics, and desktop ERP.",
      skills: [
        { name: "Node.js Test Runner", icon: <FiCheck className="text-emerald-400" />, level: "Advanced", desc: "46 passing unit tests for mobile app & sizing engine" },
        { name: "Playwright & Sentry", icon: <SiSentry className="text-red-400" />, level: "Advanced", desc: "Automated end-to-end testing & production error telemetry" },
        { name: "GA4 Enhanced E-Commerce", icon: <SiGoogleanalytics className="text-amber-500" />, level: "Expert", desc: "E-commerce funnel analytics, Tag Manager, conversion visibility" },
        { name: "Meta Pixel & Conversions API", icon: <FiCheck className="text-blue-500" />, level: "Expert", desc: "Server-side tracking & pixel event deduplication" },
        { name: "Google Merchant & SEO", icon: <FiGlobe className="text-emerald-400" />, level: "Advanced", desc: "Product feed sync & multilingual (Arabic/En) SEO" },
        { name: "Electron.js & PWA ERP", icon: <SiElectron className="text-teal-400" />, level: "Advanced", desc: "Cross-platform desktop POS & receipt printer hardware" },
        { name: "Git, GitHub & GitLab", icon: <FaGitAlt className="text-orange-500" />, level: "Expert", desc: "Version control, Branching strategies, CI/CD" },
        { name: "Figma & Canva", icon: <FaFigma className="text-pink-400" />, level: "Advanced", desc: "UI/UX wireframing, Prototyping, Visual asset creation" },
      ],
    },
  ];

  const displayedGroups =
    activeTab === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.id === activeTab);

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-darkBg/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-uaeGold/10 border border-uaeGold/30 text-uaeGold text-xs font-bold uppercase tracking-wider mb-3">
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-uaeNavy dark:text-white tracking-tight">
            Core Technical <span className="text-uaeGold">Skills & Expertise</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            A comprehensive overview of the technologies, cloud infrastructure, payment gateways, and tools I use to build mission-critical enterprise systems.
          </p>
        </motion.div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "all"
                ? "bg-uaeGold text-uaeNavy shadow-gold-glow"
                : "bg-white dark:bg-darkCard text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            All Disciplines
          </button>
          {skillGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === group.id
                  ? "bg-uaeGold text-uaeNavy shadow-gold-glow"
                  : "bg-white dark:bg-darkCard text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <span>{group.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedGroups.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-4 sm:p-6 rounded-2xl border border-gray-200/80 dark:border-gray-800 hover:border-uaeGold transition-all duration-300 shadow-sm hover:shadow-gold-glow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-uaeNavy dark:bg-darkAccent text-xl">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-uaeNavy dark:text-white">
                      {group.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mt-5">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-gray-50/80 dark:bg-darkCard/60 border border-gray-100 dark:border-gray-800 hover:border-uaeGold/40 transition-colors flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="text-xl flex-shrink-0">{skill.icon}</div>
                        <div className="min-w-0">
                          <div className="font-bold text-xs sm:text-sm text-gray-800 dark:text-gray-200 truncate">
                            {skill.name}
                          </div>
                          {skill.desc && (
                            <div className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
                              {skill.desc}
                            </div>
                          )}
                        </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-uaeGold/10 text-uaeGold flex-shrink-0">
                        {skill.level}
                      </span>
                    </div>
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

export default Skill;
