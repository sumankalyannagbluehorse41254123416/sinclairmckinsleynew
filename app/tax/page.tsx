import ServiceBanner from "@/components/tax/ServiceBanner";
import PrivateClientServices from "@/components/tax/PrivateClientServices";
import WhyChoosePrivateClient from "@/components/tax/WhyChoosePrivateClient";
import ScheduleMeeting from "@/components/ScheduleMeeting";

export default function tax() {
    return (
        <>
        <ServiceBanner/>
        <PrivateClientServices/>
        <WhyChoosePrivateClient/>
        <ScheduleMeeting/>
        </>
    );
}