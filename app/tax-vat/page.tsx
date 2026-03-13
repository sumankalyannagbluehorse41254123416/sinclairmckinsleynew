import ServiceDetails from "@/components/tax-vat/ServiceDetails";

import VatReturnSection from "@/components/tax-vat/VatReturnSection";
import VatBenefits from "@/components/tax-vat/VatBenefits";
import ScheduleMeeting from "@/components/ScheduleMeeting";

export default function taxVat() {
    return (
        <>
        <ServiceDetails/>
        <VatReturnSection/>
        <VatBenefits/>
        <ScheduleMeeting/>
        </>
    );
}