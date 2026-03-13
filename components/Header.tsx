import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="header_area"
      id="mynav"
      style={{ backgroundColor: "white" }}
    >
      <div className="main_header_area animated">
        <div className="container">
          <nav id="navigation1" className="navigation">
            <div className="nav-header">
              <a className="nav-brand" href="https://www.sinclairmckinsley.co.uk">
                <Image
                  src="/images/sinkot_logo.jpg"
                  alt="logo"
                  width={270}
                  height={68.06}
                />
              </a>

              <div className="nav-toggle"></div>
            </div>

            <div className="nav-menus-wrapper">
              <ul className="nav-menu align-to-right menu menu-1">
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/about">About Us</Link>
                </li>

                <li>
                  <Link href="/#our_services">Services</Link>

                  {/*
                  <ul className="nav-dropdown">
                    <li>
                      <a href="javascript:void(0);">Menu Level</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Menu Level</a>
                    </li>
                  </ul>
                  */}
                </li>

                <li>
                  <a href="#contact-us">Contact Us</a>
                </li>

                <li>
                  <Link href="/blog">Blog</Link>

                  {/*
                  <ul className="nav-dropdown">
                    <li>
                      <Link href="/blog-details">Blog Detail</Link>
                    </li>
                  </ul>
                  */}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
