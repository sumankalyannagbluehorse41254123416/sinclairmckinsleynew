"use client";

interface Section {
  title?: string;
  shortDescription?: string;
}

const stripHtml = (html?: string) =>
  html ? html.replace(/<[^>]*>/g, "").trim() : "";

export default function OurCommitment({
  section,
}: {
  section?: Section;
}) {
  const title = stripHtml(section?.title);
  const description = stripHtml(section?.shortDescription);

  return (
    <div className="container">
      <div className="row">
        <div className="our">
          <h3>{title || "Our Commitment"}</h3>

          <p>
            {description ||
              "At Sinclair McKinsley Ltd, we believe that every business has the potential to flourish. Our mission is to guide and support our clients on their journey towards sustainable success."}
          </p>
        </div>
      </div>
    </div>
  );
}
