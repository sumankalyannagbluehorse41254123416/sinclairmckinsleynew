import ServiceDetails from "@/components/payrol/ServiceDetails";

import PayrollServicesSection from "@/components/payrol/PayrollServicesSection";
import PayrollBenefits from "@/components/payrol/PayrollBenefits";
import ScheduleMeeting from "@/components/ScheduleMeeting";

export default function payrol() {
    return (
        <>
        <ServiceDetails/>
        <PayrollServicesSection/>
        <PayrollBenefits/>
        <ScheduleMeeting/>
        </>
    );
}