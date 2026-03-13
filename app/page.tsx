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



const stripHtml = (html: string) => (html ? html.replace(/<[^>]*>/g, "") : "");

// ✅ Define a lightweight type for your CMS structure
interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: unknown; // safer than `any`
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
  console.log("SITE DATA:", siteData);

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

    const sliderImages =
  sections?.[0]?.subsections
    ?.map((item: Section) => item.image)
    .filter(Boolean) as string[] || [];
  return (
   <>
   <SliderBanner slides={sliderImages} />
   <OverBanner />
   <AboutWelcome />
   <PhilosophySection />
   <OurServices />
   <LatestInformation />
   <Industries />
   <ClientSpeak />
   </>
  );
}