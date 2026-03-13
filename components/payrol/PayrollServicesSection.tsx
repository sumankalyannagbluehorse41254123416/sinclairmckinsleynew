import Image from "next/image";

export default function PayrollServicesSection() {
  return (
    <div className="container">
      <div className="row">

        <div className="col-lg-12">
          <div className="all_heading">
            <h1 className="any_one">
              <strong>Payroll Services for</strong> Smooth Workforce Management
            </h1>

            {/*
            <h1 className="any_one">
              <strong>Payroll Services for</strong> Smooth Workforce Management
            </h1>
            */}
          </div>
        </div>

        <div className="col-lg-12 main_pera">
          <div className="pera">
            <p>
              Managing payroll is a critical function that demands accuracy,
              timeliness, and compliance with ever-changing labour laws. Our
              Payroll Services offer you a streamlined and dependable solution
              to handle all aspects of employee compensation, benefits, and
              deductions, ensuring your employees are paid accurately and on
              time while relieving you of the administrative burden.
            </p>

            {/*
            <p>
              Managing payroll is a critical function that demands accuracy...
            </p>
            */}
          </div>
        </div>

        <div className="col-lg-7">
          <div className="pera mt_same">

            <p>
              <strong>Payroll Processing:</strong> We handle the entire payroll
              process from start to finish. This includes calculating hours
              worked, wages, overtime, and any special compensation, such as
              bonuses or commissions.
            </p>

            <p>
              <strong>Tax Withholding and Reporting:</strong> We ensure accurate
              calculation and withholding of federal, state, and local taxes,
              along with proper reporting and submission to tax authorities.
            </p>

            <p>
              <strong>Benefits Administration:</strong> Our system tracks and
              manages employee benefits, including health insurance, retirement
              plans, and other deductions, ensuring compliance with benefit
              regulations.
            </p>

            <p>
              <strong>Compliance and Labor Regulations:</strong> Stay up to date
              with complex labour laws and regulations. We ensure your payroll
              practices align with legal requirements, reducing the risk of
              penalties and legal disputes.
            </p>

            <p>
              <strong>Year-End Reporting:</strong> We prepare and distribute W-2
              forms to employees and handle all necessary year-end payroll
              reporting, making tax season smoother for both you and your staff.
            </p>

            {/*
            Alternative HTML content kept as comment
            */}

          </div>
        </div>

        <div className="col-lg-5 mt_same">
          <div className="right_img">
            <Image
              src="/images/1693223991035.png"
              alt="Payroll Services"
              width={500}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
