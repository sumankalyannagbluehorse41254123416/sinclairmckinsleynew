import AboutBanner from "@/components/About/AboutBanner";
import OurCommitment from "@/components/About/OurCommitment";
import AboutSection from "@/components/About/AboutSection";
import JoinSection from "@/components/About/JoinSection";
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
export default async function About() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "33a01354-7466-48cd-b2d1-ee2a1d424dd8",
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }
  console.log("SITE DATA:", siteData);

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  const bannerSection = sections[0];
  const commitmentSection = sections[1];
  const aboutSectionData = sections[2];
  return (
    <>
      <AboutBanner section={bannerSection} />
      <OurCommitment section={commitmentSection} />
      <AboutSection section={aboutSectionData} />
      <JoinSection />
    </>
  );
}
