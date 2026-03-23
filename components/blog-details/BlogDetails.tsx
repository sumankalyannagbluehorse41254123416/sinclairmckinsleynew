"use client";

import Image from "next/image";
import Link from "next/link";
import { BLOG_PAGE_IDS } from "@/constant/blog";

interface Section {
  title?: string;
  description?: string;
  image?: string;
  subsections?: Section[];
}

export default function BlogDetails({ sections }: { sections: Section[] }) {
  
  // ✅ ARRAY INDEX 1
  const sectionOne = sections[1];
  const subSectionsOne = sectionOne?.subsections || [];

  // ✅ ARRAY INDEX 3
  const sectionThree = sections[3];
  const subSectionsThree = sectionThree?.subsections || [];

  // ✅ CLEAN TEXT FUNCTION (FIXED)
  const cleanText = (text?: string) => {
    if (!text) return "";

    return text
      .replace(/<[^>]*>/g, "")   // remove HTML tags
      .replace(/&nbsp;/g, " ")   // remove nbsp
      .replace(/\s+/g, " ")      // remove extra spaces
      .trim();                   // trim start/end
  };

  // ✅ SLUG LOGIC
  const getSlug = (title?: string) => {
    if (!title) return "#";

    const formattedSlug = title
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .toLowerCase();

    return (
      Object.keys(BLOG_PAGE_IDS).find(
        (key) => key.toLowerCase() === formattedSlug
      ) || "#"
    );
  };

  return (
    <>
      <div className="container">
        <div className="cs-blog-detail">
          <div className="blog-details_heading text-center mt-4 mb-4">
            <h2>{sectionOne?.title}</h2>
          </div>
        </div>
      </div>

      <section className="blogWrapper">
        <div className="container">
          <div className="blog_inner">

            {/* MAIN BLOG */}
            <article className="mainBlog">
              <div className="cs-post-title">
                
                {/* DATE */}
                <div className="post-option">
                  <span className="post-date ani">
                    <p>{cleanText(subSectionsOne[0]?.description)}</p>
                  </span>
                </div>

                {/* AUTHOR */}
                <div className="cs-author">
                  <div className="cs-text ani">
                    <p>{cleanText(subSectionsOne[1]?.description)}</p>
                  </div>
                </div>
              </div>

              {/* PARAGRAPHS */}
              {subSectionsOne.slice(2).map((item, index) => (
                <p key={index}>
                  {cleanText(item?.description)}
                </p>
              ))}
            </article>

            {/* SIDEBAR */}
            <div className="sidebar-widget latest-news">
              <div className="sidebar-title">
                <h3>{sectionThree?.title}</h3>
              </div>

              <div className="widget-content">

                {subSectionsThree.map((post, index) => {
                  const slug = getSlug(post?.title);

                  return (
                    <article className="post" key={index}>
                      <Link href={`/blog-details/${slug}`}>
                        
                        <figure className="thumb">
                          <Image
                            src={post?.image || "/images/default.jpg"}
                            alt=""
                            width={80}
                            height={80}
                          />
                        </figure>

                        <h5>{post?.title}</h5>

                        <div className="post-info">
                          {cleanText(post?.description)}
                        </div>

                      </Link>
                    </article>
                  );
                })}

              </div>

              <Link href="/blog" className="view_blog">
                view More
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
