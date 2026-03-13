"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Link from "next/link";
import Image from "next/image";

const blogData = [
  {
    title: "Discover new adventures over the world",
    image:
      "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg",
    link: "/blog-details/Discover-new-adventures-over-the-world",
  },
  {
    title: "Living in downtown in the biggest cities",
    image:
      "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992496812.png",
    link: "/blog-details/living-in-downtown-in-the-biggest-city",
  },
  {
    title: "Discover new adventures over the world",
    image:
      "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992429352.jpg",
    link: "/blog-details/Discover-new-adventure-over-the-world",
  },
  {
    title: "Living in downtown in the biggest cities",
    image:
      "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992333320.jpg",
    link: "/blog-details/Living-in-downtown-in-the-biggest-cities",
  },
  {
    title: "Mini Budget 2022: Main Takeaways",
    image:
      "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1692276875466.jpg",
    link: "/blog-details/Mini-Budget-2022-Main-Takeaways",
  },
];

export default function LatestInformation() {
  return (
    <section id="Latest_information">
      <div className="header_information">
        <h2>Latest Information</h2>

        <p>
          In today's rapidly changing world, staying up to date is essential.
          Our commitment to providing you with the latest information ensures
          that you are well-equipped to make informed decisions, navigate
          complexities, and seize new opportunities.
        </p>
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
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="customer-logos"
          >
            {blogData.map((blog, index) => (
              <SwiperSlide key={index}>
                <div className="slide_new">
                  <Link href={blog.link}>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={392}
                      height={260}
                      style={{ width: "392px", height: "260px" }}
                    />
                  </Link>

                  <Link className="icome" href={blog.link}>
                    {blog.title}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
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
