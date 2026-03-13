import Image from "next/image";

export default function OverseasIncomeSection() {
  return (
    <div className="container">
      <div className="row">

        {/* Heading */}
        <div className="col-lg-12">
          <div className="all_heading">
            <h1 className="any_one">
              <strong>Overseas Income,</strong> Reporting and Foreign Companies
            </h1>
          </div>
        </div>

        {/* Intro Paragraph */}
        <div className="col-lg-12 main_pera">
          <div className="pera">
            <p>
              Welcome to our comprehensive accountancy practice, where we
              specialize in handling overseas income reporting and foreign
              companies’ structures. Navigating the complex landscape of
              international taxation can be challenging, but with our
              expertise, you can streamline your financial processes and
              ensure compliance with all relevant regulations.
            </p>
          </div>
        </div>

        {/* Left Content */}
        <div className="col-lg-7">
          <div className="pera">

            <p>
              <strong>Global Tax Compliance:</strong> Navigate the intricate web
              of international tax regulations with confidence. We ensure
              meticulous tax compliance across various jurisdictions,
              ensuring accuracy and timeliness.
            </p>

            <p>
              <strong>Strategic Foreign Company Structures:</strong> Establishing
              and managing foreign company structures requires careful
              planning. We guide you in choosing optimal structures while
              ensuring adherence to legal and regulatory frameworks.
            </p>

            <p>
              <strong>Overseas Income Analysis:</strong> Gain clarity about your
              international income streams. Our meticulous analysis ensures
              that you have a comprehensive understanding of your global
              financial inflows.
            </p>

            <p>
              <strong>Thorough Reporting Solutions:</strong> Our experienced
              professionals create detailed financial reports, including
              income statements, asset declarations, and other relevant
              documentation, ensuring accurate reporting to tax authorities.
            </p>

            <p>
              <strong>Tax Compliance Assurance:</strong> Stay compliant with tax
              regulations across different jurisdictions. We manage your tax
              obligations meticulously, ensuring accurate reporting and
              minimizing potential penalties.
            </p>

            <p>
              <strong>Cross-Border Tax Optimization:</strong> Our experts
              identify opportunities for cross-border tax optimization,
              helping you make the most of available deductions, credits,
              and exemptions.
            </p>

            <p>
              <strong>Country-Specific Expertise:</strong> Each country has
              unique tax and reporting requirements. Our deep understanding
              of international tax laws allows us to tailor our services to
              your specific situation.
            </p>

            <p>
              <strong>Confidentiality and Security:</strong> We prioritize the
              confidentiality and security of your financial information.
              Our practices ensure your data remains protected at all times.
            </p>

          </div>
        </div>

        {/* Right Image */}
        <div className="col-lg-5">
          <div className="right_img">
            <Image
              src="/images/1693550573702.png"
              alt=""
              width={500}
              height={400}
            />
          </div>
        </div>

     

      </div>
    </div>
  );
}
