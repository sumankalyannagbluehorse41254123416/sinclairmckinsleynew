import Image from "next/image";
import { RiAwardFill } from "react-icons/ri";

interface SubSection {
  description?: string;
}

interface SectionData {
  title?: string;
  image?: string;
  subsections?: SubSection[];
}

interface Props {
  philosophy?: SectionData;
  experience?: SectionData;
}

// ✅ Remove HTML tags from CMS content
const stripHtml = (html?: string) =>
  html ? html.replace(/<[^>]*>/g, "").trim() : "";

export default function PhilosophySection({
  philosophy,
  experience,
}: Props) {
  return (
    <section className="philoshopy_cl">
      <div className="container">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-lg-6">
            <div
              className="Our_philoshopy_details"
              style={{ position: "relative" }}
            >
              <h2>{stripHtml(philosophy?.title)}</h2>

              <div className="right_mark">
                <ul>
                  {philosophy?.subsections?.map((item, index) => (
                    <li key={index}>
                      {stripHtml(item.description)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6 blue_back">
            <div
              className="img_blue_section"
              style={{ position: "relative" }}
            >

              {/* Image from section index 3 */}
              {philosophy?.image && (
                <Image
                  src={philosophy.image}
                  alt="experience"
                  className="expr_img"
                  width={250}
                  height={371}
                />
              )}

              {/* Image from section index 4 */}
              {experience?.image && (
                <Image
                  src={experience.image}
                  alt="philosophy"
                  className="philod"
                  width={233}
                  height={153}
                />
              )}

              <div className="new_li">
                <ul>
                  {experience?.subsections?.map((item, index) => (
                    <li key={index}>
                      {stripHtml(item.description)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="expri_btn">
                <a href="#" className="flex items-center gap-2">
                  <RiAwardFill className="award_icon" />
                  {stripHtml(experience?.title)}
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
