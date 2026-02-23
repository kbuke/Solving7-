import { useOutletContext } from "react-router";
import { ContactSection } from "./Components/ContactSection";

export function ContactPg(){
    const appData = useOutletContext()

    const allEmails = appData?.allEmails
    const setAllEmails = appData?.setAllEmails
    return(
        <section
            className="
                md:h-[calc(100vh-7.5rem)]
                lg:grid lg:grid-cols-[1fr_2fr]
                overflow-hidden
            "
        >
            <img 
                src={"/contactDTImg.jpg"}
                className="h-full"
            />

            <ContactSection 
                allEmails={allEmails}
                setAllEmails={setAllEmails}
            />
        </section>
    )
}