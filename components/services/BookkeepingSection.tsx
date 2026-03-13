import Image from "next/image";

export default function BookkeepingSection() {
  return (
    <div className="container">
      <div className="row">

        <div className="col-lg-12">
          <div className="all_heading">
            <h1 className="any_one">
              <strong>Bookkeeping</strong> and Precise Financial Record Maintenance
            </h1>
          </div>
        </div>

        <div className="col-lg-12 main_pera">
          <div className="pera">
            In the dynamic landscape of business, maintaining a clear and organized
            financial record is paramount. Our Bookkeeping and Financial Record
            Maintenance service offers you a meticulous and reliable solution to keep
            your financial data in impeccable order, ensuring you have a solid
            foundation for informed decision-making and regulatory compliance.
          </div>
        </div>

        <div className="col-lg-7">
          <div className="pera">
            <p>
              <strong>Transaction Recording:</strong> Every financial transaction,
              no matter how small, is accurately recorded and classified. From sales
              and expenses to invoices and payments, we ensure that no detail is
              overlooked.
            </p>

            <p>
              <strong>General Ledger Maintenance:</strong> Your general ledger is the
              backbone of your financial records. We maintain a comprehensive and
              up-to-date general ledger, providing a snapshot of your financial
              position at any given time.
            </p>

            <p>
              <strong>Bank Reconciliation:</strong> We reconcile your bank statements
              with your financial records to identify discrepancies, ensure accuracy,
              and catch any potential errors or fraudulent activities.
            </p>

            <p>
              <strong>Financial Software Management:</strong> We are proficient in
              various accounting software platforms. If you're using accounting
              software, we'll ensure proper setup, data input, and integration for
              seamless operations.
            </p>

            <p>
              <strong>Financial Reporting:</strong> Regular financial reports,
              tailored to your needs, provide insights into your business's financial
              health. These reports help you make informed decisions and monitor your
              progress.
            </p>

            <p>
              <strong>Compliance and Documentation:</strong> Our meticulous
              record-keeping ensures that you remain compliant with tax regulations
              and other financial reporting requirements. All records are securely
              stored for future reference.
            </p>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="right_img">
            <Image
              src="/images/1691994987874.jpeg"
              alt="Bookkeeping Services"
              width={500}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />

            {/*
            <img src="https://www.sinclairmckinsley.co.uk/asset/img/Accounting-Services.png" alt="...">
            */}
          </div>
        </div>

       

      </div>
    </div>
  );
}
