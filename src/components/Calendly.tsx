import { InlineWidget } from "react-calendly";

export default function Calendly() {
    return (
        <InlineWidget url="https://calendly.com/luminaweb3" pageSettings={{
            hideEventTypeDetails: true,
            hideLandingPageDetails: true,
            backgroundColor: '0E0E0E',
            textColor: 'D4D4D4',
            primaryColor: '50C878',
        }} />
    )
}
