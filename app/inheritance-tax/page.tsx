import ServiceDetails from "@/components/inheritance-tax/ServiceDetails";
import InheritanceTaxSection from "@/components/inheritance-tax/InheritanceTaxSection";
import BenefitsSection from "@/components/inheritance-tax/BenefitsSection";
import ScheduleMeeting from "@/components/ScheduleMeeting";

export default function inheritanceTax() {
    return (
        <>
        <ServiceDetails/>
        <InheritanceTaxSection/>
        <BenefitsSection/>  
        <ScheduleMeeting/>
        </>
    );
}