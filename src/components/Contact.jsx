import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import { FiCheckCircle, FiCopy, FiCheck } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Time / Contract Engineering Role",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const presets = [
    "Full-Time Role (UAE / Remote)",
    "Luxury E-Commerce / Marketplace Project",
    "API & Cloud Architecture Consultation",
    "General Inquiry",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("farhan.dev24@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Form can open mailto link with pre-filled content
    const mailtoUrl = `mailto:farhan.dev24@gmail.com?subject=${encodeURIComponent(
      formData.subject + " - from " + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-darkBg/60 transition-colors duration-300">
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
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-uaeNavy dark:text-white tracking-tight">
            Let's Build Something <span className="text-uaeGold">Exceptional</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Whether you are looking to hire a Full-Stack JavaScript Developer specializing in React.js, Next.js & AI Integration in the UAE, architect a marketplace platform, or build an enterprise system, I am ready to collaborate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & UAE Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Card: Phone & WhatsApp */}
            <div className="glass-card p-6 rounded-2xl border border-gray-200/80 dark:border-gray-800 hover:border-uaeGold transition-all duration-300 shadow-sm flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-uaeGold/15 text-uaeGold flex-shrink-0">
                <FaPhoneAlt className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Call & WhatsApp
                </h3>
                <a
                  href="tel:+971544237609"
                  className="font-display font-bold text-lg text-uaeNavy dark:text-white hover:text-uaeGold block mt-1 transition-colors"
                >
                  +971 54 423 7609
                </a>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Alt: +971 55 638 4774 · Available Sun – Fri
                </p>
              </div>
            </div>

            {/* Contact Card: Email */}
            <div className="glass-card p-6 rounded-2xl border border-gray-200/80 dark:border-gray-800 hover:border-uaeGold transition-all duration-300 shadow-sm flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-uaeGold/15 text-uaeGold flex-shrink-0">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Direct Email
                </h3>
                <a
                  href="mailto:farhan.dev24@gmail.com"
                  className="font-display font-bold text-base sm:text-lg text-uaeNavy dark:text-white hover:text-uaeGold block mt-1 transition-colors break-all"
                >
                  farhan.dev24@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs text-uaeGold font-semibold mt-2 hover:underline"
                >
                  {copiedEmail ? (
                    <>
                      <FiCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Email copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <FiCopy className="w-3.5 h-3.5" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Contact Card: Location */}
            <div className="glass-card p-6 rounded-2xl border border-gray-200/80 dark:border-gray-800 hover:border-uaeGold transition-all duration-300 shadow-sm flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-uaeGold/15 text-uaeGold flex-shrink-0">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Location & Availability
                </h3>
                <div className="font-display font-bold text-base text-uaeNavy dark:text-white mt-1">
                  Sharjah & Dubai, UAE
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Open for UAE on-site, hybrid, or GCC regional engineering leadership roles.
                </p>
              </div>
            </div>

            {/* Quick WhatsApp & Social Strip */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-uaeNavy to-uaeNavyLight text-white shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-base text-white">
                    Direct WhatsApp Chat
                  </h4>
                  <p className="text-xs text-gray-300">
                    Get an instant response for project requirements.
                  </p>
                </div>
                <a
                  href="https://wa.me/971544237609"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-all shadow-md flex-shrink-0"
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp className="w-6 h-6" />
                </a>
              </div>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-300">Official Profiles:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://linkedin.com/in/shaminfarhan"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/10 hover:bg-uaeGold hover:text-uaeNavy transition-all text-sm"
                    title="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/farhanparru"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/10 hover:bg-uaeGold hover:text-uaeNavy transition-all text-sm"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://leetcode.com/u/shaminmuhammad116"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/10 hover:bg-uaeGold hover:text-uaeNavy transition-all text-sm"
                    title="LeetCode"
                  >
                    <FaCode />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-uaeGold/30 shadow-xl"
          >
            <h3 className="font-display font-bold text-2xl text-uaeNavy dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6">
              Fill out the form below to initiate discussion. I typically reply within a few hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-2xl">
                  <FiCheckCircle />
                </div>
                <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400">
                  Message Ready to Send!
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Your email client has been launched with your message. You can also message directly on WhatsApp (+971 54 423 7609).
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-uaeGold text-uaeNavy font-bold text-xs mt-2"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Subject Presets */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                    Inquiry Topic
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {presets.map((p, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setFormData({ ...formData, subject: p })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          formData.subject === p
                            ? "bg-uaeGold text-uaeNavy font-bold shadow-sm"
                            : "bg-gray-100 dark:bg-darkCard text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-darkCard text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-uaeGold text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-darkCard text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-uaeGold text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1"
                  >
                    Project Details or Role Description
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project goals, technical requirements, or timeline..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-darkCard text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-uaeGold text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-uaeNavy dark:bg-uaeGold text-white dark:text-uaeNavy font-bold text-sm shadow-gold-glow hover:opacity-95 transition-all"
                >
                  <FaPaperPlane className="w-4 h-4" />
                  <span>Send Message & Connect</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;