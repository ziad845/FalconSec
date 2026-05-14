// import "./contact.css";
// import { useForm, ValidationError } from "@formspree/react";
// import Lottie from "lottie-react";
// import doneAnimation from "../../animation/done.json";
// import contactAnimation from "../../animation/contact.json";
// import { motion } from "framer-motion";

// export default function Contact({ lang }) {
//   const [state, handleSubmit] = useForm("myzzyvzy");

//   const translations = {
//     en: {
//       top: "GET IN TOUCH //",

//       title: "Let’s Build Something Secure Together",

//       subtitle:
//         "Need penetration testing, secure development, or cybersecurity consultation? Contact FalconSec and let’s build secure digital solutions together.",

//       name: "Full Name",

//       company: "Company Name",

//       email: "Email Address",

//       service: "Select Service",

//       message: "Project Details",

//       submit: "Send Request →",

//       sending: "Sending...",

//       success: "Message sent successfully 👌",

//       services: [
//         "Penetration Testing",
//         "Web Development",
//         "Mobile Applications",
//         "Cloud Security",
//         "Security Consulting",
//       ],

//       placeholders: {
//         name: "Enter your full name",

//         company: "Enter your company name",

//         email: "Enter your email",

//         message: "Tell us about your project or security requirements...",
//       },
//     },

//     ar: {
//       top: "تواصل معنا //",

//       title: "لنقم ببناء حلول رقمية آمنة معًا",

//       subtitle:
//         "هل تحتاج لاختبار اختراق، تطوير آمن، أو استشارات أمن سيبراني؟ تواصل مع FalconSec لبناء حلول رقمية آمنة وحديثة.",

//       name: "الاسم الكامل",

//       company: "اسم الشركة",

//       email: "البريد الإلكتروني",

//       service: "اختر الخدمة",

//       message: "تفاصيل المشروع",

//       submit: "إرسال الطلب ←",

//       sending: "جارٍ الإرسال...",

//       success: "تم إرسال الرسالة بنجاح 👌",

//       services: [
//         "اختبار الاختراق",
//         "تطوير المواقع",
//         "تطبيقات الموبايل",
//         "الحماية السحابية",
//         "الاستشارات الأمنية",
//       ],

//       placeholders: {
//         name: "اكتب اسمك الكامل",

//         company: "اكتب اسم الشركة",

//         email: "اكتب بريدك الإلكتروني",

//         message: "اشرح احتياجاتك الأمنية أو تفاصيل مشروعك...",
//       },
//     },
//   };

//   const t = translations[lang];

//   const submitForm = async (e) => {
//     e.preventDefault();

//     await handleSubmit(e);

//     const formData = new FormData(e.target);

//     const name = formData.get("name");

//     const company = formData.get("company");

//     const email = formData.get("email");

//     const service = formData.get("service");

//     const message = formData.get("message");

//     const phone = "201069819706";

//     const whatsappMessage = `🚨 New Contact Request — FalconSec

// 👤 Name: ${name}

// 🏢 Company: ${company}

// 📧 Email: ${email}

// 🛡️ Service: ${service}

// 📝 Message:
// ${message}

// ━━━━━━━━━━━━━━
// Sent from FalconSec Website`;

//     window.open(
//       `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`,
//       "_blank",
//     );
//   };

//   return (
//     <>
//       {/* FLOATING WHATSAPP BUTTON */}

//       <a
//         href="https://wa.me/201069819706"
//         className="floating-whatsapp"
//         target="_blank"
//         rel="noreferrer"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="32"
//           height="32"
//           viewBox="0 0 24 24"
//           fill="white"
//         >
//           <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.47 0 .1 5.36.1 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.22-1.63a11.93 11.93 0 0 0 5.85 1.49h.01c6.6 0 11.97-5.36 11.97-11.97 0-3.2-1.25-6.2-3.53-8.41zM12.08 21.7h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.69.97.99-3.6-.24-.37a9.86 9.86 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.91 7.02c0 5.47-4.45 9.92-9.92 9.92zm5.44-7.44c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.48.71.3 1.26.48 1.69.62.71.22 1.35.19 1.86.11.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
//         </svg>
//       </a>

//       <section className="contact-us" id="contact">
//         {/* HEADER */}

//         <div className="contact-header">
//           <span>{t.top}</span>

//           <h2>{t.title}</h2>

//           <p>{t.subtitle}</p>
//         </div>

//         <div className="contact-cards">
//           {/* EMAIL CARD */}

//           <motion.a
//             href="mailto:contact@falconsec.dev"
//             className="info-card"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             <div className="info-icon">📧</div>

//             <h3>Email</h3>

//             <p>contact@falconsec.dev</p>
//           </motion.a>

//           {/* WHATSAPP CARD */}

//           <motion.a
//             href="https://wa.me/201069819706"
//             target="_blank"
//             rel="noreferrer"
//             className="info-card"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="info-icon">💬</div>

//             <h3>WhatsApp</h3>

//             <p>+20 106 981 9706</p>
//           </motion.a>

//           {/* RESPONSE CARD */}

//           <motion.div
//             className="info-card"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="info-icon">⚡</div>

//             <h3>{lang === "ar" ? "الاستجابة" : "Response"}</h3>

//             <p>{lang === "ar" ? "خلال 24 ساعة" : "Within 24 Hours"}</p>
//           </motion.div>
//         </div>

//         {/* MAIN CONTAINER */}

//         <div className="contact-container">
//           {/* FORM */}

//           <motion.form
//             onSubmit={submitForm}
//             className="form"
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="form-grid">
//               <div className="field">
//                 <label>{t.name}</label>

//                 <input
//                   required
//                   type="text"
//                   name="name"
//                   placeholder={t.placeholders.name}
//                 />
//               </div>

//               <div className="field">
//                 <label>{t.company}</label>

//                 <input
//                   type="text"
//                   name="company"
//                   placeholder={t.placeholders.company}
//                 />
//               </div>
//             </div>

//             <div className="form-grid">
//               <div className="field">
//                 <label>{t.email}</label>

//                 <input
//                   required
//                   type="email"
//                   name="email"
//                   placeholder={t.placeholders.email}
//                 />

//                 <ValidationError
//                   prefix="Email"
//                   field="email"
//                   errors={state.errors}
//                 />
//               </div>

//               <div className="field">
//                 <label>{t.service}</label>

//                 <select name="service">
//                   {t.services.map((service, index) => (
//                     <option key={index} value={service}>
//                       {service}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div className="field">
//               <label>{t.message}</label>

//               <textarea
//                 required
//                 name="message"
//                 placeholder={t.placeholders.message}
//               ></textarea>

//               <ValidationError
//                 prefix="Message"
//                 field="message"
//                 errors={state.errors}
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={state.submitting}
//               className="submit"
//             >
//               {state.submitting ? t.sending : t.submit}
//             </button>

//             {state.succeeded && (
//               <div className="success">
//                 <Lottie
//                   loop={false}
//                   style={{ height: 35 }}
//                   animationData={doneAnimation}
//                 />

//                 <span>{t.success}</span>
//               </div>
//             )}
//           </motion.form>

//           {/* ANIMATION */}

//           <motion.div
//             className="animation"
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="animation-box">
//               <Lottie
//                 className="contact-animation"
//                 loop={true}
//                 animationData={contactAnimation}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }







import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";
import { motion } from "framer-motion";

export default function Contact({ lang }) {

  const [state, handleSubmit] = useForm("myzzyvzy");

  const translations = {

    en: {

      top: "GET IN TOUCH //",

      title: "Let’s Build Something Secure Together",

      subtitle:
        "Need penetration testing, secure development, or cybersecurity consultation? Contact FalconSec and let’s build secure digital solutions together.",

      name: "Full Name",

      company: "Company Name",

      email: "Email Address",

      service: "Select Service",

      message: "Project Details",

      submit: "Send Request →",

      sending: "Sending...",

      success: "Message sent successfully 👌",

      services: [
        "Penetration Testing",
        "Web Development",
        "Mobile Applications",
        "Cloud Security",
        "Security Consulting",
      ],

      placeholders: {

        name: "Enter your full name",

        company: "Enter your company name",

        email: "Enter your email",

        message:
          "Tell us about your project or security requirements...",
      },
    },

    ar: {

      top: "تواصل معنا //",

      title: "لنقم ببناء حلول رقمية آمنة معًا",

      subtitle:
        "هل تحتاج لاختبار اختراق، تطوير آمن، أو استشارات أمن سيبراني؟ تواصل مع FalconSec لبناء حلول رقمية آمنة وحديثة.",

      name: "الاسم الكامل",

      company: "اسم الشركة",

      email: "البريد الإلكتروني",

      service: "اختر الخدمة",

      message: "تفاصيل المشروع",

      submit: "إرسال الطلب ←",

      sending: "جارٍ الإرسال...",

      success: "تم إرسال الرسالة بنجاح 👌",

      services: [
        "اختبار الاختراق",
        "تطوير المواقع",
        "تطبيقات الموبايل",
        "الحماية السحابية",
        "الاستشارات الأمنية",
      ],

      placeholders: {

        name: "اكتب اسمك الكامل",

        company: "اكتب اسم الشركة",

        email: "اكتب بريدك الإلكتروني",

        message:
          "اشرح احتياجاتك الأمنية أو تفاصيل مشروعك...",
      },
    },
  };

  const t = translations[lang];

  /* =========================
     SUBMIT FORM
  ========================= */

  const submitForm = async (e) => {

    e.preventDefault();

    await handleSubmit(e);
    e.target.reset();

  };

  return (

    <>

      {/* FLOATING WHATSAPP BUTTON */}

      <a
        href="https://wa.me/201069819706"
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="white"
        >

          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.47 0 .1 5.36.1 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.22-1.63a11.93 11.93 0 0 0 5.85 1.49h.01c6.6 0 11.97-5.36 11.97-11.97 0-3.2-1.25-6.2-3.53-8.41zM12.08 21.7h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.69.97.99-3.6-.24-.37a9.86 9.86 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.91 7.02c0 5.47-4.45 9.92-9.92 9.92zm5.44-7.44c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.48.71.3 1.26.48 1.69.62.71.22 1.35.19 1.86.11.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />

        </svg>

      </a>

      {/* CONTACT SECTION */}

      <section className="contact-us" id="contact">

        {/* HEADER */}

        <div className="contact-header">

          <span>{t.top}</span>

          <h2>{t.title}</h2>

          <p>{t.subtitle}</p>

        </div>

        {/* INFO CARDS */}

        <div className="contact-cards">

          {/* EMAIL CARD */}

          <motion.a
            href="mailto:mahmoud243578@gmail.com"
            className="info-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >

            <div className="info-icon">📧</div>

            <h3>Email</h3>

            <p>mahmoud243578@gmail.com</p>

          </motion.a>

          {/* WHATSAPP CARD */}

          <motion.a
            href="https://wa.me/201069819706"
            target="_blank"
            rel="noreferrer"
            className="info-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            <div className="info-icon">💬</div>

            <h3>WhatsApp</h3>

            <p>+20 106 981 9706</p>

          </motion.a>

          {/* RESPONSE CARD */}

          <motion.div
            className="info-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div className="info-icon">⚡</div>

            <h3>
              {lang === "ar"
                ? "الاستجابة"
                : "Response"}
            </h3>

            <p>
              {lang === "ar"
                ? "خلال 24 ساعة"
                : "Within 24 Hours"}
            </p>

          </motion.div>

        </div>

        {/* MAIN CONTAINER */}

        <div className="contact-container">

          {/* FORM */}

          <motion.form
            onSubmit={submitForm}
            className="form"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div className="form-grid">

              <div className="field">

                <label>{t.name}</label>

                <input
                  required
                  type="text"
                  name="name"
                  placeholder={t.placeholders.name}
                />

              </div>

              <div className="field">

                <label>{t.company}</label>

                <input
                  type="text"
                  name="company"
                  placeholder={t.placeholders.company}
                />

              </div>

            </div>

            <div className="form-grid">

              <div className="field">

                <label>{t.email}</label>

                <input
                  required
                  type="email"
                  name="email"
                  placeholder={t.placeholders.email}
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />

              </div>

              <div className="field">

                <label>{t.service}</label>

                <select name="service">

                  {t.services.map((service, index) => (

                    <option key={index} value={service}>
                      {service}
                    </option>

                  ))}

                </select>

              </div>

            </div>

            <div className="field">

              <label>{t.message}</label>

              <textarea
                required
                name="message"
                placeholder={t.placeholders.message}
              ></textarea>

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="submit"
            >

              {state.submitting
                ? t.sending
                : t.submit}

            </button>

            {state.succeeded && (

              <div className="success">

                <Lottie
                  loop={false}
                  style={{ height: 35 }}
                  animationData={doneAnimation}
                />

                <span>{t.success}</span>

              </div>

            )}

          </motion.form>

          {/* ANIMATION */}

          <motion.div
            className="animation"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div className="animation-box">

              <Lottie
                className="contact-animation"
                loop={true}
                animationData={contactAnimation}
              />

            </div>

          </motion.div>

        </div>

      </section>

    </>

  );
}