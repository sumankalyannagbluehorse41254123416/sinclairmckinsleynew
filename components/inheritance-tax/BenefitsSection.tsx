import Image from "next/image";

export default function BenefitsSection() {
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
              <strong>BENEFITS</strong>
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
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1693552918405.png"
                    alt="loading"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Expertise</h4>
                <p>
                  Our team boasts deep knowledge of inheritance tax laws, estate
                  planning, and trust formation, ensuring that your financial
                  affairs are managed with the highest level of competence.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1693552981277.png"
                    alt="loading"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Customized Approach</h4>
                <p>
                  We understand the significance of individual circumstances.
                  Our services are tailored to reflect your preferences,
                  securing your assets according to your vision.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1693553017066.png"
                    alt="loading"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Legacy Preservation</h4>
                <p>
                  We help you leave a lasting legacy by preserving and optimizing
                  your wealth for the benefit of your heirs and causes close to
                  your heart.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1693553050546.png"
                    alt="loading"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Ethical Practices</h4>
                <p>
                  We uphold the highest ethical standards, ensuring your
                  financial matters are managed with integrity and transparency.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="mt-5 mb-5">
                Secure your financial legacy with precision and care. Join us to
                navigate inheritance tax planning and trust formation, creating
                a future that reflects your values and benefits your loved ones.
                Contact us today to embark on a journey of financial security
                and legacy preservation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
