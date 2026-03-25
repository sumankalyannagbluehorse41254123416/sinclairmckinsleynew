import SliderBanner from "@/components/SliderBanner";
import OverBanner from "@/components/OverBanner";
import AboutWelcome from "@/components/AboutWelcome";
import PhilosophySection from "@/components/PhilosophySection";
import OurServices from "@/components/OurServices";
import LatestInformation from "@/components/LatestInformation";
import Industries from "@/components/Industries";
import ClientSpeak from "@/components/ClientSpeak";
import { fetchPageData } from "@/service/fetchdata.services";
import { headers } from "next/headers";

// ✅ Remove HTML tags
const stripHtml = (html: string) => (html ? html.replace(/<[^>]*>/g, "") : "");

// ✅ Types
interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: unknown;
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function Home() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "03ea79fd-05e8-4826-918e-e96fbec3febf",
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  // ✅ Sections Mapping
  const sliderImages =
    (sections?.[0]?.subsections
      ?.map((item: Section) => item.image)
      .filter(Boolean) as string[]) || [];

  const overBannerData = sections?.[1]?.subsections || [];
  const aboutSection = sections?.[2];
  const philosophySection = sections?.[3];
  const experienceSection = sections?.[4];
  const industriesSection = sections?.[5];
  const servicesSection = sections?.[6];
  const latestInfoSection = sections[8];
  return (
    <>
      <SliderBanner slides={sliderImages} />
      <OverBanner data={overBannerData} />
      <AboutWelcome data={aboutSection} />

      <PhilosophySection
        philosophy={philosophySection}
        experience={experienceSection}
      />

      {/* ✅ Dynamic Our Services */}
      <OurServices
        sectionTitle={stripHtml(servicesSection?.title || "")}
        shortDescription={stripHtml(servicesSection?.shortDescription || "")}
        subSections={
          servicesSection?.subsections?.map((item: Section) => ({
            image: item.image || "",
            title: stripHtml(item.title || ""),
            description: stripHtml(item.description || ""),
          })) || []
        }
      />

      <LatestInformation section={latestInfoSection} />
      <Industries data={industriesSection} />
      <ClientSpeak />
    </>
  );
}
