import Image from "next/image";
import { RiAwardFill } from "react-icons/ri";

export default function PhilosophySection() {
  return (
    <section className="philoshopy_cl">
      <div className="container">
        <div className="row">

          <div className="col-lg-6">
            <div
              className="Our_philoshopy_details"
              style={{ position: "relative" }}
            >
              <h2>Our philosophy is always to do our utmost to</h2>

              <div className="right_mark">
                <ul>
                  <li>Our mission ‘’ You grow, we grow ’’;</li>
                  <li>Provide friendly, courteous and efficient service;</li>
                  <li>Always exceed your expectations;</li>
                  <li>Listen to what YOU are saying;</li>
                  <li>Communicate with you quickly and fully;</li>
                  <li>Never surprise you with bills you're not expecting;</li>
                  <li>Be honest, truthful and upfront with you at all times;</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6 blue_back">
            <div
              className="img_blue_section"
              style={{ position: "relative" }}
            >
              <Image
                src="/images/1691673621038.jfif"
                alt="experience"
                className="expr_img"
                width={250}
                height={371}
              />                                                                                                                       

              <Image
                src="/images/1691673621069.png"
                alt="philosophy"
                className="philod"
                width={233}
                height={153}
              />

              <div className="new_li">
                <ul>
                  <li>Stress free.</li>
                  <li>Helpful informative.</li>
                  <li>Saving you money.</li>
                  <li>Making you money.</li>
                </ul>
              </div>

              <div className="expri_btn">
                <a href="javascript:void(0);" className="flex items-center gap-2">
                  <RiAwardFill className="award_icon" />
                  20 Years Experienced
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
