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
              Sinclair recognizes the significance of accountancy for businesses...
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
                    src="/images/1692279452786.png"
                    alt="Time Savings"
                    width={60}
                    height={60}
                  />
                </div>
                <h4>Time Savings</h4>
                <p>
                  Let us handle the intricacies of financial record-keeping,
                  freeing you to focus on core business activities.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692279467996.png"
                    alt="Data Accuracy"
                    width={60}
                    height={60}
                  />
                </div>
                <h4>Data Accuracy</h4>
                <p>
                  Minimize errors and discrepancies with our attention to
                  detail and systematic approach.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692279480517.png"
                    alt="Decision Confidence"
                    width={60}
                    height={60}
                  />
                </div>
                <h4>Decision Confidence</h4>
                <p>
                  Access to accurate financial data empowers you to make
                  well-informed decisions that drive your business forward.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692279491561.png"
                    alt="Financial Health Insights"
                    width={60}
                    height={60}
                  />
                </div>
                <h4>Financial Health Insights</h4>
                <p>
                  Clear financial records provide valuable insights into your
                  business's strengths, weaknesses, and opportunities for growth.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692279502856.png"
                    alt="Audit Preparedness"
                    width={60}
                    height={60}
                  />
                </div>
                <h4>Audit Preparedness</h4>
                <p>
                  Well-maintained records ensure you're ready for audits,
                  making the process smoother and less stressful.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692279514740.png"
                    alt="Cost Efficiency"
                    width={60}
                    height={60}
                  />
                </div>
                <h4>Cost Efficiency</h4>
                <p>
                  Outsourcing your bookkeeping can be more cost-effective
                  than hiring and training in-house staff.
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
              <div className="wpb_text_column wpb_wrapper wpb_content_element vc_custom_1684907913794">
                {/*
                <div className="all_heading">
                  <h1 className="any_one" style={{textAlign:'center',margin:'0 auto',fontSize:'42px',maxWidth:'1000px'}}>
                    Elevate your business. <strong>Requiring Professional Accounting Services?</strong>
                  </h1>
                </div>
                */}

                <p className="serv">
                  Partner with us to ensure your financial records are in
                  impeccable order. Our dedicated team is committed to
                  maintaining the accuracy and integrity of your financial
                  data, giving you peace of mind and the freedom to focus
                  on what you do best – growing your business. Contact us
                  today to explore how our Bookkeeping and Financial Record
                  Maintenance service can benefit you.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
