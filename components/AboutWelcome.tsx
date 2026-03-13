import Image from "next/image";

interface SubSection {
  title?: string;
  description?: string;
  image?: string;
}

interface AboutData {
  title?: string;
  image?: string;
  subsections?: SubSection[];
}

interface AboutWelcomeProps {
  data?: AboutData;
}

export default function AboutWelcome({ data }: AboutWelcomeProps) {
  const sub = data?.subsections?.[0];

  return (
    <section className="paddy40" id="about_welcome">
      <div className="container">
        <div className="row">

          <div className="col-lg-6">
            <div className="sinclair_img_side">

              {data?.image && (
                <Image
                  src={data.image}
                  alt="Sinclair Image 1"
                  className="img_1"
                  width={456}
                  height={456}
                />
              )}

              {sub?.image && (
                <Image
                  src={sub.image}
                  alt="Sinclair Image 2"
                  className="img_2"
                  width={456}
                  height={620}
                />
              )}

            </div>
          </div>

          <div className="col-lg-6">
            <div className="sinclair_details">

              <h6>{data?.title}</h6>

              <h2>{sub?.title}</h2>

              <p
                dangerouslySetInnerHTML={{
                  __html: sub?.description || "",
                }}
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
