import BlogMainPost from "@/components/blog-details/BlogMainPost";
import BlogDetails from "@/components/blog-details/BlogDetails";
import ScheduleMeeting from "@/components/ScheduleMeeting";
import { BLOG_PAGE_IDS } from "@/constant/blog";
import { fetchPageData } from "@/service/fetchdata.services";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

interface Section {
  title?: string;
  description?: string;
  image?: string;
  subsections?: Section[];
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ same as service
  const { slug } = await params;

  // ✅ slug → id mapping
  const id = BLOG_PAGE_IDS[slug as keyof typeof BLOG_PAGE_IDS];

  // ❌ not found
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
    console.error("Blog fetch failed");
    return null;
  }
  console.log("siteData", siteData);
  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  if (!sections.length) {
    console.warn("No blog data found");
    return null;
  }

  // ✅ same pattern
  const mainPostSection = sections[0];
  const mainImage = mainPostSection?.image || "/images/default.jpg";

  const scheduleSection = sections[2];
  const scheduleTitle = scheduleSection?.title;
  const scheduleImage = scheduleSection?.image;

  return (
    <>
      <BlogMainPost image={mainImage} />
      <BlogDetails sections={sections} />
      <ScheduleMeeting title={scheduleTitle} image={scheduleImage} />
    </>
  );
}
