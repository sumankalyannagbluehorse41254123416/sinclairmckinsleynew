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

      <section>
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1693553479046.png"
                    alt="loading"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Customized Solutions</h4>
                <p>
                  We recognize that each situation is unique. Our services are
                  customized to fit your specific circumstances, ensuring the
                  best possible outcome.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1693553527836.png"
                    alt="loading"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Compassionate Approach</h4>
                <p>
                  We understand the emotional strain of financial difficulties.
                  Our empathetic professionals provide support and guidance
                  with care.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1693553576959.png"
                    alt="loading"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Legal Navigation</h4>
                <p>
                  Navigating the legal intricacies of liquidations and
                  bankruptcies can be overwhelming. Our expertise ensures a
                  smooth process while protecting your interests.
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
                Navigate corporate liquidations and personal bankruptcies with
                confidence. Partner with us to achieve informed decisions,
                protect your interests, and move forward towards a brighter
                financial future. Contact us today to learn how we can help you
                through these challenging financial circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
