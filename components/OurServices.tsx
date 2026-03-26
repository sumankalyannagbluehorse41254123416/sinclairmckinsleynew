"use client";

import Image from "next/image";
import Link from "next/link";

type SubSection = {
  image: string;
  title: string;
  description: string;
};

type Props = {
  sectionTitle: string;
  shortDescription: string;
  subSections: SubSection[];
};

// ✅ MUST match SERVICES_PAGE_IDS keys
const slugs = [
  "personal-tax-services",
  "inheritance-tax",
  "corporate-liquidations",
  "tax",
  "overseas-income",
  "making-tax",
  "tax-vat",
  "payrol",
  "services",
];

export default function OurServices({
  sectionTitle,
  shortDescription,
  subSections,
}: Props) {
  return (
    <section id="our_services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading">
              <h2 className="titleservice">{sectionTitle}</h2>
              <p className="para">{shortDescription}</p>
            </div>
          </div>

          {subSections?.map((item, index) => (
            <div className="col-lg-4 col-sm-12 up_bottm" key={index}>
              <div className="servies_card">
                <div className="services_icon">
                  <Image
                    src={item.image || "/images/default.png"}
                    alt={item.title}
                    width={70}
                    height={70}
                  />
                </div>

                <h6>{item.title}</h6>
                <p>{item.description}</p>

                <div className="learn_more">
                  <Link href={`/services/${slugs[index]}`}>
                    Learn More{" "}
                    <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
