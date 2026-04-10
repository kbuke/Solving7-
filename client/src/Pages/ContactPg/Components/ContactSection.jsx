import { PostEmail } from "./PostEmail";
import { Socials } from "./Socials";

export function ContactSection({
    allEmails,
    setAllEmails
}){
    return(
        <div
            style={{backgroundImage: `url(${"/bg-doodle.png"})`}}
            className="px-4 lg:px-20 py-6 bg-no-repeat bg-center bg-cover bg-black"
        >
            <PostEmail 
                allEmails={allEmails}
                setAllEmails={setAllEmails}
            />

            <Socials />
        </div>
    )
}