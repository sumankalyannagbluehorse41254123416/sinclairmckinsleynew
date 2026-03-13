import Image from "next/image";

export default function BenefitsSection() {
  return (
    <>
      {/* Benefits Heading */}
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
              <strong>BENEFITS</strong>
            </h1>
          </div>
        </div>

        {/*
        <div className="wpb_text_column wpb_content_element vc_custom_1684907820871">
          <div className="wpb_wrapper">
            <p style={{ lineHeight: "30px", textAlign: "center" }}>
              Sinclair, operating as a specialized accounting firm for GST,
              ensures that its clients are thoroughly informed about all GST
              prerequisites and maintain full compliance with these obligations.
            </p>
          </div>
        </div>
        */}
      </div>

      {/* Benefits Cards */}
      <section>
        <div className="container">
          <div className="row">

            {/* Card 1 */}
            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1693550799300.png"
                    alt="loading"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Expertise</h4>
                <p>
                  Our team consists of seasoned experts with a profound
                  understanding of international taxation, financial reporting,
                  and foreign company structures.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1693550832762.png"
                    alt="loading"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Custom Solutions</h4>
                <p>
                  We recognize that every business is unique. Our solutions are
                  tailored to your specific circumstances, goals, and
                  challenges.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1693550906795.png"
                    alt="loading"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Transparency</h4>
                <p>
                  Clear communication and transparency are our cornerstones.
                  You'll always have a transparent view of your financial
                  status and compliance standing.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1693551340793.png"
                    alt="loading"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Reliability</h4>
                <p>
                  Backed by years of experience, our track record reflects our
                  commitment to precision, dependability, and excellence in
                  financial services.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Text Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="mt-5 mb-5">
                Navigating overseas income, reporting, and foreign company
                structures doesn't have to be overwhelming. Partner with us to
                navigate these complexities seamlessly, ensuring financial
                success and adherence to international standards. Reach out
                today to explore how we can contribute to your global financial
                prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
