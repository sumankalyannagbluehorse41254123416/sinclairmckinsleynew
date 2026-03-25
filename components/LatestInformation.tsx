"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Link from "next/link";
import Image from "next/image";

interface SubSection {
  title?: string;
  image?: string;
}

interface Section {
  title?: string;
  shortDescription?: string;
  subsections?: SubSection[];
}

// 🔥 helper function to clean HTML
const cleanHTML = (html?: string) => {
  if (!html) return "";

  const text = html.replace(/<[^>]*>/g, "").trim(); // remove tags + trim
  return text;
};

export default function LatestInformation({
  section,
}: {
  section: Section;
}) {
  const blogs = section?.subsections || [];

  const cleanedDescription = cleanHTML(section?.shortDescription);

  return (
    <section id="Latest_information">
      <div className="header_information">
        <h2>{section?.title}</h2>

        {/* ✅ Only show if not empty */}
        {cleanedDescription && <p>{cleanedDescription}</p>}
      </div>

      <div className="bg_information">
        <div className="container">
          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="customer-logos"
          >
            {blogs.map((blog, index) => {
              const slug = blog?.title
                ?.replace(/\s+/g, "-")
                ?.replace(/[^\w-]+/g, "");

              const image = blog?.image;

              return (
                <SwiperSlide key={index}>
                  <div className="slide_new">
                    <Link href={`/blog-details/${slug}`}>
                      <Image
                        src={image || "/images/1691992519667.jpg"}
                        alt={blog?.title || "blog"}
                        width={392}
                        height={260}
                        style={{ width: "392px", height: "260px" }}
                      />
                    </Link>

                    <Link className="icome" href={`/blog-details/${slug}`}>
                      {blog?.title}
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="view_more mt-5 text-center">
          <Link href="/blog">
            VIEW MORE <i className="fa fa-plus"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
