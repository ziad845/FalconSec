import "./hero.css";
import { motion } from "framer-motion";

export default function Hero({ lang }) {
  const translations = {
    en: {
      topText:
        "ADVANCED CYBERSECURITY & DIGITAL SOLUTIONS ACROSS THE MIDDLE EAST",

      title1: "Secure Digital",

      title2: "Innovation",

      description:
        "Empowering modern businesses with advanced cybersecurity, enterprise web platforms, mobile applications, and scalable digital solutions built for the future.",

      primaryBtn: "Get Started",

      secondaryBtn: "Explore Services",
    },

    ar: {
      topText: "حلول الأمن السيبراني والتحول الرقمي المتقدمة في الشرق الأوسط",

      title1: "الابتكار الرقمي",

      title2: "الآمن",

      description:
        "نمكّن الشركات الحديثة من خلال حلول الأمن السيبراني المتقدمة وتطوير المنصات الإلكترونية وتطبيقات الموبايل والحلول الرقمية القابلة للتوسع والمصممة للمستقبل.",

      primaryBtn: "ابدأ الآن",

      secondaryBtn: "استكشف الخدمات",
    },
  };

  const t = translations[lang];

  return (
    <>
      <section className="hero" id="home">
        {/* VIDEO BACKGROUND */}
        <video
          src="/server-room.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        />

        {/* OVERLAY */}
        <div className="hero-overlay"></div>

        {/* CONTENT */}
        <div className="hero-container">
          <motion.div
            className="hero-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* TOP TEXT */}
            <span className="hero-top-text">{t.topText}</span>

            {/* TITLE */}
            <h1 className="hero-title">
              {t.title1}

              <br />

              {t.title2}
            </h1>

            {/* DESCRIPTION */}
            <p className="hero-description">{t.description}</p>

            {/* BUTTONS */}
            <div className="hero-buttons">
              <a href="#contact" className="hero-btn primary">
                {t.primaryBtn}
              </a>

             <a href="#about" className="hero-btn secondary">
  {t.secondaryBtn}
</a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* STATS SECTION */}

      <section className="stats-section">
        <div className="stats-grid">
          <motion.div
            className="stats-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>+15</h2>

            <p>{lang === "ar" ? "مشروع تم تنفيذه" : "PROJECTS DELIVERED"}</p>
          </motion.div>

          <motion.div
            className="stats-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>#1</h2>

            <p>
              {lang === "ar"
                ? "تصنيف TryHackMe Diamond"
                : "TRYHACKME DIAMOND LEAGUE"}
            </p>
          </motion.div>

          <motion.div
            className="stats-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2>+5</h2>

            <p>
              {lang === "ar"
                ? "شركات عالمية مؤمنة"
                : "GLOBAL COMPANIES SECURED"}
            </p>
          </motion.div>

          <motion.div
            className="stats-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
          >
            <h2>+10</h2>

            <p>
              {lang === "ar"
                ? "تقارير ثغرات تم إرسالها"
                : "BUG REPORTS SUBMITTED"}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
