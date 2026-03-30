"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopHeader, setShowTopHeader] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("menu-open");
  };

  // show top header only at top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 50) {
        setShowTopHeader(true);
      } else {
        setShowTopHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== TOP HEADER ===== */}
      <div className={`top_header ${showTopHeader ? "show" : "hide"}`}>
        <div className="container">
          <div className="contact_deatails">

            <div className="contact_header">
              <ul>
                <li>
                  <a href="mailto:info@sinclairmckinsley.co.uk">
                    <i className="fa fa-envelope-o"></i>
                    info@sinclairmckinsley.co.uk
                  </a>
                </li>

                <li>
                  <a href="tel:02084278787">
                    <i className="fa fa-phone"></i>
                    0208 427 8787
                  </a>
                </li>
              </ul>
            </div>

            <div className="header_social">
              <ul className="social_icon">
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <header
        className="header_area"
        style={{ top: showTopHeader ? "40px" : "0px" }}
      >
        <div className="container">
          <nav className="navigation">

            {/* LOGO + HAMBURGER */}
            <div className="nav-header">
              <Link href="/" className="nav-brand">
                <Image
                  src="/images/sinkot_logo.jpg"
                  alt="logo"
                  width={200}
                  height={60}
                />
              </Link>

              {/* ☰ HAMBURGER */}
              <div
                className={`nav-toggle ${menuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {/* OVERLAY */}
            <div
              className={`menu-overlay ${menuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            ></div>

            {/* MOBILE MENU */}
            <div className={`nav-menus-wrapper ${menuOpen ? "open" : ""}`}>

              {/* ❌ CLOSE BUTTON */}
              <div className="menu-close" onClick={toggleMenu}>
                <span></span>
                <span></span>
              </div>

              <ul className="nav-menu">
                <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link href="/about" onClick={toggleMenu}>About Us</Link></li>
                <li><Link href="/#our_services" onClick={toggleMenu}>Services</Link></li>
                <li><a href="#contact-us" onClick={toggleMenu}>Contact Us</a></li>
                <li><Link href="/blog" onClick={toggleMenu}>Blog</Link></li>
              </ul>

            </div>

          </nav>
        </div>
      </header>
    </>
  );
}