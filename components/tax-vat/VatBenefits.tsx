import Image from "next/image";

export default function VatBenefits() {
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
              Sinclair, operating as a specialized accounting firm for GST...
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
                    src="/images/1692280009109.png"
                    alt="Time Savings"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Time Savings</h4>
                <p>
                  Free up your time by outsourcing your VAT return preparation
                  and filing tasks to our experts.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692280020998.png"
                    alt="Accuracy"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Accuracy</h4>
                <p>
                  Our meticulous approach ensures that your VAT returns are
                  error-free and adhere to HMRC guidelines.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692280030702.png"
                    alt="Cost Efficiency"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Cost-Efficiency</h4>
                <p>
                  Avoid potential fines and penalties by ensuring timely and
                  accurate VAT filing.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692280083373.png"
                    alt="Peace of Mind"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Peace of Mind</h4>
                <p>
                  Rest easy knowing that your VAT obligations are being handled
                  by experienced professionals.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692280060005.png"
                    alt="Expert Advice"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Expert Advice</h4>
                <p>
                  Benefit from our expert insights to make informed decisions
                  that impact your VAT liability.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692280066108.png"
                    alt="Focus on Core Activities"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Focus on Core Activities</h4>
                <p>
                  Concentrate on growing your business while we handle your VAT
                  compliance.
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
                With our VAT Return Preparation and Filing service, you can
                navigate the complexities of VAT with ease. Let us manage your
                VAT obligations, leaving you with the confidence that your
                financial reporting is accurate, timely, and fully compliant.
                Contact us today to discover how our services can simplify your
                VAT responsibilities and contribute to your business's success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
