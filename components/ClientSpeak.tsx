"use client";

import Image from "next/image";
import Script from "next/script";

export default function ClientSpeak() {
  return (
    <section className="clients_wrap">
      <Image
        className="bg_img"
        src="https://www.sinclairmckinsley.co.uk/asset/img/asdsadsad.png"
        alt=""
        width={1920}
        height={600}
      />

      <span className="cl_shape"></span>

      <div className="cl_inner">
        <div className="cl_left">
          <h3 className="clinet">Client Speak</h3>
        </div>

        <Image
          src="https://www.sinclairmckinsley.co.uk/asset/img/sinclar_mike.jpg"
          alt=""
          width={200}
          height={200}
        />

        <section id="testim" className="testim">
          <div className="wrap">
            
            {/* Google Reviews Widget */}
            <div
              className="sk-ww-google-reviews"
              data-embed-id="25448665"
              data-ui="old"
              style={{
                height: "auto",
                width: "616px",
                fontFamily: "Maven Pro",
                backgroundColor: "#ffffff",
              }}
            ></div>

            {/* Widget Script */}
            <Script
              src="https://widgets.sociablekit.com/google-reviews/widget.js"
              strategy="lazyOnload"
            />

            {/* Dots */}
            <ul id="testim-dots" className="dots">
              <li className="dot active"></li>
              <li className="dot"></li>
              <li className="dot"></li>
              <li className="dot"></li>
            </ul>

            {/* Content container */}
            <div id="testim-content" className="cont"></div>

          </div>
        </section>
      </div>
    </section>
  );
}

