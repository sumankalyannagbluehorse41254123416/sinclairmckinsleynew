import Image from "next/image";

export default function OverBanner() {
  return (
    <section id="over_div">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-sm-12">
            <div className="services over_banner">
              <div className="icon">
                <Image
                  src="/images/1691672613032.png"
                  alt="Stress free"
                  width={60}
                  height={60}
                />
              </div>
              <div className="details_read_more">
                <h6>Stress free</h6>
                <p>
                  We are friendly and approachable; you can talk to us about anything,
                  stress will be a thing of the past
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-12">
            <div className="services over_banner">
              <div className="icon">
                <Image
                  src="/images/1691672677362.png"
                  alt="Helpful"
                  width={60}
                  height={60}
                />
              </div>
              <div className="details_read_more">
                <h6>Helpful &amp; informative</h6>
                <p>
                  We have a Customer Services Manager to help you every step of the way;
                  jargon busting accountancy speak, helping you in meetings and keeping you informed
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-12">
            <div className="services over_banner">
              <div className="icon">
                <Image
                  src="/images/1691672980378.png"
                  alt="Saving money"
                  width={60}
                  height={60}
                />
              </div>
              <div className="details_read_more">
                <h6>Saving you money</h6>
                <p>
                  We research all sorts of solutions to make sure every penny you can save,
                  you do save
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-12">
            <div className="services over_banner">
              <div className="icon">
                <Image
                  src="/images/1691673004043.png"
                  alt="Making money"
                  width={60}
                  height={60}
                />
              </div>
              <div className="details_read_more">
                <h6>Making you money</h6>
                <p>
                  We are growth focused and forward thinking. You set your personal
                  and business goals and we will make sure everything is in place
                  for you to achieve them
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
