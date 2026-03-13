import BookkeepingSection from "@/components/services/BookkeepingSection";
import ServiceDetails from "@/components/services/ServiceDetails";

import BenefitsSection from "@/components/services/BenefitsSection";
import ScheduleMeeting from "@/components/ScheduleMeeting";

export default function services() {
    return (
        <>
        <ServiceDetails/>
        <BookkeepingSection/>
        <BenefitsSection/>
        <ScheduleMeeting/>
        </>
    );
}