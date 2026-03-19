"use client";

interface Section {
  title?: string;
  shortDescription?: string;
  image?: string;
}

// ✅ Improved cleaner function
const cleanText = (html?: string) => {
  if (!html) return "";

  return html
    .replace(/&nbsp;/g, " ")   // remove &nbsp;
    .replace(/<[^>]*>/g, "")   // remove HTML tags
    .replace(/\s+/g, " ")      // remove extra spaces
    .trim();
};

export default function AboutBanner({ section }: { section?: Section }) {
  const imageUrl = section?.image || "/images/about.jpeg";

  const title = cleanText(section?.title);
  const description = cleanText(section?.shortDescription);

  return (
    <div
      className="about"
      style={{
        backgroundImage: `url(${imageUrl})`,
        height: "650px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "32px",
      }}
    >
      <div className="container">
        <div className="about_text">
          <h1>{title || "About Us"}</h1>

          <p>
            {description ||
              "Sinclair McKinsley Ltd - Nurturing Growth, Ensuring Success"}
          </p>
        </div>
      </div>
    </div>
  );
}
