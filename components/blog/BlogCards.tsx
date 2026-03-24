"use client";

import Image from "next/image";
import Link from "next/link";

// ✅ Remove HTML tags
const stripHtml = (html: string) => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
};

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  subsections?: Section[];
}

export default function BlogCards({ sections = [] }: { sections: Section[] }) {
  return (
    <section className="container_new container">
      {sections.slice(0, 5).map((item, index) => {
        const sub1 = item.subsections?.[0];
        const sub2 = item.subsections?.[1];

        // ✅ Clean data
        const title = stripHtml(item.title || "");
        const shortDesc = stripHtml(item.shortDescription || "");
        const category = stripHtml(sub1?.description || "");
        const authorName = stripHtml(sub1?.title || "");
        const date = stripHtml(sub2?.title || "");

        return (
          <Link
            key={index}
            href={`/blog-details/${title
              .replace(/\s+/g, "-")
              .replace(/[^\w-]/g, "")}`}
          >
            <div className="card-container">
              {/* IMAGE */}
              <div className="card-image">
                <Image
                  src={item.image || "/images/default.jpg"}
                  alt={title}
                  width={400}
                  height={300}
                />
              </div>

              <div className="card-body">
                {/* CATEGORY */}
                <span className="card-badge card-badge-blue">
                  {category || "category"}
                </span>

                {/* TITLE */}
                <h1>{title}</h1>

                {/* SHORT DESCRIPTION */}
                <p className="card-subtitle">
                  {shortDesc}
                </p>

                {/* AUTHOR */}
                <div className="card-author">
                  <Image
                    src={sub1?.image || "/images/default-avatar.jpg"}
                    alt="author"
                    width={40}
                    height={40}
                  />

                  <div className="author-info">
                    <p className="author-name">{authorName}</p>
                    <p className="post-timestamp">{date}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
