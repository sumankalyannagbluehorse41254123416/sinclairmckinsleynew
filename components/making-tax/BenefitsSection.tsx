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
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1692279866245.png"
                    alt="Efficiency Gains"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Efficiency Gains</h4>
                <p>
                  Streamline your tax reporting process with digital solutions,
                  reducing manual work and potential errors.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1692279875450.png"
                    alt="Compliance Confidence"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Compliance Confidence</h4>
                <p>
                  Stay compliant with MTD regulations and avoid penalties
                  associated with non-compliance.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1692279900174.png"
                    alt="Time and Resource Savings"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Time and Resource Savings</h4>
                <p>
                  Our services free up your time and resources, allowing you to
                  focus on core business activities.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1692279988487.png"
                    alt="Data Security"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Data Security</h4>
                <p>
                  Migrate your financial data to secure, cloud-based software,
                  minimizing the risk of data loss or unauthorized access.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1692279928917.png"
                    alt="Expert Guidance"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Expert Guidance</h4>
                <p>
                  Leverage our expertise to navigate the complexities of MTD,
                  ensuring smooth implementation and ongoing compliance.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1692279939516.png"
                    alt="Strategic Insights"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Strategic Insights</h4>
                <p>
                  Gain valuable insights from accurate and up-to-date financial
                  data, enabling informed decision-making.
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
                Embrace the digital future of taxation with confidence. Our
                Making Tax Digital Services provide you with the tools,
                expertise, and support needed to seamlessly transition into the
                digital tax landscape. Contact us today to explore how we can
                assist you in navigating the world of MTD and optimizing your
                tax reporting processes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
