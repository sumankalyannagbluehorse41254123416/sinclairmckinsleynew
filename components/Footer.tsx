"use client";

import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Footer() {
  function savecontact(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="pt-5 pb-5 footer">
      <div className="container footer_icon_box">
        <div className="row">

          {/* ABOUT COMPANY */}
          <div className="col-lg-5 col-xs-12 about-company">
            <ul className="footer_contact">
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                {" "}SincKot House, 211, Station Road, Harrow, HA1 2TP
              </li>

              <li>
                <a href="mailto:raj@sinclairmckinsley.co.uk">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  raj@sinclairmckinsley.co.uk
                </a>
              </li>

              <li>
                <a href="tel:+442084278787">
                  <i className="fa fa-phone phone_box" aria-hidden="true"></i>
                  {" "}44 (0) 208 427 8787
                </a>
              </li>

              <li>
                <a href="fax:+442038139687">
                  <i className="fa fa-fax phone_box" aria-hidden="true"></i>
                  {" "}44 (0) 203 813 9687
                </a>
              </li>
            </ul>

            <Link href="/">
              <Image
                src="/images/sinkot_logo.jpg"
                alt="logo"
                width={200}
                height={80}
                className="fottr_logo"
              />
            </Link>

            <p className="pr-5 text-white-50">
              Sinckot Group, founded in 2006, started with a core focus on
              Healthcare, Property, Accounting, Online Healthcare Solutions,
              Financial Consultancy, and Business Advisory services.
            </p>

            <ul className="form_social">
              <li>
                <a
                  href="https://www.linkedin.com/company/sinclair-mckinsley-limited/?viewAsMember=true"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">QUICK Links</h4>

            <ul className="m-0 p-0 ul_link menu menu-1">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about">About Us</Link>
              </li>

              <li>
                <Link href="/#our_services">Services</Link>
              </li>

              <li>
                <Link href="/#contact-us">Contact Us</Link>
              </li>

              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* CONTACT FORM */}
          <div className="col-lg-4 col-sm-12 location" id="contact-us">
            <h4 className="mt-lg-0 mt-sm-3">Contact</h4>
{/* 
            <form id="contact_form" method="POST">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control name"
                  placeholder="Name*"
                />
                <span
                  className="text-danger hidden contact_gap"
                  id="errorName"
                ></span>
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control email"
                  placeholder="Email*"
                />
                <span
                  className="text-danger hidden contact_gap"
                  id="errorEmail"
                ></span>
              </div>

              <div className="mb-3">
                <textarea
                  placeholder="Message*"
                  className="form-control message"
                ></textarea>

                <span
                  className="text-danger hidden contact_gap"
                  id="msgError"
                ></span>
              </div>

              <div className="submit_btn">

                <button
                  className="theme-btn btnfos btnfos-4 btn-4 g-recaptcha"
                  data-sitekey="6LdTrn0oAAAAAHw4J76qsP7vZq7wVwBqJmS0MiJ0"
                  data-callback="onSubmit"
                  data-action="submit"
                  type="button"
                  id="submit"
                  onClick={() => savecontact()}
                >
                  <span>SUBMIT</span>
                </button>

                <div
                  id="msgSuccess"
                  className="text-info text-center hidden contact_gap"
                ></div>

                <div className="clearfix"></div>
              </div>
            </form> */}
              <ContactForm />
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="row mt-5">
        <div className="col copyright">
          <p className="text-center">
            <small>
              © 2023 Powered By{" "}
              <a href="https://www.bluehorse.in/" className="Link">
                BlueHorse
              </a>{" "}
              | All Rights Reserved.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
