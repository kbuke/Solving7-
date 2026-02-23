import { PostEmail } from "./PostEmail";

export function ContactSection({
    allEmails,
    setAllEmails
}){
    return(
        <div
            className="px-20 py-6"
        >
            <h1
                className="uppercase font-bold text-5xl tracking-widest"
            >
                Contact Us
            </h1>

            <PostEmail 
                allEmails={allEmails}
                setAllEmails={setAllEmails}
            />
        </div>
    )
}