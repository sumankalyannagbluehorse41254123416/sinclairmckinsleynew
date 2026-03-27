"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("menu-open");
  };

  return (
    <header className="header_area" id="mynav">
      <div className="main_header_area">
        <div className="container">
          <nav className="navigation">

            <div className="nav-header">
              <Link href="/" className="nav-brand">
                <Image
                  src="/images/sinkot_logo.jpg"
                  alt="logo"
                  width={270}
                  height={68}
                />
              </Link>

              {/* Hamburger */}
              <div
                className={`nav-toggle ${menuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {/* Overlay */}
            <div
              className={`menu-overlay ${menuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            ></div>

            {/* Menu */}
            <div className={`nav-menus-wrapper ${menuOpen ? "open" : ""}`}>
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
      </div>
    </header>
  );
}