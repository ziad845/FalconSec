// import { useEffect, useState } from "react";

// import Header from "./Components/header/Header";
// import Hero from "./Components/hero/Hero";
// import Main from "./Components/main/Main";
// import Contact from "./Components/contact/Contact";
// import Footer from "./Components/footer/Footer";
// import Skills from "./Components/skills/Skills";
// import About from "./Components/about/About";

// function App() {
//   /* =========================
//      SCROLL BUTTON
//   ========================= */
//   const [showscroll, setShowscroll] = useState(false);

//   /* =========================
//      LANGUAGE
//   ========================= */
//   const [lang, setLang] = useState("en");

//   /* =========================
//      RTL / LTR
//   ========================= */
//   useEffect(() => {
//     document.documentElement.lang = lang;

//     document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
//   }, [lang]);

//   /* =========================
//      SCROLL
//   ========================= */
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 300) {
//         setShowscroll(true);
//       } else {
//         setShowscroll(false);
//       }
//     });
//   }, []);

// return (
//   <div id="up" className="container">

//     {/* HEADER */}
//     <Header lang={lang} setLang={setLang} />

//     {/* HERO */}
//     <div id="home">
//       <Hero lang={lang} />
//     </div>

//     <div className="divider" />

//     {/* ABOUT */}
//     <div id="about">
//       <About lang={lang} />
//     </div>

//     <div className="divider" />

//     {/* CONTACT */}
//     <div id="contact">
//       <Contact lang={lang} />
//     </div>

//     <div className="divider" />

//     {/* FOOTER */}
//     <Footer lang={lang} />

//     {/* SCROLL BUTTON */}
//     <a
//       href="#up"
//       style={{
//         opacity: showscroll ? 1 : 0,
//         transition: "1s",
//       }}
//     >
//       <button className="icon-keyboard_arrow_up scroll2Top"></button>
//     </a>

//   </div>
// );
// }

// export default App;



import { useEffect, useState } from "react";

import Header from "./Components/header/Header";
import Hero from "./Components/hero/Hero";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import About from "./Components/about/About";

function App() {

  /* =========================
     LANGUAGE
  ========================= */

  const [lang, setLang] = useState("en");

  /* =========================
     RTL / LTR
  ========================= */

  useEffect(() => {

    document.documentElement.lang = lang;

    document.documentElement.dir =
      lang === "ar"
        ? "rtl"
        : "ltr";

  }, [lang]);

  return (

    <div id="up" className="container">

      {/* HEADER */}

      <Header
        lang={lang}
        setLang={setLang}
      />

      {/* HERO */}

      <div id="home">

        <Hero lang={lang} />

      </div>

      <div className="divider" />

      {/* ABOUT */}

      <div id="about">

        <About lang={lang} />

      </div>

      <div className="divider" />

      {/* CONTACT */}

      <div id="contact">

        <Contact lang={lang} />

      </div>

      <div className="divider" />

      {/* FOOTER */}

      <Footer lang={lang} />

    </div>

  );
}

export default App;