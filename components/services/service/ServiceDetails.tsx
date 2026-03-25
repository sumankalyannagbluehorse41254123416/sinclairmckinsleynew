"use client";

interface Section {
  title?: string;
  shortDescription?: string;
  image?: string;
}

// cleaner
const cleanText = (html?: string) => {
  if (!html) return "";
  return html
    .replace(/&nbsp;/g, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

export default function ServiceDetails({
  section,
}: {
  section?: Section;
}) {
  const imageUrl = section?.image || "/images/bookkeeping.jpg";

  const title = cleanText(section?.title);

  return (
    <div
      className="servicea_details"
      style={{
        backgroundImage: `url(${imageUrl})`,
        height: "565px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional: show title if needed */}
      {/* 
      <div className="All_services_heading">
        <h2>{title}</h2>
      </div>
      */}
    </div>
  );
}
