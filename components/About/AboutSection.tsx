"use client";

import Image from "next/image";

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  subsections?: Section[];
}

const cleanText = (html?: string) => {
  if (!html) return "";

  return html
    .replace(/&nbsp;/g, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

export default function AboutSection({
  section,
}: {
  section?: Section;
}) {
  const imageUrl = section?.image || "/images/1693376475087.jpg";

  const title = cleanText(section?.title);

  const subsections = section?.subsections || [];

  const firstPara = cleanText(subsections[0]?.description);
  const secondPara = cleanText(subsections[1]?.description);

  const remainingParas = subsections.slice(2);

  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          {/* Image Column */}
          <div className="image-column col-lg-5 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInLeft">
              <figure className="image-1">
                <a className="lightbox-image" data-fancybox="images">
                  <Image
                    src={imageUrl}
                    alt={title || "about"}
                    width={334}
                    height={230}
                  />
                </a>
              </figure>
            </div>
          </div>

          {/* Content Column */}
          <div className="content-column col-lg-7 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              <div className="sec-title">
                <h3 className="title">
                  {title || "Meet Our Visionary Founder"}
                </h3>
              </div>

              <div className="text">
                <p>{firstPara}</p>
                <p>{secondPara}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row">
          <div className="col-md-12">
            <div className="about_us_box">
              <p>
                {remainingParas.length > 0 ? (
                  remainingParas.map((item, index) => (
                    <span key={index}>
                      {cleanText(item.description)}
                      {index !== remainingParas.length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </span>
                  ))
                ) : (
                  <>
                    Sinclair McKinsley Ltd offers a comprehensive range of
                    services, including Accountancy, Taxation, and Business
                    Advisory.
                    <br />
                    <br />
                    Based in the UK, our reach extends far beyond borders.
                    <br />
                    <br />
                    Discover the Sinclair McKinsley Ltd difference today.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
