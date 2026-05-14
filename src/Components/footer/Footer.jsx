import React from "react";
import "./footer.css";

import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Footer({ lang }) {
  const translations = {
    en: {
      brand: "FalconSec",

      description:
        "Advanced cybersecurity, web development, mobile applications, and secure digital solutions for modern businesses across the Middle East.",

      quickLinks: "Quick Links",

      services: "Services",

      contact: "Contact",

      rights: "All Rights Reserved.",

      links: {
        home: "Home",
        about: "About",
        contact: "Contact",
      },

      servicesList: [
        "Penetration Testing",
        "Web Development",
        "Cloud Security",
        "Security Consulting",
      ],
    },

    ar: {
      brand: "FalconSec",

      description:
        "حلول الأمن السيبراني وتطوير المواقع وتطبيقات الموبايل والحلول الرقمية الآمنة للشركات الحديثة في الشرق الأوسط.",

      quickLinks: "روابط سريعة",

      services: "الخدمات",

      contact: "تواصل معنا",

      rights: "جميع الحقوق محفوظة.",

      links: {
        home: "الرئيسية",
        about: "من نحن",
        contact: "تواصل معنا",
      },

      servicesList: [
        "اختبار الاختراق",
        "تطوير المواقع",
        "الحماية السحابية",
        "الاستشارات الأمنية",
      ],
    },
  };

  const t = translations[lang];

  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-container">
        {/* BRAND */}

        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-logo">
            <img
              src="/falconsec.jpeg"
              alt="FalconSec Logo"
              className="footer-logo-img"
            />

<h2 className="footer-brand-title">

  <span className="white">
    FALCON
  </span>

  <span className="blue">
    {" "}  SEC
  </span>

</h2>
          </div>

          <p>{t.description}</p>

          <div className="footer-socials">
            <a
              href="https://wa.me/201069819706"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a href="mailto:mahmoud243578@gmail.com">
              <FaEnvelope />
            </a>
            <a href="https://tiktok.com/" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>

            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/in/ziad-khaled-bab395341/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* LINKS */}

        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>{t.quickLinks}</h3>

          <a href="#home">{t.links.home}</a>

          <a href="#about">{t.links.about}</a>

          <a href="#contact">{t.links.contact}</a>
        </motion.div>

        {/* SERVICES */}

        <motion.div
          className="footer-services"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3>{t.services}</h3>

          {t.servicesList.map((service, index) => (
            <span key={index}>{service}</span>
          ))}
        </motion.div>

        {/* CONTACT */}

        <motion.div
          className="footer-contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>{t.contact}</h3>

          <a href="mailto:mahmoud243578@gmail.com">mahmoud243578@gmail.com</a>

          <a href="https://wa.me/201069819706" target="_blank" rel="noreferrer">
            +20 106 981 9706
          </a>
        </motion.div>
      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">
        <p>© 2026 FalconSec — {t.rights}</p>
      </div>
    </footer>
  );
}
