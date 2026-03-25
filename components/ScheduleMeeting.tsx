"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  title?: string;
  image?: string;
};

export default function ScheduleMeeting({ title, image }: Props) {
  return (
    <section className="new_c">
      <div className="container">
        <div className="row mb-5">
          
          <div className="col-lg-6">
            <div className="wpb_wrapper_1">
              <h2>
                <strong>{title || "Schedule a meeting"}</strong>
              </h2>

              <div className="contact_pay">
                <Link href="#contact-us">CONTACT US</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact_right">
              <Image
                src={image || "/images/default.jpg"}
                alt="schedule"
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
