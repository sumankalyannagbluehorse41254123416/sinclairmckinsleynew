"use client";

import Image from "next/image";
import { useEffect } from "react";

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  subsections?: Section[];
}

interface IndustriesProps {
  data?: Section;
}

/* ✅ Remove HTML + Trim text */
const cleanText = (html?: string, maxLength = 140) => {
  if (!html) return "";

  const text = html.replace(/<[^>]*>/g, "").trim();

  return text.length > maxLength
    ? text.slice(0, maxLength) + "..."
    : text;
};

export default function Industries({ data }: IndustriesProps) {

  // ✅ FIXED: Proper Bootstrap import (no TS error)
  useEffect(() => {
    import("bootstrap");
  }, []);

  if (!data) return null;

  const title = data.title;
  const shortDesc = data.shortDescription;
  const items = data.subsections || [];

  return (
    <section>
      <div className="header_information">
        <h2>{title}</h2>
        <p>{cleanText(shortDesc, 2000)}</p>
      </div>

      <div className="container">
        <div className="row">
          {items.map((item, index) => (
            <div className="col-lg-4 col-sm-12 up_bottm" key={index}>
              
              {/* CARD */}
              <div className="servies_card">
                <a
                  data-bs-toggle="modal"
                  data-bs-target={`#exampleModalToggle${index}`}
                  role="button"
                >
                  <div className="services_icon">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title || "industry"}
                        width={80}
                        height={60}
                      />
                    )}
                  </div>

                  <h6>{item.title}</h6>
                  <p>{cleanText(item.description, 240)}</p>
                </a>
              </div>

              {/* MODAL */}
              <div
                className="modal fade"
                id={`exampleModalToggle${index}`}
                tabIndex={-1}
              >
                <div className="modal-dialog">
                  <div className="modal-content popup_main">
                    
                    <div className="modal_head">
                      <h5 className="modal-title text-center">
                        {item.title}
                      </h5>

                      <button
                        type="button"
                        className="btn-close cross"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    <div className="modal-body details_body">
                      <div className="services_icon back_color">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.title || "industry"}
                            width={80}
                            height={60}
                          />
                        )}
                      </div>

                      <p>{cleanText(item.description, 500)}</p>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
