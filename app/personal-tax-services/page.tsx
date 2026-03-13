import ServiceDetails from "@/components/personal-tax-services/ServiceDetails";
import AccountingServices from "@/components/personal-tax-services/AccountingServices";
import WhyChooseUs from "@/components/personal-tax-services/WhyChooseUs";
import AccountingFooterText from "@/components/personal-tax-services/AccountingFooterText";
import ScheduleMeeting from "@/components/ScheduleMeeting";

export default function personaltaxservices(){
    return(
        <>
        <ServiceDetails/>
        <AccountingServices/>
        <WhyChooseUs/>
        <AccountingFooterText/>
        <ScheduleMeeting/>
        </>
    );


}