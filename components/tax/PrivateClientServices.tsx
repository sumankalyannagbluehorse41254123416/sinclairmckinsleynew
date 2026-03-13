import Image from "next/image";

export default function PrivateClientServices() {
  return (
    <div className="container">
      <div className="row">

        {/* Heading */}
        <div className="col-lg-12">
          <div className="all_heading">
            <h1 className="any_one">
              <strong>Private Client Financial Solutions:</strong> Personal Financial Planning &amp; Expert Tax Advice
            </h1>
          </div>
        </div>

        {/* Intro paragraph */}
        <div className="col-lg-12 main_pera">
          <div className="pera">
            <p>
              Welcome to a personalized approach to securing your financial
              future. Our Private Client services offer an integrated suite of
              solutions tailored to individuals seeking comprehensive financial
              planning, meticulous wealth management, and strategic tax
              guidance. With our expert team by your side, you'll gain the
              confidence and insights needed to achieve your financial
              aspirations.
            </p>
          </div>
        </div>

        {/* Left content */}
        <div className="col-lg-7">
          <div className="pera">

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
                Personal <strong>Financial Planning</strong>
              </h1>
            </div>

            <p>
              <strong>Goal Assessment:</strong> We take the time to understand
              your short-term and long-term financial objectives, creating a
              roadmap that aligns with your dreams and aspirations.
            </p>

            <p>
              <strong>Comprehensive Analysis:</strong> Our financial experts
              analyse your current financial situation, including income,
              expenses, assets, and liabilities, to develop a customized plan
              tailored to your unique circumstances.
            </p>

            <p>
              <strong>Investment Strategy:</strong> Craft a diversified
              investment portfolio that balances risk and reward, reflecting
              your risk tolerance and financial goals.
            </p>

            <p>
              <strong>Estate Planning:</strong> Ensure your wealth is preserved
              and distributed according to your wishes. We guide you through
              estate planning, including wills, trusts, and inheritance
              strategies.
            </p>

          </div>
        </div>

        {/* Right image */}
        <div className="col-lg-5">
          <div className="right_img">
            <Image
              src="/images/1693203442922.png"
              alt=""
              width={500}
              height={400}
            />
          </div>
        </div>

        {/* Expert Tax Advice */}
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
                Expert <strong>Tax Advice</strong>
              </h1>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12">

                <p>
                  <strong>Strategic Tax Planning:</strong> Leverage our tax
                  experts to minimize your tax liability through proactive
                  planning, deductions, and credits.
                </p>

                <p>
                  <strong>Tax Compliance:</strong> Ensure accurate and timely
                  filing of your tax returns, staying in full compliance with
                  ever-changing tax regulations.
                </p>

                <p>
                  <strong>Tax-Efficient Investments:</strong> Make informed
                  investment decisions with an eye on tax consequences,
                  ensuring your investments are aligned with your tax goals.
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
