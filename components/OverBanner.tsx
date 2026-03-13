import Image from "next/image";

interface BannerItem {
  title?: string;
  description?: string;
  image?: string;
}

interface OverBannerProps {
  data: BannerItem[];
}

export default function OverBanner({ data }: OverBannerProps) {
  return (
    <section id="over_div">
      <div className="container">
        <div className="row">

          {data?.map((item, index) => (
            <div className="col-lg-3 col-sm-12" key={index}>
              <div className="services over_banner">

                <div className="icon">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title || "icon"}
                      width={60}
                      height={60}
                    />
                  )}
                </div>

                <div className="details_read_more">
                  <h6>{item.title}</h6>

                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.description || "",
                    }}
                  />

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
