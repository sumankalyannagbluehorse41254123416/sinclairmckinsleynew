import Image from "next/image";

export default function VatReturnSection() {
  return (
    <div className="container">
      <div className="row">

        <div className="col-lg-12">
          <div className="all_heading">
            <h1 className="any_one">
              <strong>Effortless VAT Return</strong> Preparation and Filing with HMRC
            </h1>

            {/*
            <h1 className="any_one">
              <strong>Effortless VAT Return</strong> Preparation and Filing with HMRC
            </h1>
            */}
          </div>
        </div>

        <div className="col-lg-12 main_pera">
          <div className="pera">
            <p>
              Navigating the intricacies of Value Added Tax (VAT) can be complex and time-consuming.
              Our VAT Return Preparation and Filing service offer you a hassle-free solution to ensure
              accurate VAT reporting and compliance with HMRC regulations. With our experienced
              professionals at your side, you can focus on your business while we handle your VAT
              obligations efficiently.
            </p>

            {/*
            <p>
            Navigating the intricacies of Value Added Tax (VAT) can be complex and time-consuming...
            </p>
            */}
          </div>
        </div>

        <div className="col-lg-7">
          <div className="pera">

            <p>
              <strong>Data Collection and Review:</strong> Provide us with your financial records,
              sales, and purchase invoices. Our experts meticulously review and organize your data,
              ensuring accuracy and completeness.
            </p>

            <p>
              <strong>VAT Calculation:</strong> We calculate your VAT liability or refund accurately
              by applying the appropriate VAT rates and schemes based on your business activities.
            </p>

            <p>
              <strong>Preparation of VAT Returns:</strong> Our skilled professionals prepare your
              VAT return forms, including all necessary details required by HMRC, such as input
              and output VAT, VAT on purchases, sales, and adjustments.
            </p>

            <p>
              <strong>Timely Submission:</strong> We ensure that your VAT returns are submitted to
              HMRC within the stipulated deadlines, eliminating the risk of penalties for late filing.
            </p>

            <p>
              <strong>Communication with HMRC:</strong> Our team acts as your intermediary with HMRC,
              handling any queries, clarifications, or correspondence related to your VAT returns.
            </p>

            <p>
              <strong>VAT Planning and Advice:</strong> We offer proactive VAT planning strategies
              to optimize your VAT position, potentially reducing your VAT liability and increasing
              your potential refunds.
            </p>

            <p>
              <strong>Compliance Assurance:</strong> Our service is designed to keep you compliant
              with ever-evolving VAT regulations, minimizing the risk of errors or oversights.
            </p>

          </div>
        </div>

        <div className="col-lg-5">
          <div className="right_img">
            <Image
              src="https://wip.tezcommerce.com:3304/admin/module/70/1691999605551.jpeg"
              alt="VAT Returns"
              width={500}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />

            {/*
            <img src="https://www.sinclairmckinsley.co.uk/asset/img/tax1.jpg" alt="...">
            */}
          </div>
        </div>


      </div>
    </div>
  );
}
