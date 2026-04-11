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
                md:grid lg:grid-cols-[1fr_3fr]
                overflow-hidden
            "
        >
            <img 
                src={"/contactDTImg.jpg"}
                className="w-full h-100 lg:h-full"
            />

            <ContactSection 
                allEmails={allEmails}
                setAllEmails={setAllEmails}
            />
        </section>
    )
}