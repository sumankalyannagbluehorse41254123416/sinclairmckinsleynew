import Image from "next/image";

export default function AboutWelcome() {
  return (
    <section className="paddy40" id="about_welcome">
      <div className="container">
        <div className="row">

          <div className="col-lg-6">
            <div className="sinclair_img_side">
              <Image
                src="/images/1691673387390.jpg"
                alt="Sinclair Image 1"
                className="img_1"
                width={456}
                height={456.91}
              />
              <Image
                src="/images/1691673387454.png"
                alt="Sinclair Image 2"
                className="img_2"
                width={456}
                height={620}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="sinclair_details">
              <h6>Welcome to</h6>
              <h2>Sinclair McKinsley</h2>
              <p>
                Welcome to Sinclair McKinsley, a growing accountancy firm dedicated
                to helping you achieve your financial goals. With our team of
                experts, we offer comprehensive accounting, taxation, and financial
                planning solutions to businesses and individuals. Trust us to
                navigate the complexities of finance and secure a prosperous future
                for you.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
