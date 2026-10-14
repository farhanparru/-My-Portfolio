import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCode,
  FaArrowUp,
  FaDownload,
} from "react-icons/fa";
import cvPDF from "../assets/Muhammad-Shamin-Farhan-Full Stack Developer.pdf";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const featuredPlatforms = [
    { name: "TradeAuct Luxury Marketplace", href: "https://tradeauct.com/" },
    { name: "Montero Watch UAE", href: "https://www.monterowatch.com/en" },
    { name: "Demarquee Watch UAE", href: "https://www.demarqueewatch.com/en" },
    { name: "Montres.ae Luxury Watches", href: "https://www.montres.ae/" },
    { name: "Cloud Qlobe Telecom", href: "https://www.cloudqlobe.com/" },
    { name: "Sevenscape Facility Management", href: "https://www.sevenscape.ae/" },
  ];

  return (
    <footer className="bg-uaeNavyDark text-white pt-14 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 border-t border-uaeGold/20 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-uaeGold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-10 sm:mb-16">
          {/* Brand & Summary Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-uaeGold flex items-center justify-center text-uaeNavy font-display font-black text-lg shadow-gold-glow">
                SF
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-white">
                  Muhammad Shamin Farhan
                </h3>
                <p className="text-xs text-uaeGold font-semibold">
                  Full-Stack JavaScript Developer | React, Next.js & AI Integration
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md">
              Full-Stack JavaScript Developer specializing in React.js, Next.js & AI Integration with ~3 years hands-on experience building production marketplace, e-commerce, ERP/POS, and business communication platforms for UAE and GCC markets.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/shaminfarhan", label: "LinkedIn" },
                { icon: <FaGithub />, href: "https://github.com/farhanparru", label: "GitHub" },
                { icon: <FaCode />, href: "https://leetcode.com/u/shaminmuhammad116", label: "LeetCode" },
                { icon: <FaEnvelope />, href: "mailto:farhan.dev24@gmail.com", label: "Email" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-uaeGold hover:text-uaeNavy flex items-center justify-center text-gray-300 transition-all text-sm"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-uaeGold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-300 hover:text-uaeGold transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[10px] text-uaeGold/60">▸</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Systems */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-uaeGold uppercase tracking-wider">
              Featured Work
            </h4>
            <ul className="space-y-2.5">
              {featuredPlatforms.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-gray-300 hover:text-uaeGold transition-colors flex items-center gap-1.5 truncate"
                  >
                    <span className="text-[10px] text-uaeGold/60">▸</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Summary */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-uaeGold uppercase tracking-wider">
              Location
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-uaeRed mt-0.5 flex-shrink-0" />
                <span>Sharjah / Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-uaeGold flex-shrink-0" />
                <a href="tel:+971544237609" className="hover:text-uaeGold transition-colors">
                  +971 54 423 7609
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-uaeGold flex-shrink-0" />
                <a href="mailto:farhan.dev24@gmail.com" className="hover:text-uaeGold transition-colors truncate">
                  farhan.dev24
                </a>
              </div>
            </div>

            <a
              href={cvPDF}
              download="Muhammad_Farhan_Resume_UAE.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-uaeGold/15 border border-uaeGold/30 text-uaeGold text-xs font-bold hover:bg-uaeGold hover:text-uaeNavy transition-all mt-2"
            >
              <FaDownload className="w-3 h-3" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            &copy; {currentYear} Muhammad Shamin Farhan. Crafted with React, Tailwind CSS & Framer Motion.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-uaeGold hover:text-uaeNavy text-xs font-semibold text-gray-300 transition-all border border-white/10"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <FaArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;