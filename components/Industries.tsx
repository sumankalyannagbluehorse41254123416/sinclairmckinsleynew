"use client";

import Image from "next/image";

const industries = [
  {
    id: 0,
    title: "Manufacturing and distribution",
    img: "/images/1691675207218.png",
    desc: "Manufacturing remains one of the key industries for the UK. In its various guises the UK manufacturing industry employs almost three million people.",
  },
  {
    id: 1,
    title: "Charities",
    img: "/images/1691675193197.png",
    desc: "Accounting for charities and the not-for-profit sector is a specialist area that requires expertise and an understanding of the industry.",
  },
  {
    id: 2,
    title: "Construction",
    img: "/images/1691675279251.png",
    desc: "We understand that issues of cash management, supply chain resilience and meeting tight margins and deadlines are keeping you up at night.",
  },
  {
    id: 3,
    title: "Hospitality & Entertainment",
    img: "/images/1691675332485.png",
    desc: "Our Leisure and Hospitality Team provides specialist accountancy and business advisory expertise to a wide variety of leisure and hospitality businesses.",
  },
  {
    id: 4,
    title: "Real Estate",
    img: "/images/1691675379658.png",
    desc: "Real estate companies must be armed with funding alternatives to optimise client service levels.",
  },
  {
    id: 5,
    title: "Retail & Wholesale",
    img: "/images/1691675424263.png",
    desc: "The retail and wholesale businesses operate on a transformative economic system and face frequent fluctuations.",
  },
];

export default function Industries() {
  return (
    <section>
      <div className="header_information">
        <h2>Industries</h2>

        <p>
          At Sinclair McKinsley, we understand that each industry possesses its
          unique financial intricacies and challenges. Our comprehensive
          accounting solutions are tailored to address the specific needs of
          diverse sectors.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {industries.map((item) => (
            <div className="col-lg-4 col-sm-12 up_bottm" key={item.id}>
              <div className="servies_card">
                <a
                  data-bs-toggle="modal"
                  data-bs-target={`#exampleModalToggle${item.id}`}
                  role="button"
                >
                  <div className="services_icon">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={80}
                      height={60}
                    />
                  </div>

                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </a>
              </div>

              {/* Modal */}
              <div
                className="modal popup_all fade"
                id={`exampleModalToggle${item.id}`}
                tabIndex={-1}
              >
                <div className="modal-dialog">
                  <div className="modal-content popup_main">
                    <div className="modal_head">
                      <h5 className="modal-title text-center">{item.title}</h5>

                      <button
                        type="button"
                        className="btn-close cross"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    <div className="modal-body details_body">
                      <div className="services_icon back_color">
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={80}
                          height={60}
                        />
                      </div>

                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
