import SliderBanner from "@/components/SliderBanner";
import OverBanner from "@/components/OverBanner";
import AboutWelcome from "@/components/AboutWelcome";
import PhilosophySection from "@/components/PhilosophySection";
import OurServices from "@/components/OurServices";
import LatestInformation from "@/components/LatestInformation";
import Industries from "@/components/Industries";
import ClientSpeak from "@/components/ClientSpeak";

export default function Home() {
  return (
   <>
   <SliderBanner />
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