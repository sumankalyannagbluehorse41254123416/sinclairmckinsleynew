import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <>
      <div className="wpb_wrapper">
        <div className="wpb_text_column wpb_content_element vc_custom_1684907875863">
          <div className="wpb_wrapper all_heading">
            <h1
              className="any_one"
              style={{
                textAlign: "center",
                margin: "0 auto",
                fontSize: "42px",
                maxWidth: "1000px",
              }}
            >
              <strong>WHY CHOOSE US</strong>
            </h1>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1692279747476.png"
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Expertise</h4>
                <p>
                  Our team comprises certified accountants with extensive
                  experience across various industries.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1692279756638.png"
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Accuracy</h4>
                <p>
                  We prioritize precision in all financial matters, ensuring
                  reliable data for confident decision-making.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1692279766100.png"
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Customization</h4>
                <p>
                  Tailored solutions designed to address your unique business
                  requirements.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1692279774844.png"
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Compliance</h4>
                <p>
                  Stay up to date with regulatory changes, minimizing risks and
                  potential legal issues.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1692279793907.png"
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Client-Centric Approach</h4>
                <p>
                  We are committed to your success, offering personalized
                  attention and responsive communication.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
