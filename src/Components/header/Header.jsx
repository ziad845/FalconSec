import { useEffect, useState } from "react";
import "./header.css";

export default function Header({ lang, setLang }) {

  const [showMenu, setShowMenu] = useState(false);

  const [showLang, setShowLang] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  /* =========================
     THEME
  ========================= */
  useEffect(() => {

    if (theme === "light") {

      document.body.classList.remove("dark");
      document.body.classList.add("light");

    } else {

      document.body.classList.remove("light");
      document.body.classList.add("dark");

    }

  }, [theme]);

  /* =========================
     LINKS
  ========================= */
  const links = [

    {
      id: "#home",
      en: "Home",
      ar: "الرئيسية",
    },

    {
      id: "#about",
      en: "About",
      ar: "من نحن",
    },

    {
      id: "#contact",
      en: "Contact",
      ar: "تواصل معنا",
    },

  ];

  return (

    <header className="header">
{/* LOGO */}

<a href="#home" className="logo">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="logo-video"
  >
    <source
      src="/falcon-logo.mp4"
      type="video/mp4"
    />
  </video>

  <h1 className="logo-text">
    FALCON <span>SEC</span>
  </h1>

</a>


      {/* NAVBAR */}
      <nav>

        <ul className="flex">

          {links.map((link) => (

            <li key={link.id}>

              <a href={link.id}>

                {lang === "ar"
                  ? link.ar
                  : link.en}

              </a>

            </li>

          ))}

        </ul>

      </nav>

      {/* RIGHT SIDE */}
      <div className="right-actions">

        {/* DARK MODE */}
        <button
          className="action-btn"
          onClick={() => {

            localStorage.setItem(
              "currentMode",
              theme === "dark"
                ? "light"
                : "dark"
            );

            setTheme(
              localStorage.getItem("currentMode")
            );

          }}
        >

          {theme === "dark" ? (

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >

              <circle cx="12" cy="12" r="4"></circle>

              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>

              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>

              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>

              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>

            </svg>

          ) : (

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >

              <path d="M21 12.79A9 9 0 1 1 11.21 3c0 .28 0 .57.05.85A7 7 0 0 0 20.15 12c.29 0 .57-.02.85-.05Z"/>

            </svg>

          )}

        </button>

        {/* LANGUAGE */}
        <div className="lang-box">

          <button
            className="action-btn"
            onClick={() => setShowLang(!showLang)}
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >

              <circle cx="12" cy="12" r="10"></circle>

              <path d="M2 12h20"></path>

              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>

            </svg>

          </button>

          {showLang && (

            <div className="lang-menu">

              <button
                className={lang === "en" ? "active" : ""}
                onClick={() => {
                  setLang("en");
                  setShowLang(false);
                }}
              >
                English
              </button>

              <button
                className={lang === "ar" ? "active" : ""}
                onClick={() => {
                  setLang("ar");
                  setShowLang(false);
                }}
              >
                العربية
              </button>

            </div>

          )}

        </div>

        {/* MOBILE MENU */}
        <button
          className="menu action-btn"
          onClick={() => setShowMenu(true)}
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16"
            />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 12h16"
            />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 18h16"
            />

          </svg>

        </button>

      </div>
{/* MOBILE MENU */}

{showMenu && (

  <div
    className="mobile-menu-overlay"
    onClick={() => setShowMenu(false)}
  >

    <div
      className="mobile-menu"
      onClick={(e) => e.stopPropagation()}
    >

      {/* MENU TOP */}

      <div className="mobile-menu-top">

        <h3>
          {lang === "ar"
            ? "القائمة"
            : "Menu"}
        </h3>

        <button
          className="close-menu"
          onClick={() => setShowMenu(false)}
        >
          ✕
        </button>

      </div>

      {/* LINKS */}

      <div className="mobile-menu-links">

        {links.map((link, index) => (

          <a
            key={link.id}
            href={link.id}
            className="mobile-link"
            onClick={() => setShowMenu(false)}
            style={{
              animationDelay:
                `${index * 0.08}s`,
            }}
          >

            <span>

              {lang === "ar"
                ? link.ar
                : link.en}

            </span>

          </a>

        ))}

      </div>

      {/* SOCIALS */}

      <div className="mobile-socials">

        <a
          href="https://wa.me/201069819706"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>

        <a href="mailto:mahmoud243578@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>

        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>

      </div>

    </div>

  </div>

)}


    </header>

  );

}