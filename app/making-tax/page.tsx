import MakingTaxDigital from "@/components/making-tax/MakingTaxDigital";
import ServiceBanner from "@/components/making-tax/ServiceBanner";
import BenefitsSection from "@/components/making-tax/BenefitsSection";
import ScheduleMeeting from "@/components/ScheduleMeeting";

export default function makingTax() {
    return (
        <>
        <ServiceBanner/>    
        <MakingTaxDigital/>
        <BenefitsSection/>
        <ScheduleMeeting/>
        </>
    );
}