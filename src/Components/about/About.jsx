// import React from "react";
// import "./about.css";
// import { motion } from "framer-motion";

// export default function About({ lang }) {

//   const translations = {

//     en: {

//       top: "WHAT WE DO //",

//       title: "Security & Development Services",

//       description:
//         "We provide advanced cybersecurity solutions, secure software development, and enterprise-grade infrastructure services tailored for startups, businesses, and organizations across the Middle East.",

//       cards: [

//         {
//           icon: "🛡️",
//           title: "Security Consulting",
//           text:
//             "Professional cybersecurity consulting, risk assessment, security architecture, and compliance solutions for businesses.",
//         },

//         {
//           icon: "🎯",
//           title: "Penetration Testing",
//           text:
//             "Advanced penetration testing for web applications, APIs, mobile apps, networks, and cloud infrastructure.",
//         },

//         {
//           icon: "🌐",
//           title: "Web Development",
//           text:
//             "Modern responsive websites and dashboards using React, Next.js, Node.js, and scalable architectures.",
//         },

//         {
//           icon: "📱",
//           title: "Mobile Applications",
//           text:
//             "Cross-platform mobile applications with secure backend systems and high-performance UI/UX.",
//         },

//         {
//           icon: "☁️",
//           title: "Cloud Security",
//           text:
//             "Secure cloud deployments, monitoring, hardening, and cloud infrastructure protection solutions.",
//         },

//         {
//           icon: "🔎",
//           title: "Bug Bounty Research",
//           text:
//             "Vulnerability research, bug bounty hunting, and responsible disclosure for enterprise systems.",
//         },

//       ],

//     },

//     ar: {

//       top: "ماذا نقدم //",

//       title: "خدمات الأمن والتطوير",

//       description:
//         "نقدم حلول أمن سيبراني متقدمة، وتطوير برمجيات آمنة، وخدمات بنية تحتية احترافية للشركات والمؤسسات في الشرق الأوسط.",

//       cards: [

//         {
//           icon: "🛡️",
//           title: "الاستشارات الأمنية",
//           text:
//             "استشارات احترافية في الأمن السيبراني، تقييم المخاطر، بناء الأنظمة الأمنية، وحلول الامتثال للشركات.",
//         },

//         {
//           icon: "🎯",
//           title: "اختبار الاختراق",
//           text:
//             "اختبارات اختراق متقدمة لتطبيقات الويب والهواتف وواجهات الـAPI والبنية التحتية والشبكات.",
//         },

//         {
//           icon: "🌐",
//           title: "تطوير المواقع",
//           text:
//             "تطوير مواقع ولوحات تحكم حديثة وسريعة باستخدام React وNext.js وبنية قوية قابلة للتوسع.",
//         },

//         {
//           icon: "📱",
//           title: "تطبيقات الموبايل",
//           text:
//             "تطوير تطبيقات موبايل احترافية متعددة المنصات مع أنظمة Backend آمنة وتجربة مستخدم قوية.",
//         },

//         {
//           icon: "☁️",
//           title: "أمن الخدمات السحابية",
//           text:
//             "حماية وتأمين الأنظمة السحابية والبنية التحتية ومراقبة الخوادم والخدمات.",
//         },

//         {
//           icon: "🔎",
//           title: "Bug Bounty Research",
//           text:
//             "البحث عن الثغرات الأمنية وبرامج الـBug Bounty والإفصاح المسؤول عن الثغرات.",
//         },

//       ],

//     },

//   };

//   const t = translations[lang];

//   return (

//     <section className="about" id="about">

//       <div className="about-header">

//         <span>
//           {t.top}
//         </span>

//         <h2>
//           {t.title}
//         </h2>

//         <p>
//           {t.description}
//         </p>

//       </div>

//       <div className="services-grid">

//         {t.cards.map((card, index) => (

//           <motion.div
//             className="service-card"
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             whileHover={{ y: -10 }}
//           >

//             <div className="service-icon">

//               {card.icon}

//             </div>

//             <h3>

//               {card.title}

//             </h3>

//             <p>

//               {card.text}

//             </p>

//           </motion.div>

//         ))}

//       </div>

//     </section>

//   );

// }

import React from "react";
import "./about.css";
import { motion } from "framer-motion";

export default function About({ lang }) {
  const translations = {
    en: {
      top: "WHAT WE DO //",

      title: "Security & Development Services",

      description:
        "We provide advanced cybersecurity solutions, secure software development, and enterprise-grade infrastructure services tailored for startups, businesses, and organizations across the Middle East.",

      cards: [
        {
          icon: "🛡️",
          title: "Security Consulting",
          text: "Professional cybersecurity consulting, risk assessment, security architecture, and compliance solutions for businesses.",
        },

        {
          icon: "🎯",
          title: "Penetration Testing",
          text: "Advanced penetration testing for web applications, APIs, mobile apps, networks, and cloud infrastructure.",
        },

        {
          icon: "🌐",
          title: "Web Development",
          text: "Modern responsive websites and dashboards using React, Next.js, Node.js, and scalable architectures.",
        },

        {
          icon: "📱",
          title: "Mobile Applications",
          text: "Cross-platform mobile applications with secure backend systems and high-performance UI/UX.",
        },

        {
          icon: "☁️",
          title: "Cloud Security",
          text: "Secure cloud deployments, monitoring, hardening, and cloud infrastructure protection solutions.",
        },

        {
          icon: "🔎",
          title: "Bug Bounty Research",
          text: "Vulnerability research, bug bounty hunting, and responsible disclosure for enterprise systems.",
        },
      ],
    },

    ar: {
      top: "ماذا نقدم //",

      title: "خدمات الأمن والتطوير",

      description:
        "نقدم حلول أمن سيبراني متقدمة، وتطوير برمجيات آمنة، وخدمات بنية تحتية احترافية للشركات والمؤسسات في الشرق الأوسط.",

      cards: [
        {
          icon: "🛡️",
          title: "الاستشارات الأمنية",
          text: "استشارات احترافية في الأمن السيبراني، تقييم المخاطر، بناء الأنظمة الأمنية، وحلول الامتثال للشركات.",
        },

        {
          icon: "🎯",
          title: "اختبار الاختراق",
          text: "اختبارات اختراق متقدمة لتطبيقات الويب والهواتف وواجهات الـAPI والبنية التحتية والشبكات.",
        },

        {
          icon: "🌐",
          title: "تطوير المواقع",
          text: "تطوير مواقع ولوحات تحكم حديثة وسريعة باستخدام React وNext.js وبنية قوية قابلة للتوسع.",
        },

        {
          icon: "📱",
          title: "تطبيقات الموبايل",
          text: "تطوير تطبيقات موبايل احترافية متعددة المنصات مع أنظمة Backend آمنة وتجربة مستخدم قوية.",
        },

        {
          icon: "☁️",
          title: "أمن الخدمات السحابية",
          text: "حماية وتأمين الأنظمة السحابية والبنية التحتية ومراقبة الخوادم والخدمات.",
        },

        {
          icon: "🔎",
          title: "Bug Bounty Research",
          text: "البحث عن الثغرات الأمنية وبرامج الـBug Bounty والإفصاح المسؤول عن الثغرات.",
        },
      ],
    },
  };

  const t = translations[lang];

  return (
    <section className="about" id="about">
      {/* HEADER */}

      <div className="about-header">
        <span>{t.top}</span>

        <h2>{t.title}</h2>

        <p>{t.description}</p>
      </div>

      {/* SERVICES */}

      <div className="services-grid">
        {t.cards.map((card, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="service-icon">{card.icon}</div>

            <h3>{card.title}</h3>

            <p>{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* EXPERIENCE */}

      <div className="experience-section">
        <motion.div
          className="experience-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mini-title">
            {lang === "ar" ? "من نحن //" : "WHO WE ARE //"}
          </span>

          <h2>
            {lang === "ar"
              ? "خبرة حقيقية، نتائج موثوقة"
              : "Real Experience, Trusted Results"}
          </h2>

          <p>
            {lang === "ar"
              ? "FalconSec فريق متخصص في الأمن السيبراني وتطوير الحلول الرقمية الحديثة. نقدم خدمات احترافية تشمل اختبار الاختراق، حماية البنية التحتية، تطوير المواقع والتطبيقات، وتأمين الأنظمة السحابية للشركات والمؤسسات."
              : "FalconSec is a cybersecurity-focused technology team delivering penetration testing, secure infrastructure, cloud protection, web development, and modern enterprise solutions for startups and businesses."}
          </p>

          <p>
            {lang === "ar"
              ? "نجمع بين الخبرة التقنية والهجوم الأخلاقي لبناء حلول آمنة، سريعة، وقابلة للتوسع مع أعلى معايير الحماية الحديثة."
              : "We combine offensive security expertise with modern development practices to build scalable, secure, and high-performance digital solutions."}
          </p>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="experience-side"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="cert-box">
            <span className="mini-title">
              {lang === "ar"
                ? "الشهادات والإنجازات //"
                : "CERTIFICATIONS & ACHIEVEMENTS //"}
            </span>

            <div className="cert-list">
              <div className="cert-item">
                <span></span>
                <p>TryHackMe Diamond League</p>
              </div>

              <div className="cert-item">
                <span></span>
                <p>OWASP Top 10 Security</p>
              </div>

              <div className="cert-item">
                <span></span>
                <p>Advanced API Security Testing</p>
              </div>

              <div className="cert-item">
                <span></span>
                <p>Cloud Infrastructure Hardening</p>
              </div>

              <div className="cert-item">
                <span></span>
                <p>Mobile Application Security</p>
              </div>
            </div>

            {/* MINI STATS */}

            <div className="mini-stats">
              <div className="mini-card">
                <h3>#1</h3>

                <p>THM Diamond</p>
              </div>

              <div className="mini-card">
                <h3>+15</h3>

                <p>{lang === "ar" ? "مشروع مؤمن" : "Projects Secured"}</p>
              </div>

              <div className="mini-card">
                <h3>24/7</h3>

                <p>{lang === "ar" ? "مراقبة وحماية" : "Monitoring"}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* WORKFLOW */}

      <div className="workflow-section">
        <div className="workflow-header">
          <span>{lang === "ar" ? "آلية العمل //" : "HOW WE WORK //"}</span>

          <h2>{lang === "ar" ? "منهجية الحماية" : "Security Workflow"}</h2>
        </div>

        <div className="workflow-grid">
          {[
            {
              number: "01",
              title: lang === "ar" ? "التخطيط" : "Planning",

              text:
                lang === "ar"
                  ? "تحليل أهداف المشروع والبنية التحتية."
                  : "Understanding business goals and attack surfaces.",
            },

            {
              number: "02",
              title: lang === "ar" ? "جمع المعلومات" : "Recon",

              text:
                lang === "ar"
                  ? "تحليل الأنظمة واكتشاف نقاط الضعف."
                  : "Infrastructure mapping and threat analysis.",
            },

            {
              number: "03",
              title: lang === "ar" ? "الاختبار" : "Testing",

              text:
                lang === "ar"
                  ? "تنفيذ اختبارات اختراق احترافية."
                  : "Professional penetration testing execution.",
            },

            {
              number: "04",
              title: lang === "ar" ? "التقارير" : "Reporting",

              text:
                lang === "ar"
                  ? "تقارير مفصلة وخطوات الإصلاح."
                  : "Professional reports and remediation plans.",
            },

            {
              number: "05",
              title: lang === "ar" ? "الحماية" : "Protection",

              text:
                lang === "ar"
                  ? "تقوية الأنظمة ومراقبة الثغرات."
                  : "Hardening infrastructure and monitoring systems.",
            },
          ].map((step, index) => (
            <motion.div
              className="workflow-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="workflow-number">{step.number}</div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="why-section">
        <div className="workflow-header">
          <span>{lang === "ar" ? "لماذا نحن //" : "WHY FALCONSEC //"}</span>

          <h2>
            {lang === "ar" ? "لماذا تختار FalconSec؟" : "Why Choose FalconSec?"}
          </h2>
        </div>

        <div className="why-grid">
          {[
            {
              icon: "🌍",

              title: lang === "ar" ? "خبرة عالمية" : "Global Experience",

              text:
                lang === "ar"
                  ? "خبرة عملية في حماية الأنظمة والتعامل مع منصات وشركات عالمية."
                  : "Real-world experience securing systems and working with global platforms and enterprise environments.",
            },

            {
              icon: "⚡",

              title: lang === "ar" ? "سرعة في التنفيذ" : "Fast Delivery",

              text:
                lang === "ar"
                  ? "تنفيذ سريع وتقارير احترافية واضحة مع متابعة مستمرة."
                  : "Fast execution with professional reporting and continuous communication.",
            },

            {
              icon: "💰",

              title: lang === "ar" ? "أسعار تنافسية" : "Competitive Pricing",

              text:
                lang === "ar"
                  ? "حلول احترافية بأسعار مناسبة للشركات والـStartups."
                  : "Enterprise-grade solutions tailored for businesses and startups at competitive pricing.",
            },

            {
              icon: "🔐",

              title: lang === "ar" ? "سرية كاملة" : "Full Confidentiality",

              text:
                lang === "ar"
                  ? "جميع البيانات والتقارير محمية بأعلى معايير السرية."
                  : "All reports, vulnerabilities, and client data are handled with strict confidentiality.",
            },

            {
              icon: "🚀",

              title: lang === "ar" ? "تطوير حديث" : "Modern Development",

              text:
                lang === "ar"
                  ? "بناء مواقع وتطبيقات حديثة بأداء عالي وتجربة مستخدم قوية."
                  : "Building scalable web and mobile applications with modern technologies and premium UI/UX.",
            },

            {
              icon: "☁️",

              title: lang === "ar" ? "حماية سحابية" : "Cloud Protection",

              text:
                lang === "ar"
                  ? "تأمين الخوادم والبنية التحتية والخدمات السحابية."
                  : "Infrastructure hardening, cloud monitoring, and secure deployments.",
            },
          ].map((item, index) => (
            <motion.div
              className="why-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="why-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
