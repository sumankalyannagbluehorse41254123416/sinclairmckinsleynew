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

export default function BookkeepingSection({
  section,
}: {
  section?: Section;
}) {
  const title = cleanText(section?.title);
  const shortDesc = cleanText(section?.shortDescription);
  const imageUrl = section?.image || "/images/default.jpg";

  const items = section?.subsections || [];

  return (
    <div className="container">
      <div className="row">

        {/* Heading */}
        <div className="col-lg-12">
          <div className="all_heading">
            <h1 className="any_one">
              <strong>{title}</strong>
            </h1>
          </div>
        </div>

        {/* Top description */}
        <div className="col-lg-12 main_pera">
          <div className="pera">
            {shortDesc}
          </div>
        </div>

        {/* Left Content */}
        <div className="col-lg-7">
          <div className="pera">

            {items.map((item, index) => {
              const subTitle = cleanText(item.title);
              const subDesc = cleanText(item.description);

              return (
                <p key={index}>
                  <strong>{subTitle}:</strong> {subDesc}
                </p>
              );
            })}

          </div>
        </div>

        {/* Right Image */}
        <div className="col-lg-5">
          <div className="right_img">
            <Image
              src={imageUrl}
              alt={title || "Bookkeeping"}
              width={500}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
