"use client";

import Image from "next/image";

export default function AboutSection() {
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
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1693376475087.jpg"
                    alt=""
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
                <h3 className="title">Meet Our Visionary Founder</h3>
              </div>

              <div className="text">
                <p>
                  Our story begins with Mr. Rajesh Chechani (managing partner),
                  a dynamic and visionary entrepreneur. As one of the youngest
                  Chartered Accountant in India and as qualified ACCA
                  accountant, Mr. Chechani laid the foundation of Sinclair
                  McKinsley Ltd. His passion for excellence, coupled with his
                  deep understanding of financial strategies, has been
                  instrumental in shaping our company's principles and driving
                  its success.
                </p>

                <p>
                  Introducing Alina Ciorba (partner), a newly ACCA qualified
                  accountant, she brings a fresh perspective and a wealth of
                  competence to our organization. Her unwavering dedication,
                  loyalty, and trustworthiness make her a key member of our
                  team, embodying the values that Sinclair McKinsley Ltd holds
                  dear.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="about_us_box">
              <p>
                Sinclair McKinsley Ltd offers a comprehensive range of
                services, including Accountancy, Taxation, and Business
                Advisory. What sets us apart is our commitment to tailor our
                services to the specific needs of each client. Whether you're a
                budding startup or an established enterprise, we work closely
                with you to develop personalized strategies that drive growth
                and prosperity.
                <br />
                <br />
                Based in the UK, our reach extends far beyond borders. Our
                clients benefit from our global perspective and insights, while
                still enjoying the advantages of our local expertise. With
                Sinclair McKinsley Ltd by your side, you can navigate the
                complex world of finance with confidence and make informed
                decisions that propel your business forward.
                <br />
                <br />
                Discover the Sinclair McKinsley Ltd difference today. Join us
                in achieving your business goals with unwavering support,
                innovative strategies, and a dedication to excellence. Contact
                us to embark on a journey of growth, success, and financial
                empowerment.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
