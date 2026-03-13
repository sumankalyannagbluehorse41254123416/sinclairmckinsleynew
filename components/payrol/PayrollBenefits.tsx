import Image from "next/image";

export default function PayrollBenefits() {
  return (
    <>
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

      <section>
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692279639291.png"
                    alt="Accuracy"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Accuracy</h4>
                <p>
                  Our experienced professionals ensure precise calculations,
                  minimizing errors in payroll processing.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692279668806.png"
                    alt="Time Savings"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Time Savings</h4>
                <p>
                  Free up valuable time spent on payroll tasks, allowing you to
                  focus on strategic business priorities.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692279677689.png"
                    alt="Compliance Assurance"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Compliance Assurance</h4>
                <p>
                  Stay compliant with complex payroll laws, regulations, and
                  tax obligations.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692279685323.png"
                    alt="Employee Satisfaction"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Employee Satisfaction</h4>
                <p>
                  Timely and accurate pay demonstrates your commitment to your
                  workforce, fostering positive employee relations.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692279701722.png"
                    alt="Data Security"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Data Security</h4>
                <p>
                  Your sensitive payroll data is kept secure and confidential
                  with advanced security measures.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className="account_statement">
                <div className="icon_img">
                  <Image
                    src="/images/1692279710344.png"
                    alt="Cost Efficiency"
                    width={80}
                    height={80}
                  />
                </div>
                <h4>Cost-Efficiency</h4>
                <p>
                  Outsourcing payroll can often be more cost-effective than
                  maintaining an in-house payroll department.
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
                By entrusting us with your payroll processes, you can
                concentrate on growing your business while ensuring your
                employees are compensated accurately and promptly. Contact us
                today to explore how our Payroll Services can enhance your
                workforce management and contribute to your business's success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
