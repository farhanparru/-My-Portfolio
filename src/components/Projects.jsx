import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiCheck,
  FiX,
  FiMonitor,
  FiSettings,
} from "react-icons/fi";

// Existing Images
import sevensc from "../assets/image sevenss.png";
import technomagic from "../assets/technomagix.png";
import emirates from "../assets/emiratesGold.png";
import cloud from "../assets/cloudQlobeuu.png";
import zealTours from "../assets/zealTourisamAGne.png";
import everestTraders from "../assets/everset.png";
import aliyaSchool from "../assets/school.png";
import montres from "../assets/montres-ecommrece.png";

// Real High-Quality Project Images & Admin Dashboards
import tradeauctImg from "../assets/tradeauct.jpg";
import monteroImg from "../assets/monterowatch.png";
import monteroAdminImg from "../assets/montero_admin.png";
import demarqueeImg from "../assets/demarqueewatch.png";
import demarqueeAdminImg from "../assets/demarquee_admin.png";
import montresAdminImg from "../assets/montres_admin.png";
import posErpImg from "../assets/poserp.jpg";

// Comprehensive Project Data containing ALL current projects + ALL resume projects
const projectsData = [
  {
    id: 1,
    title: "TradeAuct — Luxury Marketplace & Live Auction Platform",
    shortTitle: "TradeAuct Luxury Marketplace",
    category: "Flagship & Marketplace",
    isFlagship: true,
    badge: "Flagship Production System",
    description:
      "A comprehensive multi-application marketplace and live auction ecosystem for luxury watches and collectibles. Features real-time bidding, Stripe-based seller wallets and escrow, UAE PASS authentication, eBay API product synchronization, Google Gemini 2.5 Flash watch photo scanning, and GCC/global shipping logistics.",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Stripe",
      "AWS EC2/S3/RDS",
      "Gemini 2.5 Flash",
      "UAE PASS",
      "MaxMind GeoIP",
      "Figma",
    ],
    image: tradeauctImg,
    github: {
      buyer: "https://github.com/farhanparru",
      seller: "https://github.com/farhanparru",
      backend: "https://github.com/farhanparru",
      admin: "https://github.com/farhanparru",
    },
    live: "https://tradeauct.com/",
    additionalLinks: [
      { label: "Seller Portal", url: "https://seller.tradeauct.com/" },
      { label: "Live Auctions", url: "https://tradeauct.com/" },
    ],
    features: [
      "Designed and built a multi-application marketplace ecosystem — buyer marketplace, seller dashboard, and centralized backend API — supporting international and GCC operations, with UI/UX designed in Figma (Canva for visual assets).",
      "Implemented the admin management platform for marketplace operations, including product/listing, seller, order, auction, customer, and platform-management workflows.",
      "Built seller onboarding, listing management, and a real-time bidding/auction engine with bid validation, reserve pricing, and full auction lifecycle management.",
      "Designed Stripe-based payment architecture (checkout, payment holding/release, seller payouts, commissions, refunds) and a seller wallet system for earnings and withdrawals.",
      "Implemented UAE PASS authentication and eBay API integration for seller product data retrieval, supporting marketplace listing workflows.",
      "Integrated Google Gemini API (Gemini 2.5 Flash with automatic model fallback) to scan watch photos in the seller listing flow, extracting brand, model, reference number, dial, condition, and accessories to reduce manual data entry.",
      "Integrated Mawgood (GCC), Trend (local UAE), and DHL (worldwide) shipping/courier APIs, and implemented MaxMind GeoIP-based IP geolocation for country detection and location-aware checkout defaults.",
      "Deployed the platform on AWS EC2 with Nginx reverse proxy, S3 storage, and RDS PostgreSQL, using Redis/BullMQ for background job processing; monitored and resolved production deployment and server configuration issues.",
    ],
  },
  {
    id: 2,
    title: "Montero Watch — Luxury Watch Brand E-Commerce Platform",
    shortTitle: "Montero Watch UAE",
    category: "Luxury E-Commerce",
    isFlagship: true,
    badge: "Storefront & Admin Ecosystem",
    description:
      "A world-class luxury watch brand e-commerce platform inspired by global peaks. Built on a MongoDB backend with bilingual (Arabic/English) storefront, dedicated operations admin panel, DHL courier workflows, and an advanced NFC tap-to-verify digital authenticity certification system holding 420+ registered customers and 90+ orders across Montero & Demarquee.",
    tags: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "NFC Verification",
      "Admin Dashboard",
      "Bilingual (Ar/En)",
      "DHL API",
      "GA4 / Meta CAPI",
      "Tailwind CSS",
    ],
    image: monteroImg,
    adminImage: monteroAdminImg,
    adminLive: "https://admin.monterowatch.com/",
    github: {
      frontend: "https://github.com/farhanparru",
      backend: "https://github.com/farhanparru",
      admin: "https://github.com/farhanparru",
    },
    live: "https://www.monterowatch.com/en",
    additionalLinks: [
      { label: "Storefront (Live)", url: "https://www.monterowatch.com/en" },
      { label: "Admin Portal", url: "https://admin.monterowatch.com/" },
    ],
    features: [
      "Built independent, bilingual (Arabic/English) e-commerce platform for luxury watch brand on a MongoDB backend, with its own frontend, backend, and admin panel for inventory, product, and order management.",
      "Implemented dedicated admin systems for both brands; the platforms now hold 420+ registered customers and 90+ orders.",
      "Implemented an advanced NFC-based digital watch verification system — programming NFC cards with unique verification URLs linked to dedicated authenticity pages, enabling customers to tap-to-verify a watch's authenticity directly from their phone.",
      "Integrated DHL courier workflows for order fulfillment and automated shipping APIs.",
      "Configured Google Search Console and implemented GA4, Google Tag Manager, and Meta Pixel for SEO monitoring, analytics, and conversion visibility.",
    ],
  },
  {
    id: 3,
    title: "Demarquee Watch — Luxury Watch Brand E-Commerce Platform",
    shortTitle: "Demarquee Watch UAE",
    category: "Luxury E-Commerce",
    isFlagship: true,
    badge: "Storefront & Admin Ecosystem",
    description:
      "A bespoke luxury timepiece e-commerce platform celebrating fine watchmaking. Built on MongoDB with bilingual (Arabic/English) heritage collection showcases, dedicated operations admin panel with NFC watch tracking, and CRM-related customer management workflows.",
    tags: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "NFC Verification",
      "CRM Workflows",
      "Admin Analytics",
      "Bilingual (Ar/En)",
      "GA4 / Meta CAPI",
      "Tailwind CSS",
    ],
    image: demarqueeImg,
    adminImage: demarqueeAdminImg,
    adminLive: "https://admin.demarqueewatch.com/",
    github: {
      backend: "https://github.com/farhanparru",
      admin: "https://github.com/farhanparru",
    },
    live: "https://www.demarqueewatch.com/en",
    additionalLinks: [
      { label: "Storefront (Live)", url: "https://www.demarqueewatch.com/en" },
      { label: "Admin Portal", url: "https://admin.demarqueewatch.com/" },
    ],
    features: [
      "Built independent, bilingual (Arabic/English) luxury watch storefront on a MongoDB backend with custom inventory and order management.",
      "Implemented dedicated admin system with real-time customer metrics, active warranty tracking, and NFC watch source charts.",
      "Implemented advanced NFC-based digital watch verification system enabling tap-to-verify authentication on mobile devices.",
      "Integrated CRM-related customer management workflows and repair desk tracking.",
      "Configured Google Search Console, GA4 enhanced e-commerce tracking, and Meta Pixel / Conversions API (CAPI) for comprehensive analytics.",
    ],
  },
  {
    id: 4,
    title: "Montres.ae — E-Commerce & Admin Management Platform",
    shortTitle: "Montres.ae Luxury Store",
    category: "Luxury E-Commerce",
    isFlagship: true,
    badge: "Storefront & Admin Ecosystem",
    description:
      "E-commerce and administration platform for a multi-category luxury retailer of watches, pens, and accessories. Features multi-currency support for 1,100+ active products, 225 registered customers, 100+ orders to date, Tamara & Tabby BNPL, Stripe payments, and a full operations admin dashboard.",
    tags: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Admin Dashboard",
      "Tamara BNPL",
      "Tabby BNPL",
      "Stripe",
      "GA4 / Meta CAPI",
      "Google Merchant",
      "Tailwind CSS",
      "SEO",
    ],
    image: montres,
    adminImage: montresAdminImg,
    adminLive: "https://admin.montres.ae/dashboard",
    github: {
      frontend: "https://github.com/MontresTeam/montersE-commerce-next.git",
      backend: "https://github.com/MontresTeam/Montres-Ecommerce-Backend.git",
    },
    live: "https://www.montres.ae/",
    additionalLinks: [
      { label: "Storefront (Live)", url: "https://www.montres.ae/" },
      { label: "Admin Portal", url: "https://admin.montres.ae/dashboard" },
    ],
    features: [
      "Built a full customer-facing e-commerce storefront with multi-currency support for 1,100+ active products (watches, pens, accessories); 225 registered customers and 100+ orders to date.",
      "Implemented the full admin management platform for product/catalog, inventory, orders, customers, shipping, and store operations — including full product CRUD functionality.",
      "Built admin email/campaign management and shipping and courier management for order fulfillment.",
      "Integrated Tamara, Tabby, and Stripe payment gateways for flexible buy-now-pay-later and card payment options.",
      "Implemented Meta Pixel and Meta Conversions API (CAPI) with event deduplication, GA4 enhanced e-commerce tracking, Google Tag Manager, and Google Merchant Center for product feed and shopping visibility; optimized site performance and SEO.",
    ],
  },
  {
    id: 101,
    title: "Montres Mobile App (React Native, iOS & Android) — Built",
    shortTitle: "Montres Mobile App (iOS & Android)",
    category: "Mobile & AI Innovation",
    isFlagship: true,
    badge: "Built · Release Pending",
    description:
      "A production-ready luxury watch mobile app for iOS and Android built with React Native, Expo Router, and TypeScript. Features a Virtual Watch Try-On studio with ISO ID-1 card true-to-size calibration, 'Find My Watch' wrist-width coverage sizing engine, lifecycle recovery for camera capture, and 46 passing unit tests.",
    tags: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "Virtual Try-On",
      "ISO ID-1 Calibration",
      "PanResponder Gestures",
      "Node.js Test Runner",
      "iOS & Android",
    ],
    image: montres,
    github: {
      repo: "https://github.com/farhanparru",
    },
    live: "https://www.montres.ae/",
    additionalLinks: [
      { label: "Montres Storefront", url: "https://www.montres.ae/" },
    ],
    features: [
      "Built the Montres luxury watch mobile app for iOS and Android (React Native, Expo Router, TypeScript). Try-On and Find My Watch are built; testing, validation, and fixes, then Play Store and App Store release, are pending.",
      "Built a Virtual Watch Try-On studio: wrist-photo preview scaled true-to-size via ISO ID-1 card calibration (pixels-per-millimeter), with multi-touch gestures (PanResponder, Animated API) and in-studio checkout.",
      "Fixed Android low-memory crashes during high-resolution camera capture using Expo getPendingResultAsync lifecycle recovery.",
      "Built a 'Find My Watch' sizing engine using case-to-wrist-width coverage to recommend Compact (<58%), Balanced (58-74%) or Bold (75-85%) fits, with deep links into try-on and checkout.",
      "Wrote 46 passing unit tests (Node.js Test Runner); zero TypeScript errors; iOS safe areas, Android back-button on 16 modals.",
    ],
  },
  {
    id: 102,
    title: "AI Shopping Assistant (Google Gemini API) — In Progress",
    shortTitle: "Gemini AI Shopping Assistant",
    category: "Mobile & AI Innovation",
    isFlagship: true,
    badge: "In Progress · Gemini API",
    description:
      "An intelligent conversational shopping assistant powered by the Google Gemini API for luxury e-commerce product discovery and shopping guidance. Features natural language intent recognition, catalog grounding, and guided checkout flow.",
    tags: [
      "Google Gemini API",
      "Generative AI",
      "Product Discovery",
      "Catalog Grounding",
      "Conversational Flow",
      "Next.js",
      "Node.js",
    ],
    image: tradeauctImg,
    live: "https://tradeauct.com/",
    features: [
      "Developing an AI shopping assistant with the Google Gemini API for product discovery and shopping guidance.",
      "Ongoing: Google Gemini API integration for product discovery and conversational intent understanding.",
      "Planned: product catalog grounding, conversational shopping flow, and storefront integration.",
      "Tailored for luxury product exploration across watches, pens, and fine jewelry.",
    ],
  },
  {
    id: 5,
    title: "POS ERP Billing Software — TYEM Ventures",
    shortTitle: "POS ERP Billing Software",
    category: "ERP & Systems",
    isFlagship: true,
    badge: "Hardware & Offline POS",
    description:
      "A cross-platform ERP/POS billing desktop application built using Electron.js and PWA technology supporting online/offline operation, real-time WebSockets synchronization, thermal receipt printer hardware integration, and WhatsApp Catalog order ingestion via XpressBot.",
    tags: [
      "Electron.js",
      "PWA",
      "Node.js",
      "WebSockets",
      "Hardware POS",
      "WhatsApp Catalog",
      "XpressBot Webhooks",
      "MongoDB",
      "Offline Sync",
    ],
    image: posErpImg,
    github: {
      backend: "https://github.com/farhanparru",
      posApp: "https://github.com/farhanparru",
    },
    live: "https://github.com/farhanparru",
    features: [
      "Built and maintained a cross-platform ERP/POS billing application using Electron.js and PWA technology, with online/offline operation.",
      "Integrated receipt-printer hardware, WhatsApp Catalog, and webhook-based order processing.",
      "Integrated custom XpressBot integration to process online orders in real time; built order and delivery assignment workflows.",
      "Full order management, table management for restaurant clients, and delivery driver assignment workflows.",
    ],
  },
  {
    id: 6,
    title: "Cloud Qlobe — Cloud Telephony & Communication Platform",
    shortTitle: "Cloud Qlobe Telecom",
    category: "Real-Time & Telecom",
    badge: "Telecom & WebRTC",
    description:
      "Enterprise-grade cloud telephony and business communication platform for corporate clients offering global connectivity, real-time WebRTC voice/video communications, network topology monitoring, and multi-carrier billing solutions.",
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "WebRTC",
      "WebSockets",
      "VoIP",
      "AWS",
      "Tailwind CSS",
    ],
    image: cloud,
    github: {
      frontend: "https://github.com/cloudqlobe/CloudQlobe-Frondent.git",
      backend: "https://github.com/cloudqlobe/CloudQlobe-Backend.git",
    },
    live: "https://www.cloudqlobe.com/",
    features: [
      "Built full-stack features using React.js, TypeScript, Node.js, and MongoDB.",
      "Implemented WebRTC-based real-time voice/video communication functionality and integrated third-party APIs to support platform features and data workflows.",
      "Troubleshot platform reliability issues, resolving API failures and backend errors reported in production.",
    ],
  },
  {
    id: 7,
    title: "Sevenscape General Contracting & Facility Management",
    shortTitle: "Sevenscape Facility Management",
    category: "Full Stack & Web",
    badge: "Corporate UAE Platform",
    description:
      "Official corporate portal and facility management platform for a premier UAE contracting company, featuring interactive service showcases, instant quotation requests, and a centralized management backend.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vercel",
      "Responsive UI",
    ],
    image: sevensc,
    github: {
      frontend: "https://github.com/farhanparru/SevenscapeGeneralContracting-LLC.git",
      backend: "https://github.com/farhanparru/SevenscapeGeneralContracting-Backend.git",
    },
    live: "https://www.sevenscape.ae/",
    features: [
      "Comprehensive service portfolio showcasing MEP, contracting, and facility maintenance.",
      "Custom quote estimation and client inquiry routing system.",
      "Optimized performance and lightning-fast loading speeds on Vercel edge deployment.",
    ],
  },
  {
    id: 8,
    title: "Emirates Gold DMCC",
    shortTitle: "Emirates Gold DMCC",
    category: "Full Stack & Web",
    badge: "Commodities & Trading",
    description:
      "A premium gold trading platform featuring real-time precious metals market data visualization, secure user authentication, interactive price charts, and responsive trading dashboards.",
    tags: [
      "React.js",
      "Framer Motion",
      "Tailwind CSS",
      "Firebase",
      "Chart.js",
      "Vercel",
      "Real-Time Data",
    ],
    image: emirates,
    github: "https://github.com/farhanparru/EmiratesGoldKSD.git",
    live: "https://emirates-gold-ksd-aflw.vercel.app/",
    features: [
      "Interactive live gold price tracking and historical price trend charts.",
      "Responsive trading dashboard with high-security authentication.",
      "Clean luxury gold-themed visual identity tailored for DMCC standards.",
    ],
  },
  {
    id: 9,
    title: "TechnoMagic Solutions India Pvt Ltd",
    shortTitle: "TechnoMagic Solutions",
    category: "Full Stack & Web",
    badge: "IT Solutions Portal",
    description:
      "Official corporate website for an IT solutions and enterprise software provider featuring interactive technology demonstrations, client portals, and fluid GSAP/Framer Motion animations.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "GSAP", "UI/UX Design"],
    image: technomagic,
    github: "https://github.com/cloudqlobe/Technofrontend.git",
    live: "https://www.technomagicsolutions.info/",
    features: [
      "Engaging interactive tech demonstrations with high-performance animations.",
      "Dynamic service catalog showcasing VoIP, Cloud, and Software services.",
      "Fully responsive cross-device layout.",
    ],
  },
  {
    id: 10,
    title: "Zeal Tours and Travels",
    shortTitle: "Zeal Tours Agency",
    category: "Full Stack & Web",
    badge: "Travel & Booking Engine",
    description:
      "Comprehensive tourism and travel booking ecosystem with tour packages, dynamic booking system, role-based admin dashboard, payment gateway integrations, and automated email notifications.",
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Admin Panel",
      "Payment Gateway",
      "Responsive Design",
    ],
    image: zealTours,
    github: {
      frontend: "https://github.com/Sanjay9745/Zeal-Tourism.git",
      backend: "https://github.com/farhanparru/ZealTourisam-Backend.git",
      admin: "https://github.com/farhanparru/ZealTourisamAdmin.git",
    },
    live: "https://admin-gules-five.vercel.app/",
    features: [
      "Full tour package catalog with real-time availability and seat booking.",
      "Role-based admin dashboard for booking management, customer tracking, and revenue analytics.",
      "Multi-payment gateway integration with automated invoicing.",
    ],
  },
  {
    id: 11,
    title: "Everest Traders Inc",
    shortTitle: "Everest Traders",
    category: "Full Stack & Web",
    badge: "Global B2B Portal",
    description:
      "International trading and commodities e-commerce platform featuring multi-language support (English, Arabic, Chinese), product catalogs, secure inquiry routing, and client authentication.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Vercel",
      "Multi-Language",
      "B2B Portal",
      "Responsive Design",
    ],
    image: everestTraders,
    github: {
      frontend: "https://github.com/farhanparru/EVERESTTRADERS.git",
    },
    live: "https://everesttraders.vercel.app/",
    features: [
      "Multilingual interface supporting international trade clients in English, Arabic, and Chinese.",
      "Advanced product catalog with dynamic filtering and specification sheets.",
      "Role-based user authentication and client inquiry management.",
    ],
  },
  {
    id: 12,
    title: "Aliya Senior Secondary School",
    shortTitle: "Aliya School",
    category: "Full Stack & Web",
    badge: "Educational Portal",
    description:
      "Official academic portal for Aliya Senior Secondary School featuring interactive admission management, academic program showcases, UAE-inspired visual aesthetics, and custom automated inquiry support.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "UAE Theme",
      "Interactive Gallery",
      "Vercel",
    ],
    image: aliyaSchool,
    github: {
      frontend: "https://github.com/farhanparru/Aliya-Senior-Secondary-School.git",
    },
    live: "https://shcool-project.vercel.app/",
    features: [
      "UAE-inspired color palette and modern school branding.",
      "Online student admission form with real-time validation.",
      "Interactive photo gallery and custom query chatbot assistance.",
    ],
  },
];

const Projects = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTabViews, setActiveTabViews] = useState({}); // { [projectId]: 'storefront' | 'admin' }

  const filterCategories = [
    "All",
    "Flagship & Marketplace",
    "Luxury E-Commerce",
    "Mobile & AI Innovation",
    "ERP & Systems",
    "Real-Time & Telecom",
    "Full Stack & Web",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const getPrimaryGithubUrl = (github) => {
    if (!github) return "https://github.com/farhanparru";
    if (typeof github === "string") return github;
    return github.frontend || github.buyer || github.backend || Object.values(github)[0];
  };

  const getProjectActiveImage = (project) => {
    const view = activeTabViews[project.id] || "storefront";
    if (view === "admin" && project.adminImage) {
      return project.adminImage;
    }
    return project.image;
  };

  const toggleProjectView = (projectId, view) => {
    setActiveTabViews((prev) => ({
      ...prev,
      [projectId]: view,
    }));
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-darkBg transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-uaeGold/10 border border-uaeGold/30 text-uaeGold text-xs font-bold uppercase tracking-wider mb-3">
            Production Portfolio ({projectsData.length} Projects)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-uaeNavy dark:text-white tracking-tight">
            Featured Systems & <span className="text-uaeGold">Production Platforms</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Engineered with modern architecture, luxury e-commerce standards, custom administrative dashboards, and cloud deployments across the UAE and GCC.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14">
          {filterCategories.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeFilter === cat
                  ? "bg-uaeGold text-uaeNavy shadow-gold-glow"
                  : "bg-gray-100 dark:bg-darkCard text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 border border-transparent"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const currentView = activeTabViews[project.id] || "storefront";
            const currentImg = getProjectActiveImage(project);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl overflow-hidden border border-gray-200/80 dark:border-gray-800 hover:border-uaeGold/60 transition-all duration-300 shadow-sm hover:shadow-card-hover flex flex-col group"
              >
                {/* Image Preview Container */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-950">
                  <img
                    src={currentImg}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-uaeNavyDark/90 via-uaeNavyDark/25 to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-uaeNavy/90 backdrop-blur-md border border-uaeGold/40 text-uaeGold text-[11px] font-bold tracking-wide shadow-md">
                      {project.badge || project.category}
                    </span>
                  </div>

                  {/* Direct Action Links */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                    <a
                      href={getPrimaryGithubUrl(project.github)}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-white/90 dark:bg-gray-900/90 text-uaeNavy dark:text-white hover:bg-uaeGold hover:text-uaeNavy transition-all shadow-md"
                      title="View Code on GitHub"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub className="w-3.5 h-3.5" />
                    </a>
                    {project.live && (
                      <a
                        href={currentView === "admin" && project.adminLive ? project.adminLive : project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-uaeGold text-uaeNavy hover:bg-white hover:text-uaeNavy transition-all shadow-md"
                        title={currentView === "admin" ? "Open Admin Panel" : "Visit Live Storefront"}
                        aria-label="Live Project Link"
                      >
                        <FiExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Dual View Toggle on Card if project has Admin Panel */}
                  {project.adminImage && (
                    <div className="absolute bottom-3 right-3 z-10 flex items-center bg-black/75 backdrop-blur-md p-0.5 rounded-lg border border-white/20 shadow-lg">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleProjectView(project.id, "storefront");
                        }}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold transition-all ${
                          currentView === "storefront"
                            ? "bg-uaeGold text-uaeNavy shadow-sm"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        <FiMonitor className="w-3 h-3" />
                        <span>Storefront</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleProjectView(project.id, "admin");
                        }}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold transition-all ${
                          currentView === "admin"
                            ? "bg-uaeGold text-uaeNavy shadow-sm"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        <FiSettings className="w-3 h-3" />
                        <span>Admin Panel</span>
                      </button>
                    </div>
                  )}

                  {/* Bottom Category Label */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[11px] font-semibold text-uaeGold uppercase tracking-wider block drop-shadow-sm">
                      {currentView === "admin" ? "Admin Operations Portal" : project.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-uaeNavy dark:text-white mb-2 group-hover:text-uaeGold transition-colors leading-snug">
                      {project.shortTitle || project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 4).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-darkAccent text-gray-700 dark:text-gray-300 text-[11px] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-uaeGold/10 text-uaeGold text-[11px] font-bold">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Actions Footer */}
                    <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-bold text-uaeNavy dark:text-uaeGold hover:underline flex items-center gap-1"
                      >
                        <span>View Architecture & Admin</span>
                        <span>→</span>
                      </button>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-uaeGold flex items-center gap-1"
                        >
                          <span>Live Site</span>
                          <FiExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Detail Modal with Storefront & Admin Highlights */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-darkCard rounded-2xl sm:rounded-3xl border border-uaeGold/30 max-w-4xl w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl p-4 sm:p-8 relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-uaeGold hover:text-uaeNavy transition-all"
                  aria-label="Close modal"
                >
                  <FiX className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="mb-6 pr-10">
                  <span className="px-3 py-1 rounded-full bg-uaeGold/15 text-uaeNavy dark:text-uaeGold text-xs font-bold uppercase tracking-wider inline-block mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-uaeNavy dark:text-white leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Project Visuals Showcase (Storefront & Admin) */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Storefront Interface
                      </span>
                      {selectedProject.live && (
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-bold text-uaeGold hover:underline flex items-center gap-1"
                        >
                          <span>Open Storefront</span>
                          <FiExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <div className="rounded-2xl overflow-hidden h-44 sm:h-64 bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-md">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Admin Panel Preview if available */}
                  {selectedProject.adminImage && (
                    <div>
                      <div className="flex items-center justify-between mb-2 mt-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-uaeGold">
                          Admin Operations & Analytics Dashboard
                        </span>
                        {selectedProject.adminLive && (
                          <a
                            href={selectedProject.adminLive}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-bold text-uaeGold hover:underline flex items-center gap-1"
                          >
                            <span>Open Admin Panel</span>
                            <FiExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <div className="rounded-2xl overflow-hidden h-44 sm:h-64 bg-gray-950 border border-uaeGold/30 shadow-md">
                        <img
                          src={selectedProject.adminImage}
                          alt={`${selectedProject.title} Admin Panel`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Full Description */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    System Overview
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features & Architecture Points */}
                {selectedProject.features && (
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-uaeGold mb-3">
                      Key Technical Deliverables & Architecture
                    </h4>
                    <div className="space-y-2.5">
                      {selectedProject.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                          <FiCheck className="w-4 h-4 text-uaeGold flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Complete Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Technologies & Integrations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-uaeGold/10 border border-uaeGold/30 text-uaeNavy dark:text-uaeGold text-xs font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links CTA */}
                <div className="pt-5 border-t border-gray-200 dark:border-gray-800 flex flex-wrap gap-3">
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-uaeGold text-uaeNavy font-bold text-xs shadow-gold-glow hover:opacity-90 transition-all"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>Live Storefront</span>
                    </a>
                  )}

                  {selectedProject.adminLive && (
                    <a
                      href={selectedProject.adminLive}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-uaeNavy text-white dark:bg-gray-800 font-bold text-xs border border-uaeGold/40 hover:border-uaeGold transition-all"
                    >
                      <FiSettings className="w-4 h-4" />
                      <span>Live Admin Panel</span>
                    </a>
                  )}

                  {typeof selectedProject.github === "object" ? (
                    Object.entries(selectedProject.github).map(([key, url]) => (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold text-xs hover:border-uaeGold border border-transparent transition-all"
                      >
                        <FiGithub className="w-4 h-4" />
                        <span className="capitalize">{key} Code</span>
                      </a>
                    ))
                  ) : (
                    selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold text-xs hover:border-uaeGold border border-transparent transition-all"
                      >
                        <FiGithub className="w-4 h-4" />
                        <span>View Repository</span>
                      </a>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;