"use client";

import { useEffect, useState } from "react";

export default function TopHeader() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let isVisible = true;

      if (window.scrollY > lastScrollY) {
        isVisible = false; // scroll down
      } else {
        isVisible = true; // scroll up
      }

      if (window.scrollY < 10) {
        isVisible = true;
      }

      setShow(isVisible);

      // BODY CLASS CONTROL
      if (isVisible) {
        document.body.classList.add("top-header-visible");
      } else {
        document.body.classList.remove("top-header-visible");
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`top_header ${show ? "show" : "hide"}`}>
      <div className="container">
        <div className="social">
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
                <a
                  href="https://www.linkedin.com/company/sinclair-mckinsley-limited/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}