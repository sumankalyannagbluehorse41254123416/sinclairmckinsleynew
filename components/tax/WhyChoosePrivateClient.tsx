import Image from "next/image";

export default function WhyChoosePrivateClient() {
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
              Why Choose Our <strong>Private Client</strong> Services
            </h1>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row">

            {/* Card 1 */}
            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692279553801.png"
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Personalized Attention</h4>
                <p>
                  Your financial goals are unique, and we provide tailored
                  solutions to match your individual needs.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692279573007.png"
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Holistic Approach</h4>
                <p>
                  By integrating financial planning and tax guidance, we offer a
                  comprehensive solution for your financial well-being.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692279582431.png"
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Expertise</h4>
                <p>
                  Our experienced professionals bring a wealth of knowledge to
                  guide your financial decisions.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692279591155.png"
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Peace of Mind</h4>
                <p>
                  With us as your trusted financial partner, you can confidently
                  navigate the complexities of personal finance.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692279601517.png"
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Long-Term Partnership</h4>
                <p>
                  We're dedicated to building lasting relationships that support
                  your financial journey over time.
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
              <div className="wpb_text_column wpb_wrapper wpb_content_element vc_custom_1684907913794">
                <p className="serv">
                  Elevate your financial strategy with our Private Client
                  services. Let us be your partner in securing your financial
                  future. Contact us today to embark on a journey toward
                  financial success and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
