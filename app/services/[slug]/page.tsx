import ServiceDetails from "@/components/services/service/ServiceDetails";
import BookkeepingSection from "@/components/services/service/BookkeepingSection";
import BenefitsSection from "@/components/services/service/BenefitsSection";
import ScheduleMeeting from "@/components/ScheduleMeeting";
import { SERVICES_PAGE_IDS } from "@/constant/services";
import { fetchPageData } from "@/service/fetchdata.services";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ same as your blog page
  const { slug } = await params;

  // ✅ directly match slug → id
  const id = SERVICES_PAGE_IDS[slug as keyof typeof SERVICES_PAGE_IDS];

  // ❌ if slug not found → 404
  if (!id) {
    return notFound();
  }

  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData({ host, ...headersObj }, id);
  } catch (error) {
    console.error("Service fetch failed");
    return null;
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  if (!sections.length) {
    console.warn("No service data found");
    return null;
  }

  // ✅ same structure as your current service page
  const bannerSection = sections[0];
  const bookkeepingSection = sections[1];
  const benefitsSection = sections[2];
  const scheduleSection = sections[3];
  return (
    <>
      <ServiceDetails section={bannerSection} />
      <BookkeepingSection section={bookkeepingSection} />
      <BenefitsSection section={benefitsSection} />
      <ScheduleMeeting
        title={scheduleSection?.title}
        image={scheduleSection?.image}
      />
    </>
  );
}
