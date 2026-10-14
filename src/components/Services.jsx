import React from "react";
import { motion } from "framer-motion";
import {
  FiShoppingCart,
  FiServer,
  FiCpu,
  FiCloud,
  FiShield,
  FiCreditCard,
  FiArrowRight,
} from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icon: <FiShoppingCart className="w-6 h-6 text-uaeGold" />,
      title: "Luxury E-Commerce & Marketplaces",
      description:
        "Architecting multi-vendor marketplaces, live auction engines, seller dashboards, and high-conversion e-commerce storefronts tailored for the GCC luxury market.",
      features: [
        "Live auction engines with real-time bidding",
        "Multi-vendor & seller wallet payout architectures",
        "Bilingual Arabic/English UX & RTL styling",
        "NFC digital authenticity verification",
      ],
    },
    {
      icon: <FiServer className="w-6 h-6 text-uaeGold" />,
      title: "Full-Stack Web & SaaS Engineering",
      description:
        "Building scalable web applications using React.js, Next.js, Node.js, Express, and PostgreSQL/MongoDB with clean architecture and robust TypeScript typing.",
      features: [
        "Server-Side Rendering (SSR) & Static Generation",
        "REST API design with Swagger documentation",
        "Role-based Access Control (RBAC) & OAuth 2.0",
        "State management with Redux Toolkit",
      ],
    },
    {
      icon: <FiCreditCard className="w-6 h-6 text-uaeGold" />,
      title: "Payments & Regional API Integrations",
      description:
        "Integrating mission-critical financial gateways, buy-now-pay-later (BNPL) providers, national digital identities, and regional logistics networks.",
      features: [
        "Stripe payments, escrow holding & seller payouts",
        "Tamara & Tabby BNPL integrations",
        "UAE PASS National Authentication & KYC",
        "DHL, Mawgood, and Trend courier delivery APIs",
      ],
    },
    {
      icon: <FiCloud className="w-6 h-6 text-uaeGold" />,
      title: "Cloud Infrastructure & AWS Deployment",
      description:
        "Configuring secure, highly available cloud environments on AWS, setting up reverse proxies, database clustering, and background job processors.",
      features: [
        "AWS EC2, S3 bucket storage & RDS PostgreSQL",
        "Nginx reverse proxy & SSL certificate setup",
        "Redis & BullMQ background task processing",
        "Production monitoring, telemetry & Sentry logging",
      ],
    },
    {
      icon: <FiCpu className="w-6 h-6 text-uaeGold" />,
      title: "Practical AI & Intelligent Vision",
      description:
        "Developing conversational shopping assistants using the Google Gemini API, AI-assisted watch scanning, OCR data extraction, and computer vision algorithms.",
      features: [
        "Google Gemini API shopping assistant & catalog grounding",
        "AI-assisted product scanning & watch identification",
        "Automated image data extraction & parsing",
        "Virtual watch try-on & wrist fit estimation",
      ],
    },
    {
      icon: <FiShield className="w-6 h-6 text-uaeGold" />,
      title: "Desktop ERP & Hardware POS Solutions",
      description:
        "Developing cross-platform desktop applications using Electron.js that interface directly with thermal POS printers, barcode scanners, and WhatsApp ordering.",
      features: [
        "Online and offline billing data synchronization",
        "Direct thermal POS receipt printer integration",
        "WhatsApp Catalog & webhook order bots",
        "Table management & kitchen order tickets (KOT)",
      ],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-darkBg transition-colors duration-300">
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
            What I Deliver
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-uaeNavy dark:text-white tracking-tight">
            Specialized Engineering <span className="text-uaeGold">Services</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            End-to-end software development services tailored for high-growth enterprises, luxury brands, and UAE startups.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-5 sm:p-8 rounded-2xl border border-gray-200/80 dark:border-gray-800 hover:border-uaeGold transition-all duration-300 shadow-sm hover:shadow-gold-glow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-uaeGold/10 dark:bg-uaeGold/20 flex items-center justify-center mb-6 border border-uaeGold/30">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-uaeNavy dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-uaeGold font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <a
                  href="#contact"
                  className="text-xs font-bold text-uaeNavy dark:text-uaeGold hover:underline flex items-center gap-1.5 group"
                >
                  <span>Inquire for Your Project</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
