import Image from "next/image";

export default function OurServices() {
  const services = [
    {
      img: "/images/1691674051617.png",
      title: "Professional Accounting Services for Your Financial Success",
      desc: "Are you seeking accurate and reliable accounting solutions to streamline your financial management and drive your business towards success? Look no further. Our dedicated team of seasoned accounting experts is here to provide you with comprehensive accounting services tailored to meet your unique needs.",
      link: "/personal-tax-services",
    },
    {
      img: "/images/1693381399837.png",
      title:
        "Inheritance Tax Planning, Wills and estate planning and Trust Formation",
      desc: "We specialize in empowering you to manage your financial legacy effectively. Our comprehensive services cover inheritance tax planning and trust formation, ensuring your assets are preserved, your wishes honoured, and your loved ones' financial futures secured.",
      link: "/inheritance-tax",
    },
    {
      img: "/images/1693381623547.png",
      title: "Corporate Liquidations and Personal Bankruptcies Assistance",
      desc: "We are your partner in navigating challenging financial circumstances with professionalism and expertise. We provide support for corporate liquidations and personal bankruptcies, guiding businesses and individuals alike through these complex processes.",
      link: "/corporate-liquidations",
    },
    {
      img: "/images/1691673877696.png",
      title: "Personal Financial Planning & Expert Tax Advice",
      desc: "Welcome to a personalized approach to securing your financial future. Our Private Client services offer an integrated suite of solutions tailored to individuals seeking comprehensive financial planning.",
      link: "/tax",
    },
    {
      img: "/images/1693380962431.png",
      title: "Overseas Income, Reporting and Foreign Companies",
      desc: "We specialize in handling overseas income reporting and foreign companies’ structures, helping you navigate the complex landscape of international taxation.",
      link: "/overseas-income",
    },
    {
      img: "/images/1692178148788.png",
      title: "Making Tax Digital (MTD) with Our Comprehensive Services",
      desc: "As tax regulations evolve and become increasingly digitized, complying with the requirements of Making Tax Digital (MTD) can present challenges for businesses.",
      link: "/making-tax",
    },
    {
      img: "/images/1691674153675.png",
      title: "Effortless VAT Return Preparation and Filing with HMRC",
      desc: "Our VAT Return Preparation and Filing service offers you a hassle-free solution to ensure accurate VAT reporting and compliance with HMRC regulations.",
      link: "/tax-vat",
    },
    {
      img: "/images/1691673946468.png",
      title: "Payroll Services for Smooth Workforce Management",
      desc: "Our Payroll Services offer you a streamlined and dependable solution to handle all aspects of employee compensation.",
      link: "/payrol",
    },
    {
      img: "/images/1691673811644.png",
      title: "Bookkeeping and Precise Financial Record Maintenance",
      desc: "Our Bookkeeping and Financial Record Maintenance service ensures your financial data stays organized and reliable.",
      link: "/services",
    },
  ];

  return (
    <section id="our_services">
      <div className="container">
        <div className="row">

          <div className="col-lg-12">
            <div className="heading">
              <h2>Our Services</h2>
              
              <p className="para">
                Welcome to a world of accountancy empowerment where your needs are our priority. At Sinclair McKinely, we pride ourselves on offering a diverse range of services tailored to individuals, businesses, and nonprofit organisations. Whether you're seeking expert assistance with tax filing, meticulous bookkeeping, or any other financial matter, our dedicated team is here to guide you every step of the way.
              </p>
            </div>
          </div>

          {services.map((service, index) => (
            <div className="col-lg-4 col-sm-12 up_bottm" key={index}>
              <div className="servies_card">
                <div className="services_icon">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={70}
                    height={70}
                  />
                </div>

                <h6>{service.title}</h6>
                <p>{service.desc}</p>

                <div className="learn_more">
                  <a href={service.link}>
                    Learn More{" "}
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
