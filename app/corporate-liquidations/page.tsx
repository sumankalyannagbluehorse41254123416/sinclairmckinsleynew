import ServiceBanner from "@/components/corporate-liquidations/ServiceBanner";
import CorporateLiquidations from "@/components/corporate-liquidations/CorporateLiquidations";
import BenefitsSection from "@/components/corporate-liquidations/BenefitsSection";
import ScheduleMeeting from "@/components/ScheduleMeeting";

export default function corporateLiquidations() {
    return (
        <>
        <ServiceBanner/>
        <CorporateLiquidations/>
        <BenefitsSection/>
        <ScheduleMeeting/>
        </>
    );
}