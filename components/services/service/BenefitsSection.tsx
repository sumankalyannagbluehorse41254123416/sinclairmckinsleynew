"use client";

import Image from "next/image";

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  subsections?: Section[];
}

// ✅ clean HTML + &nbsp;
const cleanText = (html?: string) => {
  if (!html) return "";
  return html
    .replace(/&nbsp;/g, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

export default function BenefitsSection({
  section,
}: {
  section?: Section;
}) {
  const title = cleanText(section?.title);
  const lastDesc = cleanText(section?.shortDescription);

  const items = section?.subsections || [];

  return (
    <>
      {/* Heading */}
      <div className="wpb_wrapper">
        <div className="wpb_text_column wpb_content_element vc_custom_1684907875863">
          <div className="wpb_wrapper all_heading">
            <h1
              className="any_one"
              style={{
                textAlign: "center",
                margin: "0 auto",
                fontSize: "42px",
                maxWidth: "1000px",
              }}
            >
              <strong>{title || "BENEFITS"}</strong>
            </h1>
          </div>
        </div>
      </div>

      {/* Cards */}
      <section>
        <div className="container">
          <div className="row">

            {items.map((item, index) => {
              const img = item.image || "/images/default.png";
              const itemTitle = cleanText(item.title);
              const itemDesc = cleanText(item.description);

              return (
                <div className="col-lg-3 col-sm-12" key={index}>
                  <div className="account_statement">

                    <div className="icon_img">
                      <Image
                        src={img}
                        alt={itemTitle || "benefit"}
                        width={60}
                        height={60}
                      />
                    </div>

                    <h4>{itemTitle}</h4>
                    <p>{itemDesc}</p>

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Last Description */}
      <section>
        <div className="container">
          <div className="row">

            <div className="col-lg-12">
              <div className="wpb_text_column wpb_wrapper wpb_content_element vc_custom_1684907913794">
                <p className="serv">
                  {lastDesc}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
