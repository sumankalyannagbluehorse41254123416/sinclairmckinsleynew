import Image from "next/image";
import Link from "next/link";

export default function ScheduleMeeting() {
  return (
    <section className="new_c">
      <div className="container">
        <div className="row mb-5">
          
          <div className="col-lg-6">
            <div className="wpb_wrapper_1">
              <h2>
                <strong>Schedule a meeting</strong> to explore how we enhance
                your value. <strong>Contact us today.</strong>
              </h2>

              <div className="contact_pay">
                <Link href="#contact-us">CONTACT US</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact_right">
              <Image
                src="/images/1693553430947.jpeg"
                alt=""
                width={600}
                height={400}
                className="table"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
